const Super = () => {
  return (
    <div>
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div className="grid md:grid-cols-2 gap-6 md:gap-24">
          <div className="flex flex-col justify-center items-center lg:items-start text-left place-items-center">
            <div className="flex flex-col mx-auto">
              <p className="text-gray-400 font-logo text-center md:text-left uppercase mb-4 tracking-widest font-benji">Founder</p>
              <h1 className="font-logo text-white text-center md:text-left text-5xl font-bold uppercase font-benji">Mr. Blue</h1>
              <p className="max-w-2xl text-white text-center md:text-left text-lg md:text-2xl	my-8 font-light">A legend in poker circles, Mr. Blue started from the bottom and grinded upwards. From mopping shop floors to a successful career. After a long sabbatical, he is back to reinvigorate the poker industry with innovation and inclusiveness. </p>
            </div>
          </div>
          <div className="mx-auto">
            <img src={process.env.PUBLIC_URL + "/assets/wp.jpg"} data-xblocker="passed" className="visible rounded-xl"/>
          </div>
        </div>
      </div>

      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto mt-32">
        <div className="grid md:grid-cols-2 gap-6 md:gap-24">
          <div className="flex flex-col justify-center items-center lg:items-start text-left place-items-center">
            <div className="flex flex-col mx-auto">
              <p className="text-gray-400 font-logo text-center md:text-left uppercase mb-4 tracking-widest font-benji">Dev</p>
              <h1 className="font-logo text-white text-center md:text-left text-5xl font-bold uppercase font-benji">Furious</h1>
              <p className="max-w-2xl text-white text-center md:text-left text-lg md:text-2xl	my-8 font-light">Skilled in the art of creating processes for awesome projects, Furious is also an amazing problem solver. He is a big Cardano advocate and always learning how to bring more value to the community. What more could you ask for? </p>
            </div>
          </div>
          <div className="mx-auto">
            <img src={process.env.PUBLIC_URL + "/assets/choco.jpg"} data-xblocker="passed" className="visible rounded-xl"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Super;