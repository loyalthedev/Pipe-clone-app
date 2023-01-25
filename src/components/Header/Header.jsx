import React from "react";
import { useState } from "react";
import { navLinks } from "../../constants/static";
import Menu from "../../assets/menu.svg";
import Close from "../../assets/close.svg";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full">
      <div className="w-[80vw] flex py-5 justify-between items-center navbar mx-auto">
        <div className="logo text-white hover:opacity-70 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="32"
            viewBox="0 0 80 32"
            fill="none"
          >
            <path
              d="M2.58301 16.1452C2.58301 15.1574 2.58301 14.6635 2.66702 14.2532C2.99897 12.6319 4.26596 11.3649 5.88724 11.033C6.29753 10.949 6.79142 10.949 7.77919 10.949C7.8718 10.949 7.9181 10.949 7.95657 10.9569C8.10856 10.988 8.22734 11.1068 8.25846 11.2587C8.26634 11.2972 8.26634 11.3435 8.26634 11.4361V19.9611C8.26634 20.9489 8.26634 21.4428 8.18233 21.8531C7.85037 23.4743 6.58338 24.7413 4.96211 25.0733C4.55181 25.1573 4.05793 25.1573 3.07015 25.1573C2.97755 25.1573 2.93124 25.1573 2.89278 25.1494C2.74078 25.1183 2.622 24.9995 2.59088 24.8475C2.58301 24.8091 2.58301 24.7628 2.58301 24.6702V16.1452Z"
              fill="white"
            />
            <path
              d="M9.81641 7.56136C9.81641 7.46876 9.81641 7.42246 9.82428 7.38399C9.8554 7.232 9.97418 7.11322 10.1262 7.08209C10.1646 7.07422 10.2109 7.07422 10.3035 7.07422C11.2913 7.07422 11.7852 7.07422 12.1955 7.15823C13.8168 7.49018 15.0838 8.75717 15.4157 10.3784C15.4997 10.7887 15.4997 11.2826 15.4997 12.2704V13.2447C15.4997 14.2325 15.4997 14.7264 15.4157 15.1366C15.0838 16.7579 13.8168 18.0249 12.1955 18.3569C11.7852 18.4409 11.2913 18.4409 10.3035 18.4409C10.2109 18.4409 10.1646 18.4409 10.1262 18.433C9.97418 18.4019 9.8554 18.2831 9.82428 18.1311C9.81641 18.0926 9.81641 18.0463 9.81641 17.9537V7.56136Z"
              fill="white"
            />
            <path
              d="M22.5625 25.2256H25.4833V20.0285C26.0272 21.0558 27.2157 21.8616 28.8473 21.8616C31.466 21.8616 33.4401 19.9076 33.4401 16.4228V16.2616C33.4401 12.7768 31.4257 10.8631 28.8473 10.8631C27.2963 10.8631 26.0675 11.7494 25.4833 12.7566V11.1048H22.5625V25.2256ZM27.9812 19.5853C26.3898 19.5853 25.3826 18.558 25.3826 16.4429V16.2818C25.3826 14.1667 26.4301 13.0991 27.961 13.0991C29.4315 13.0991 30.479 14.1465 30.479 16.2818V16.4429C30.479 18.4976 29.5926 19.5853 27.9812 19.5853Z"
              fill="white"
            />
            <path
              d="M35.0661 21.64H37.9668V11.1048H35.0661V21.64Z"
              fill="white"
            />
            <path
              d="M40.248 25.2256H43.1689V20.0285C43.7127 21.0558 44.9012 21.8616 46.5329 21.8616C49.1515 21.8616 51.1256 19.9076 51.1256 16.4228V16.2616C51.1256 12.7768 49.1113 10.8631 46.5329 10.8631C44.9818 10.8631 43.753 11.7494 43.1689 12.7566V11.1048H40.248V25.2256ZM45.6667 19.5853C44.0753 19.5853 43.0681 18.558 43.0681 16.4429V16.2818C43.0681 14.1667 44.1156 13.0991 45.6465 13.0991C47.117 13.0991 48.1645 14.1465 48.1645 16.2818V16.4429C48.1645 18.4976 47.2782 19.5853 45.6667 19.5853Z"
              fill="white"
            />
            <path
              d="M57.5257 21.8616C60.4062 21.8616 62.2191 20.5925 62.5616 18.3163H59.8019C59.6206 19.2026 58.9559 19.7868 57.6062 19.7868C56.0149 19.7868 55.0681 18.7796 54.9875 17.0271H62.5817V16.2213C62.5817 12.4545 60.1645 10.8631 57.4451 10.8631C54.3832 10.8631 52.0264 13.0185 52.0264 16.3422V16.5033C52.0264 19.8673 54.3429 21.8616 57.5257 21.8616ZM55.0278 15.2343C55.2494 13.7437 56.1357 12.8775 57.4451 12.8775C58.835 12.8775 59.6407 13.6429 59.7415 15.2343H55.0278Z"
              fill="white"
            />
            <path
              d="M37.9667 9.43764H35.0661V6.84375H37.9667V9.43764Z"
              fill="white"
            />
          </svg>
        </div>

        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-inter cursor-pointer text-xs mr-3 font-bold text-tertiary hover:rounded-full hover:text-white hover:bg-secondary px-4 py-2`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          <li
            className={`font-inter font-normal cursor-pointer text-xs text-tertiary mr-4`}
          >
            <a
              className="bg-transparent font-bold py-2 px-4"
              href={`#login`}
            >
              Login
            </a>
          </li>
          <li
            className={`font-inter font-normal cursor-pointer text-xs mr-4`}
          >
            <a
              className="bg-secondary text-white font-bold py-2 px-6 rounded-full"
              href={`#`}
            >
              Start Now
              
            </a>
          </li>
        </ul>

        {/* Toggle Menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? Close : Menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer rounded-full"
            onClick={() => setToggle((prev) => !prev)}
          />

          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 bg-primary absolute top-20 right-0 min-w-[140px] h-fit mx-auto rounded-xl sidebar`}
          >
            <ul className="list-none flex flex-col justify-start items-center flex-1 mx-4">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-inter font-normal cursor-pointer text-xs ${
                    index === navLinks.length - 1 ? "mr-0" : "mb-4"
                  } text-tertiary hover:text-white`}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Header;
