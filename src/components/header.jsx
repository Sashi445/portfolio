const Header = () => (
  <div className="absolute w-full top-0 text-indigo-900">
    <div className="lg:px-40 md:px-30 px-10 py-5">
      <div className="flex">
        <div className="flex-grow">logo</div>
        <div className="flex-grow">
          <ul className="flex font-mono">
            <li className="flex-grow">
              <a href="google.com">About</a>
            </li>
            <li className="flex-grow">
              <a href="google.com">Blog</a>
            </li>
            <li className="flex-grow">
              <a href="google.com">Experiences</a>
            </li>
            <li className="flex-grow">
              <a href="google.com">projects</a>
            </li>
            <li className="flex-grow">
              <a href="google.com">contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
