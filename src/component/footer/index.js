import React from "react";

const index = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center bg-zinc-600 p-6">
        <div className="flex flex-wrap mb-4 w-full  text-zinc-100">
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 ">
            <h3 className="text-xl py-4">About Us</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            </p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 md:pl-8">
            <h3 className="text-xl py-4">Links</h3>
            <ul>
              <li>
                <a href="#">Link</a>
              </li>
              <li>
                <a href="#">Link</a>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 ">
            <h3 className="text-xl py-4">Links</h3>
            <ul>
              <li>
                <a href="#">Link</a>
              </li>
              <li>
                <a href="#">Link</a>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4">
            <h3 className="text-xl py-4">Subscribe</h3>
            <form action="#">
              <div className="mb-4">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-full-name"
                  type="text"
                  placeholder="Email"
                />
              </div>
              <button
                className="bg-zinc-800 hover:bg-zinc-500 text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-zinc-800 p-2 pl-6">
        <p className=" text-white bottom">© Copyright 2022 - mySite.com</p>
      </div>
    </>
  );
};

export default index;
