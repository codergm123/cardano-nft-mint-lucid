const Footer = () => {
  return (
    <footer className="mt-8 mb-32">
      <ul className="mt-32 flex items-center justify-between lg:container px-4 py-6 mx-auto text-xl text-white md:px-6 font-body">
        <li>© 2023 Poker Faces</li>
        <ul className="flex  text-sm w-auto">
          <li className="mt-0 ml-6">
            <a href="#" rel="noopener noreferrer" className="block text-white">
              <img src={process.env.PUBLIC_URL + '/icon/fb_circle.png'} />
            </a>
          </li>
          <li className="mt-0 ml-6">
            <a href="#" rel="noopener noreferrer" className="block text-white">
              <img src={process.env.PUBLIC_URL + '/icon/insta_circle.png'} />
            </a>
          </li>
          <li className="mt-0 ml-6">
            <a href="#" rel="noopener noreferrer" className="block text-white">
              <img src={process.env.PUBLIC_URL + '/icon/twitter_circle.png'} />
            </a>
          </li>
          <li className="mt-0 ml-6">
            <a href="#" rel="noopener noreferrer" className="block text-white">
              <img src={process.env.PUBLIC_URL + '/icon/yt_circle.png'} />
            </a>
          </li>
        </ul>
      </ul>
    </footer>
  );
}

export default Footer;