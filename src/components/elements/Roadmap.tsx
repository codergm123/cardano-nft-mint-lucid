const Roadmap = () => {
  return (
    <div className="font-benji w-full">
      <div className="max-w-screen-2xl px-4 md:mx-auto my-16 mt-44">
        <div className="flex flex-col mx-auto">
          <p className="text-center text-gray-400 font-logo  uppercase mb-4 tracking-widest">THE DATES ARE SET</p>
          <h1 className="text-center font-logo text-white text-6xl font-bold uppercase">ROADMAP*</h1>
        </div>
      </div>

      <div className="font-benji" style={{width: "95%"}}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 150 865 650" style={{width: "100%"}}>
          <g className="w-full">
            <g fill="#fff" fontFamily="Poppins" letterSpacing="0">
              <g fontSize="24">
                <text xmlSpace="preserve" fontWeight="bold" style={{whiteSpace: "pre"}} >
                  <tspan x="130" y="309.4">PFPC NFT launch</tspan>
                </text>
                <text xmlSpace="preserve" fontWeight="300" style={{whiteSpace: "pre"}}>
                  <tspan x="130" y="353.4">The genesis collection is launched on Cardano, JAN 2023.  </tspan>
                  <tspan x="130" y="380.4">Partnership announcements</tspan>
                  <tspan x="130" y="410.4">Building hype for Big Deck Poker game launch</tspan>
                  <tspan x="130" y="440.4">Rakefree Podcast</tspan>
                </text>
              </g>
              
              <text xmlSpace="preserve" fontSize="32" fontWeight="800" style={{whiteSpace: "pre"}}>
                <tspan x="130" y="238.2">Q1/Q2 2023</tspan>
              </text>
            </g>

            <g fill="#fff" fontFamily="Poppins" letterSpacing="0">
              <g fontSize="24">
                <text xmlSpace="preserve" fontWeight="bold" style={{whiteSpace: "pre"}} >
                  <tspan x="130" y="580.4">Game launch – Big Deck Poker</tspan>
                </text>
                <text xmlSpace="preserve" fontWeight="300" style={{whiteSpace: "pre"}}>
                  <tspan x="130" y="630.4">This game will revolutionize the web3 space with innovative game</tspan>
                  <tspan x="130" y="670.4">mechanics that allow all projects to add utility for their collectors. </tspan>
                  <tspan x="130" y="700.4">Turn all your NFTs into a deck of cards and play some poker in the club!</tspan>
                  <tspan x="130" y="730.4">Stake your custom NFT deck of cards and earn rewards. LFG!</tspan>
                </text>
              </g>
              
              <text xmlSpace="preserve" fontSize="32" fontWeight="800" style={{whiteSpace: "pre"}}>
                <tspan x="130" y="510.2">Q3 2023</tspan>
              </text>
            </g>
                        
            <g>
              <path fill="#18181B" d="M74 242H82V1500H74z"></path>
              <circle cx="78" cy="227" r="20" fill="#fff"></circle>
              <circle cx="78" cy="498.8" r="20" fill="#3F3F46"></circle>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export default Roadmap;