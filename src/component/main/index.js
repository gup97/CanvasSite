import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { mainImage, capImage, bodyImage } from "../../asset";
import { Canvas, rerender, ctxReRender } from "../Canvas";
import { rgbModule } from "../../config/rgbModule";
//layout
const Main = () => {
  const [capColor, setCapColor] = useState(rgbModule.default);
  const [bodyColor, setBodyColor] = useState(rgbModule.default);
  const [select, setSelect] = useState();
  const canvasRef = useRef(null);
  const canvasRef2 = useRef(null);

  const clickCapBtn = (rgb) => {
    setCapColor(rgb);
  };
  const clickBodyBtn = (rgb) => {
    setBodyColor(rgb);
  };
  const onClickColorBtn = () => {
    console.log(capColor);

    ctxReRender(canvasRef, canvasRef2, mainImage, () => {
      rerender(canvasRef2, canvasRef, capImage, capColor);
      rerender(canvasRef2, canvasRef, bodyImage, bodyColor);
    });
  };
  return (
    <div>
      <div className="w-screen flex-row-reverse  bg-white  md:flex md:flex-row-reverse">
        <div className="flex justify-center items-center  md:w-1/2 bg-white p-5">
          <div>
            <Canvas canvasRef={canvasRef} imagePath={mainImage} />
            <Canvas canvasRef={canvasRef2} className="hidden" />
          </div>
        </div>
        <div className=" md:w-1/2 h-1/2 flex justify-center ">
          <div className="flex-wrap">
            <div className="md:mt-10 uppercase">
              <span className=" md:text-3xl">Choice</span>
              <span className=" md:text-6xl">Your Color</span>
            </div>
            <div className="md:mt-36">
              <label>Cap</label>
              <div className="flex flex-wrap gap-2 px-2">
                <div>
                  <div
                    className={`rounded-xl lg:w-20 lg:h-20 w-16 h-16 bg-white border-2  cursor-pointer hover:border-4 hover:border-blue-200`}
                    onClick={() => clickCapBtn(rgbModule.white)}
                  >
                    <p className="w-full  h-full flex justify-center items-center text-zinc-400 ">
                      default
                    </p>
                  </div>
                </div>
                <div>
                  <div
                    className={`rounded-xl lg:w-20 lg:h-20 w-16 h-16 bg-red-400 cursor-pointer hover:border-4 border-blue-200`}
                    onClick={() => clickCapBtn(rgbModule.red)}
                  ></div>
                </div>
                <div>
                  <div
                    className={`rounded-xl lg:w-20 lg:h-20 w-16 h-16 bg-blue-400 cursor-pointer hover:border-4 hover:border-blue-200`}
                    onClick={() => clickCapBtn(rgbModule.blue)}
                  ></div>
                </div>
                <div>
                  <div
                    className={`rounded-xl lg:w-20 lg:h-20 w-16 h-16 bg-zinc-700 cursor-pointer hover:border-4 hover:border-blue-200`}
                    onClick={() => clickCapBtn(rgbModule.black)}
                  ></div>
                </div>
                <div>
                  <div className=" rounded-xl lg:w-20 lg:h-20 w-16 h-16 bg-slate-800"></div>
                </div>
              </div>
            </div>
            <div className="mt-6 mb-4">
              <label>shirt</label>
              <div className="flex flex-wrap gap-2 px-2">
                <div>
                  <div
                    className={`rounded-xl lg:w-20 lg:h-20 w-16 h-16 bg-white border-2  cursor-pointer hover:border-4 hover:border-blue-200`}
                    onClick={() => clickBodyBtn(rgbModule.white)}
                  >
                    <p className="w-full  h-full flex justify-center items-center text-zinc-400 ">
                      default
                    </p>
                  </div>
                </div>
                <div>
                  <div
                    className={`rounded-xl lg:w-20 lg:h-20 w-16 h-16 bg-red-400 cursor-pointer hover:border-4 border-blue-200`}
                    onClick={() => clickBodyBtn(rgbModule.red)}
                  ></div>
                </div>
                <div>
                  <div
                    className={`rounded-xl lg:w-20 lg:h-20 w-16 h-16 bg-blue-400 cursor-pointer hover:border-4 hover:border-blue-200`}
                    onClick={() => clickBodyBtn(rgbModule.blue)}
                  ></div>
                </div>
                <div>
                  <div
                    className={`rounded-xl lg:w-20 lg:h-20 w-16 h-16 bg-zinc-700 cursor-pointer hover:border-4 hover:border-blue-200`}
                    onClick={() => clickBodyBtn(rgbModule.black)}
                  ></div>
                </div>
                <div>
                  <div className=" rounded-xl lg:w-20 lg:h-20 w-16 h-16 bg-slate-800"></div>
                </div>
              </div>
            </div>
            <div className="flex justify-center pt-10 gap-10 text-center">
              <button
                type="button"
                className=" w-1/2  border-zinc-500 border-2 rounded-xl p-1 text-center hover:bg-gray-200 text-xl"
                onClick={onClickColorBtn}
              >
                <span className="flex justify-center items-center">
                  <p>APPLY</p>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
