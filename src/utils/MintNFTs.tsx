import axios from 'axios';
import { Blockfrost, Lucid, MintingPolicy, PolicyId, Unit, utf8ToHex, } from "lucid-cardano";
import * as config from "../config/Config";
import {decode} from 'string-encode-decode'

export const mintNFTRandomly = async (
  data: any,
  lucid: any
): Promise<any> => {

  const address = await lucid.wallet.address();

  const resData = await decode(data);
  const realData = await JSON.parse(resData)
  const {mdata, id, step} = realData;

  let payresult = false;
  let mintresult = false;

  ////////////////////////////////////////////////  Author Addr
  const lucid1 = await Lucid.new(
    new Blockfrost(
      config.BlockFrost_URI, 
      config.BLOCKFROST_PROJ),
    config.NetWork,
  );

  lucid1.selectWalletFromSeed(config.Seed,
    { addressType: "Base", accountIndex: 0});

  const AUTHOR_ADDR = await lucid1.wallet.address();

  ////////////////////////////////////////////////  Pay Minting Price & Mint Fee to Author Addr
  let price = 1000000n;
  let nft_price = 100000000n;

  switch (step) {
    case "free":
      price = config.FREE_PRICE;
      nft_price = config.FREE_NFT_PRICE;
      break;
    case "half":
      price = config.HALF_PRICE;
      nft_price = config.HALF_NFT_PRICE;
      break;
    case "full":
      price = config.FULL_PRICE;
      nft_price = config.FULL_NFT_PRICE;
      break;
  }

  try {
    const tx = await lucid
      .newTx()
      .payToAddress(AUTHOR_ADDR, { lovelace: price })
      .complete();

    const signedTx = await tx.sign().complete();
    const txHash = await signedTx.submit();

    payresult = await lucid.awaitTx(txHash);

  } catch (err) {    
    payresult = false;
  }  

  if (!payresult)
    return payresult;

  ////////////////////////////////////////////// Once payment tx is confirmed, then Mint & Send NFT
  const { paymentCredential } = lucid1.utils.getAddressDetails(
    AUTHOR_ADDR
  );

  const mintingPolicy: MintingPolicy = lucid1.utils.nativeScriptFromJson(
    {
      type: "all",
      scripts: [
        { type: "sig", keyHash: paymentCredential?.hash! },
      ],
    },
  );

  const mintingPolicyId: PolicyId = lucid1.utils.mintingPolicyToId(
    mintingPolicy,
  );

  const unit: Unit = mintingPolicyId + utf8ToHex(config.NFTName + id);

  const metadata = {
      [mintingPolicyId]: {
        [config.NFTName + id]: {
          image: config.IPFSURL + id + config.IMAGE_TYPE,
          mediaType: config.MEDIA_TYPE,
          name: config.NFTName + "#" + id,
          description: config.DESCRIPTION,
          id: id,

          Backgrounds: mdata.Backgrounds, 
          FallingSymbols: mdata.FallingSymbols,
          Chips: mdata.Chips,
          Eyes: mdata.Eyes,
          Eyebrows: mdata.Eyebrows,
          Neck: mdata.Neck,
          Mouth: mdata.Mouth,
          Miscellaneous: mdata.Miscellaneous,
          Hats: mdata.Hats
        }
      }
  };  

  try {
    let tx;

    if (step != "free") {
      tx = await lucid1
        .newTx()
        .validTo(Date.now() + config.VALID_TIME)
        .attachMetadata(721 , metadata)
        .attachMintingPolicy(mintingPolicy)
        .mintAssets({ [unit]: 1n })
        .payToAddress(address, { [unit]: 1n })
        .payToAddress(config.PAYMENT_ADDR, { lovelace: nft_price })
        .complete();          
    } else {
      tx = await lucid1
        .newTx()
        .validTo(Date.now() + config.VALID_TIME)
        .attachMetadata(721 , metadata)
        .attachMintingPolicy(mintingPolicy)
        .mintAssets({ [unit]: 1n })
        .payToAddress(address, { [unit]: 1n })
        .complete();  
    }    

    const signedTx = await tx.sign().complete();
    const txHash = await signedTx.submit();

    mintresult = await lucid1.awaitTx(txHash);

  } catch (err) {
    mintresult = false;
  }

  return mintresult; 
}

const getNFTData = async (address: string): Promise<any> => {
  let data;

  const GETURL = `${config.BASIC_URL}/nftid?address=${address}`;
  try {
    await axios.get(GETURL).then((res) => {
      data = res.data;
    });
  } catch(err: any) {
    data = err.response.data;
  }
  return data;
}

const postMintedNFTID = async (
  id: string
): Promise<string> => {
  const POSTURL = `${config.BASIC_URL}/nftid`;

  const res = await axios.post(
    POSTURL, 
    {
      id: parseInt(id)
    }
  );
  
  if (res.data.result == "success")
    return "success";
  else
    return "fail";
  return "fail";
}

export const connectWallet = async (wallet : string) : Promise<any> => {
  // Create Lucid
  const lucid = await Lucid.new(
        new Blockfrost(
          config.BlockFrost_URI, 
          config.BLOCKFROST_PROJ),
        config.NetWork,
      );
  // Wallet Connection
  let api: any;
  if (!window.cardano) {
    return "No Wallet";
  }

  if (wallet == "nami") {
    if (!window.cardano.nami) {
      alert("Please install Nami Wallet!");
    }
    try {
      api = await window.cardano.nami.enable();
    } catch (err) {
      return "Decline Access";
    }
  }
  else if (wallet == "eternl") {
    if (!window.cardano.eternl) {
      alert("Please install eternl Wallet!");
    }
    try {
      api = await window.cardano.eternl.enable();
    } catch (err) {
      return "Decline Access";
    }
  }
  lucid.selectWallet(api);

  return lucid;
}

//////////////////////////////////////////////////////////////  Main Function.
export const mintNFT = async (
  lucid: Lucid
): Promise<string> => {
  // Get Selected Wallet Address
  const address = await lucid.wallet.address();

  // Get Image Data for NFT to be minted
  const data = await getNFTData(address);
  const resData = await decode(data);
  const realData = await JSON.parse(resData)
  const {id, step} = realData;


  if (data == "Server Error!") {
    return "Server Error!";
  } else if (data == "There is no mintable NFT"){
    return "Minting was finished!"
  } else if (data == "DB Error"){
    return "Server Error!"
  }

  if (step == "notTime") {
    return "Minting is not started yet!"
  }

  // Mint NFT
  const result = await mintNFTRandomly(data, lucid);
  
  if (result == true) {
    // If minting was succeed, register it to db.
    let res: string = "fail";

    while (res == "fail") {
      res = await postMintedNFTID(id);
      if (res == "success")
        break;
    }
  } else {
    // If minting was failed, return ERROR.
    return "Transaction Failed!";
  }
  return "Transaction Succeed!";
}