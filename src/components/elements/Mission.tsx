import NFTShow from './NFTShow';

const Mission = () => {
  return (
    <div className="max-w-screen-2xl px-4 md:px-8">
      <div className="grid lg:grid-cols-2 gap-6 lg:gap-24">

        <div className="flex flex-col justify-center items-center lg:items-start text-left place-items-center">
          <div className="flex flex-col mx-auto ">
            <p className="text-gray-400 font-logo text-center lg:text-left uppercase mb-4 tracking-widest font-benji">Poker + Web3</p>
            <h1 className="font-logo text-white text-center lg:text-left text-5xl font-bold uppercase font-benji">Our Mission</h1>
            <p className="max-w-2xl text-white text-center lg:text-left text-lg md:text-2xl	my-8 font-light ">A cornerstone of our community is love of poker and competitive action. Over the next decade, we plan to reignite the poker industry’s growth; through new online games and live events we will bring poker enthusiasts of all kinds together. The PFPCs will provide Web3 & irl utility for the poker industry through access to these product launches.</p>
          </div>
        </div>

        <NFTShow />

      </div>
    </div>
  );
}

export default Mission;