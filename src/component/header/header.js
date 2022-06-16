import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="relative bg-zinc-800  py-3">
      <ul className="max-w-2xl mx-auto pt-1 flex justify-around">
        <li>
          <Link to="/">
            <span className=" text-gray-300 text-sm text">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </span>
          </Link>
        </li>

        <li className="flex gap-4 ">
          <Link to="/item">
            <span className=" text-gray-300 text-sm text">상품</span>
          </Link>
        </li>
        <li className="flex gap-4 ">
          <Link to="/mockup">
            <span className=" text-gray-300  text-sm text">목업해보기</span>
          </Link>
        </li>
        <li className="flex gap-4 ">
          <Link to="/com">
            <span className=" text-gray-300  text-sm text">커뮤니티</span>
          </Link>
        </li>
        <li className="flex gap-4 ">
          <Link to="/contact">
            <span className=" text-gray-300  text-sm text">contact</span>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
