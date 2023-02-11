const Home = () => {
  return (
    <div className="w-full relative home">
      <div className="mt-8">
        <img src={process.env.PUBLIC_URL + "assets/panda.jpg"} alt="coming soon" className="mx-auto" />
      </div>
      <img src={process.env.PUBLIC_URL + "assets/gradient.png"} alt="coming soon" className="w-full absolute bottom-0 left-0 visible" data-xblocker="passed"/>
    </div>
  );
}

export default Home;