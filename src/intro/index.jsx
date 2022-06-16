import React from "react";
import { Link } from "react-router-dom";
import { item1 } from "asset";
import { page1, page2, page3, page4, back } from "asset";
const Intro = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3) ),url(${back})`,
        }}
        className="flex bg-fixed bg-black items-center justify-center w-full h-[70vh] bg-black/50 "
      >
        <div className=" text-center text-white ">
          <h2 className="font-bold md:text-5xl text-3xl bg-black/50 p-3 rounded-2xl">
            옷을 사기전에 나만의 색깔을{" "}
          </h2>
          <p className="font-bold md:text-2xl text-1xl my-6 ">
            {" "}
            <span className=" p-2 bg-black/50  rounded-xl">알아보고 싶다면</span>
          </p>
          <Link to="mockup">
            <button
              type="button"
              className="bg-slate-400 text-white rounded-full py-2 px-3 mt-10 hover:bg-slate-500 transition-all"
            >
              <span className="text-2xl font-bold p-3 ">지금 바로 이용해보기</span>
            </button>
          </Link>
        </div>
      </div>
      <div className="md:flex items-center justify-around w-full h-[70vh]">
        <div className="md:w-1/2 w-full">
          <img className="w-full h-full" alt="미리보기이미지1" src={page1} />
        </div>
        <div className=" text-center">
          <h2 className="font-bold md:text-4xl text-2xl  ">이용방법</h2>
          <p className="font-bold md:text-2xl text-xl my-6 "> 원하는 색깔을 고릅니다</p>
        </div>
      </div>
      <div className="md:flex items-center justify-around w-full h-[70vh]">
        <div className=" text-center">
          <h2 className="font-bold md:text-4xl text-3xl  ">고르셨나요?</h2>
          <p className="font-bold md:text-2xl text-xl my-6 ">
            골랐다면{" "}
            <span className="text-sm border-2 rounded-md bg-blue-500 text-white">
              APPLY
            </span>
            를 누르면 바로 적용됩니다!
          </p>
        </div>
        <div className="md:w-1/2 w-full">
          <img className="w-full h-full" alt="미리보기이미지2" src={page2} />
        </div>
      </div>
      <div className="md:flex items-center justify-around w-full h-[70vh]">
        <div className=" text-center">
          <h2 className="font-bold md:text-4xl text-2xl  ">커스텀 디자인</h2>
          <p className="font-bold md:text-2xl text-xl my-6 ">
            {" "}
            원하는 색깔로 자신만의 코디를 만들어보세요{" "}
          </p>
        </div>
        <div className="md:w-1/2 w-full ">
          <img className="w-full h-full" alt="미리보기이미지3" src={page3} />
        </div>
      </div>
      <div className="flex flex-col items-center  justify-center w-full h-[90vh]">
        <div className=" text-center">
          <h2 className="font-bold md:text-4xl text-2xl  ">community</h2>
          <p className="font-bold md:text-2xl text-xl my-6 ">
            {" "}
            커뮤니티로 가서 자신만의 코디를 자랑해보세요{" "}
          </p>
        </div>
        <div className=" w-full flex justify-center">
          <img className="" alt="미리보기이미지4" src={page4} />
        </div>
      </div>
    </div>
  );
};

export default Intro;
