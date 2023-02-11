import React from "react";
import {mintNFT} from "../../utils/MintNFTs";
//import { decode } from 'cborg'

const Mint = ({IsConnected, lucid, setIsMinting, setAlertState}: any) => {

  const onMint = async (event: any) => {
    event.preventDefault();
    
    if (!IsConnected) {
      alert("Please connect Nami or Eternl Wallet!");
    }
    else {
      setIsMinting(true);
//      const api = await window.cardano.nami.enable();
//      const cborBalance = await api.getBalance();
//      const balance = decode(Buffer.from(cborBalance, 'hex'))

      let result = "";

//      if (parseInt(balance) <= 102000000) {
//        setIsMinting(false);
//        setAlertState({msg: "The balance of your wallet should be more than 102ADA!", open: true});
//        return;
//      }
      result = await mintNFT(lucid);
      
      setIsMinting(false);

      if (result == "Transaction Succeed!") {
        setAlertState({msg: "Mint success!", open: true});
      } else if (result == "Server Error!") {
        setAlertState({msg: "Server Error!", open: true});
      } else if (result == "Minting was finished!") {
        setAlertState({msg: "Minting was finished!", open: true});
      } else if (result == "Minting is not started yet!") {
        setAlertState({msg: "Minting is not started yet!", open: true});
      } else {
        setAlertState({msg: "Mint fail!", open: true});
      }

    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-12">
      <div className="bg-black">
        <div className="max-w-screen-2xl  mx-auto my-16">
          <div className="flex flex-col items-center text-center mx-auto">
            {/* <p className="text-gray-400 font-logo uppercase mb-4 tracking-widest font-benji">SOLD OUT</p> */}
            <h1 className="font-logo text-white text-5xl font-bold uppercase font-benji">POKER FACES POKER CLUB</h1>
            <p className="max-w-2xl text-white text-2xl	my-8 font-light leading-10">PFPC is a Cardano NFT pfp collection and poker-obsessed community featuring 10,000 Poker Faces, each having a unique blend of attributes inspired by iconic reactions at the poker tables.</p>
            <div className="grid grid-cols-2 gap-4 ">
              <div>
                <div className="font-logo text-gray-400 text-sm font-benji">Network</div>
                <p className="">Cardano</p>
              </div>
              <div>
                <div className="font-logo text-gray-400 text-sm font-benji">Supply</div>
                <p>10,000</p>
              </div>
            </div>
            <div className="w-full mt-8 flex flex-col sm:flex-row sm:justify-center gap-2.5 font-body">
              <button onClick = {onMint} className="rounded-lg mx-auto tracking-wide inline-block bg-white hover:bg-gray-200 font-extrabold focus-visible:ring ring-indigo-300 text-2xl md:text-xl text-center text-black	outline-none transition duration-100 px-10 py-5 uppercase">
                Mint Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mint;