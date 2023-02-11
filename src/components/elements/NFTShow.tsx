const NFTShow = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-12">
      <div className="bg-black">
        <div className="max-w-screen-2xl  mx-auto">
          
            <div className="my-10 full-screen">
              <section className="slide-option md:block hidden">
                <div id="infinite" className="fast-slider">
                  <div className="container highway-barrier rounded-xl">
                    <ul className="fast-highway-lane fast-marquee-content">
                      <li className="fast-highway-car">
                        <img className="visible" alt="1.jpg" src={process.env.PUBLIC_URL + "/assets/coin/1.jpg"} data-xblocker="passed" />
                      </li>
                      <li className="fast-highway-car w-1/3">
                        <img className="visible" alt="2.jpg" src={process.env.PUBLIC_URL + "/assets/coin/2.jpg"} data-xblocker="passed" />
                      </li>
                      <li className="fast-highway-car w-1/3">
                        <img className="visible" alt="3.jpg" src={process.env.PUBLIC_URL + "/assets/coin/3.jpg"} data-xblocker="passed" />
                      </li>
                      <li className="fast-highway-car w-1/3">
                        <img className="visible" alt="4.jpg" src={process.env.PUBLIC_URL + "/assets/coin/4.jpg"} data-xblocker="passed" />
                      </li>
                      <li className="fast-highway-car w-1/3">
                        <img className="visible" alt="5.jpg" src={process.env.PUBLIC_URL + "/assets/coin/5.jpg"} data-xblocker="passed" />
                      </li>
                      <li className="fast-highway-car w-1/3">
                        <img className="visible" alt="6.jpg" src={process.env.PUBLIC_URL + "/assets/coin/6.jpg"} data-xblocker="passed" />
                      </li>
                      <li className="fast-highway-car w-1/3">
                        <img className="visible" alt="7.jpg" src={process.env.PUBLIC_URL + "/assets/coin/7.jpg"} data-xblocker="passed" />
                      </li>
                      <li className="fast-highway-car w-1/3">
                        <img className="visible" alt="8.jpg" src={process.env.PUBLIC_URL + "/assets/coin/8.jpg"} data-xblocker="passed" />
                      </li>
                      <li className="fast-highway-car w-1/3">
                        <img className="visible" alt="1.jpg" src={process.env.PUBLIC_URL + "/assets/coin/1.jpg"} data-xblocker="passed" />
                      </li>
                      <li className="fast-highway-car w-1/3">
                        <img className="visible" alt="2.jpg" src={process.env.PUBLIC_URL + "/assets/coin/2.jpg"} data-xblocker="passed" />
                      </li>
                      <li className="fast-highway-car w-1/3">
                        <img className="visible" alt="3.jpg" src={process.env.PUBLIC_URL + "/assets/coin/3.jpg"} data-xblocker="passed" />
                      </li>
                      <li className="fast-highway-car w-1/3">
                        <img className="visible" alt="4.jpg" src={process.env.PUBLIC_URL + "/assets/coin/4.jpg"} data-xblocker="passed" />
                      </li>
                      <li className="fast-highway-car w-1/3">
                        <img className="visible" alt="5.jpg" src={process.env.PUBLIC_URL + "/assets/coin/5.jpg"} data-xblocker="passed" />
                      </li>
                      <li className="fast-highway-car w-1/3">
                        <img className="visible" alt="6.jpg" src={process.env.PUBLIC_URL + "/assets/coin/6.jpg"} data-xblocker="passed" />
                      </li>
                      <li className="fast-highway-car w-1/3">
                        <img className="visible" alt="7.jpg" src={process.env.PUBLIC_URL + "/assets/coin/7.jpg"} data-xblocker="passed" />
                      </li>
                      <li className="fast-highway-car w-1/3">
                        <img className="visible" alt="8.jpg" src={process.env.PUBLIC_URL + "/assets/coin/8.jpg"} data-xblocker="passed" />
                      </li>
                    </ul>
                    
                  </div>
                </div>
              </section>
            </div>
          {/* </Marquee> */}
        </div>
      </div>
    </div>
  );
}

export default NFTShow;