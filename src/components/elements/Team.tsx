const Team = () => {
  return (
    <div className="max-w-screen-2xl px-4 md:px-8 mx-auto mt-44">
      <div className="flex flex-col mb-16 mx-auto font-benji">
        <p className="text-center text-gray-400 font-logo  uppercase mb-4 tracking-widest">bamboo crew</p>
        <h1 className="text-center font-logo text-white text-5xl font-bold uppercase">meet the rest of team</h1>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 xl:gap-8 mb-4 md:mb-8">
        <div className="mx-auto group flex items-end overflow-hidden shadow-lg relative team-member">
          <img src={process.env.PUBLIC_URL + "/assets/team/1.jpg"} loading="lazy" alt="photo of octalmage" className="absolute inset-0 transform group-hover:scale-110 transition duration-200 visible" data-xblocker="passed" />
          <span className="font-bold inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">
            octalmage<br />
            <span className="text-gray-200 text-xs font-logo">Blockchain Engineer</span>
          </span>
        </div>
        <div className="mx-auto group flex items-end overflow-hidden shadow-lg relative team-member">
          <img src={process.env.PUBLIC_URL + "/assets/team/2.jpg"} loading="lazy" alt="photo of bacon" className="absolute inset-0 transform group-hover:scale-110 transition duration-200 visible" data-xblocker="passed" />
          <span className="font-bold inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">
            bacon<br />
            <span className="text-gray-200 text-xs font-logo">product</span>
          </span>
        </div>
        <div className="mx-auto group flex items-end overflow-hidden shadow-lg relative team-member">
          <img src={process.env.PUBLIC_URL + "/assets/team/3.jpg"} loading="lazy" alt="photo of rex" className="absolute inset-0 transform group-hover:scale-110 transition duration-200 visible" data-xblocker="passed" />
          <span className="font-bold inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">
            rex<br />
            <span className="text-gray-200 text-xs font-logo">community</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Team;