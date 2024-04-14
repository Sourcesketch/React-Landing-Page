import React, { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenuExpand = () => {
    setShowMenu(!showMenu);
  };
  return (
    <header className="ia-header w-full">
      <div className="ia-header__inner flex-between">
        <a href="#" className="ia__logo" aria-labelledby="logo" title="i2c">
          <svg
            width="55"
            height="34"
            viewBox="0 0 55 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <rect width="55" height="34" fill="url(#pattern0_2688_7)" />
            <defs>
              <pattern
                id="pattern0_2688_7"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image0_2688_7"
                  transform="matrix(0.00567139 0 0 0.00917431 -0.00758962 0)"
                />
              </pattern>
              <image
                id="image0_2688_7"
                width="179"
                height="109"
                xlinkHref="data:image/png;base64,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"
              />
            </defs>
          </svg>
        </a>
        <nav className="ia__links">
          <button
            className="bg-transparent border-0 menu-icon"
            onClick={toggleMenuExpand}
          >
            <svg
              width="40"
              height="27"
              viewBox="0 0 40 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M37.8889 11.1111H2.11111C0.945177 11.1111 0 12.0563 0 13.2222V13.4444C0 14.6104 0.945177 15.5555 2.11111 15.5555H37.8889C39.0548 15.5555 40 14.6104 40 13.4444V13.2222C40 12.0563 39.0548 11.1111 37.8889 11.1111Z"
                fill="#46B0E6"
              />
              <path
                d="M37.8889 22.2219H2.11111C0.945177 22.2219 0 23.1671 0 24.333V24.5553C0 25.7212 0.945177 26.6664 2.11111 26.6664H37.8889C39.0548 26.6664 40 25.7212 40 24.5553V24.333C40 23.1671 39.0548 22.2219 37.8889 22.2219Z"
                fill="#46B0E6"
              />
              <path
                d="M37.8889 0H2.11111C0.945177 0 0 0.945176 0 2.11111V2.33333C0 3.49927 0.945177 4.44444 2.11111 4.44444H37.8889C39.0548 4.44444 40 3.49927 40 2.33333V2.11111C40 0.945176 39.0548 0 37.8889 0Z"
                fill="#46B0E6"
              />
            </svg>
          </button>
          <a href="#" aria-labelledby="about-us">About us</a>
          <a href="#" aria-labelledby="registration">Registration</a>
          <a href="#" aria-labelledby="careers">Careers</a>
          <button className="btn contact-btn bg-blue text-white rounded-40 ms-16 ">
            Contact us
          </button>
        </nav>
      </div>
      {showMenu && (
        <div className="menu-expand">
          <div className="menu-expand__header">
            <button className="bg-transparent border-0 close-icon" onClick={() => setShowMenu(false)}>
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.80812 7.67059L16.3706 1.64267C16.5668 1.46221 16.677 1.21746 16.677 0.962255C16.677 0.707049 16.5668 0.462296 16.3706 0.281838C16.1745 0.10138 15.9084 0 15.631 0C15.3536 0 15.0876 0.10138 14.8915 0.281838L8.33937 6.31934L1.78729 0.281838C1.59114 0.10138 1.3251 2.26583e-07 1.04771 2.28484e-07C0.770309 2.30386e-07 0.504273 0.10138 0.308123 0.281838C0.111974 0.462296 0.00177796 0.707049 0.00177796 0.962255C0.00177795 1.21746 0.111974 1.46221 0.308123 1.64267L6.87062 7.67059L0.308123 13.6985C0.210489 13.7876 0.132996 13.8936 0.0801116 14.0104C0.0272276 14.1271 0 14.2524 0 14.3789C0 14.5054 0.0272276 14.6307 0.0801116 14.7475C0.132996 14.8643 0.210489 14.9702 0.308123 15.0593C0.40496 15.1492 0.520169 15.2205 0.647106 15.2691C0.774043 15.3178 0.910194 15.3428 1.04771 15.3428C1.18522 15.3428 1.32137 15.3178 1.44831 15.2691C1.57524 15.2205 1.69045 15.1492 1.78729 15.0593L8.33937 9.02184L14.8915 15.0593C14.9883 15.1492 15.1035 15.2205 15.2304 15.2691C15.3574 15.3178 15.4935 15.3428 15.631 15.3428C15.7686 15.3428 15.9047 15.3178 16.0316 15.2691C16.1586 15.2205 16.2738 15.1492 16.3706 15.0593C16.4683 14.9702 16.5458 14.8643 16.5986 14.7475C16.6515 14.6307 16.6787 14.5054 16.6787 14.3789C16.6787 14.2524 16.6515 14.1271 16.5986 14.0104C16.5458 13.8936 16.4683 13.7876 16.3706 13.6985L9.80812 7.67059Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
          <div className="menu-expand__links">
            <nav>
              <a href="">About us</a>
              <a href="">Registration</a>
              <a href="">Careers</a>
              <button className="btn contact-btn bg-blue text-white rounded-40">
            Contact us
          </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
