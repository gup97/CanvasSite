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
  const [selectB, setSelectB] = useState();
  const canvasRef = useRef(null);
  const canvasRef2 = useRef(null);
  const [href, setHref] = useState();
  const setSelectColor = (target, list) => {
    if (list === "cap") {
      if (select) select.classList.remove("border-8", "border-violet-500");
      target.classList.add("border-8", "border-violet-500");
      setSelect(target);
    }
    if (list === "body") {
      if (selectB) selectB.classList.remove("border-8", "border-violet-500");
      target.classList.add("border-8", "border-violet-500");
      setSelectB(target);
    }
  };

  const clickCapBtn = (e, rgb) => {
    setSelectColor(e.currentTarget, "cap");
    setCapColor(rgb);
  };
  const clickBodyBtn = (e, rgb) => {
    setSelectColor(e.currentTarget, "body");
    setBodyColor(rgb);
  };
  const onClickColorBtn = () => {
    console.log(capColor);

    ctxReRender(canvasRef, canvasRef2, mainImage, () => {
      rerender(canvasRef2, canvasRef, capImage, capColor);
      rerender(canvasRef2, canvasRef, bodyImage, bodyColor);
    });
  };
  const HexToRGBA = (hex) => {
    var red = parseInt(hex[1] + hex[2], 16);
    var green = parseInt(hex[3] + hex[4], 16);
    var blue = parseInt(hex[5] + hex[6], 16);
    return `rgba(${red},${green},${blue},0.3)`;
  };
  const customColor = (e, target) => {
    if (target === "cap") setCapColor(HexToRGBA(e.target.value));
    if (target === "body") setBodyColor(HexToRGBA(e.target.value));
  };
  const download = () => {
    setHref(canvasRef.current.toDataURL());
    console.log(href);
  };
  return (
    <div>
      <div className="w-screen flex-row-reverse  bg-white  md:flex md:flex-row-reverse">
        <div className="flex justify-center items-center  md:w-1/2 bg-white p-5  ">
          <div>
            <Canvas canvasRef={canvasRef} imagePath={mainImage} />
            <Canvas canvasRef={canvasRef2} className="hidden" />
          </div>
        </div>
        <div className=" md:w-1/2 h-1/2 flex justify-center ">
          <div className="flex-wrap">
            <div className="md:mt-10 uppercase">
              <span className=" md:text-3xl">원하는 색깔을 </span>
              <span className=" md:text-4xl">마음대로 골라보세요</span>
            </div>
            <div className="md:mt-36">
              <label>Cap</label>
              <div className="flex flex-wrap gap-2 px-2">
                <div>
                  <div
                    className={` rounded-xl lg:w-20 lg:h-20 w-16 h-16 bg-white border-2  cursor-pointer hover:opacity-90`}
                    onClick={(e) => clickCapBtn(e, rgbModule.white)}
                  >
                    <p className="w-full  h-full flex justify-center items-center text-zinc-400 ">
                      default
                    </p>
                  </div>
                </div>
                <div>
                  <div
                    className={`${
                      capColor === "red" ? " border-10" : "bg-white"
                    } rounded-xl lg:w-20 lg:h-20 w-16 h-16 bg-red-400 cursor-pointer hover:opacity-90 border-blue-200`}
                    onClick={(e) => clickCapBtn(e, rgbModule.red)}
                  ></div>
                </div>
                <div>
                  <div
                    className={`rounded-xl lg:w-20 lg:h-20 w-16 h-16 bg-blue-400 cursor-pointer hover:border-4 hover:opacity-90`}
                    onClick={(e) => clickCapBtn(e, rgbModule.blue)}
                  ></div>
                </div>
                <div>
                  <div
                    className={`rounded-xl lg:w-20 lg:h-20 w-16 h-16 bg-zinc-700 cursor-pointer hover:border-4 hover:opacity-90`}
                    onClick={(e) => clickCapBtn(e, rgbModule.black)}
                  ></div>
                </div>
                <div>
                  <div
                    className={`rounded-xl lg:w-20 lg:h-20 w-16 h-16 bg-yellow-300 cursor-pointer hover:border-4 hover:opacity-90`}
                    onClick={(e) => clickCapBtn(e, rgbModule.yellow)}
                  ></div>
                </div>
                <div
                  className={` rounded-xl lg:w-20 lg:h-20 w-16 h-16 bg-white border-2  cursor-pointer hover:border-4 hover:opacity-90`}
                  onClick={(e) => clickCapBtn(e, capColor)}
                >
                  <div className="w-full  h-full flex justify-center items-center text-zinc-400 flex-col">
                    <span className="">custom</span>
                    <input
                      className="w-full  h-1/2 flex justify-center items-center text-zinc-400 "
                      type="color"
                      id="head"
                      name="head"
                      defaultValue="#ffffff"
                      onChange={(e) => customColor(e, "cap")}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 mb-4">
              <label>shirt</label>
              <div className="flex flex-wrap gap-2 px-2">
                <div>
                  <div
                    className={`rounded-xl lg:w-20 lg:h-20 w-16 h-16 bg-white border-2  cursor-pointer hover:opacity-90`}
                    onClick={(e) => clickBodyBtn(e, rgbModule.white)}
                  >
                    <p className="w-full  h-full flex justify-center items-center text-zinc-400 ">
                      default
                    </p>
                  </div>
                </div>
                <div>
                  <div
                    className={`rounded-xl lg:w-20 lg:h-20 w-16 h-16 bg-red-400 cursor-pointer hover:opacity-90 border-blue-200`}
                    onClick={(e) => clickBodyBtn(e, rgbModule.red)}
                  ></div>
                </div>
                <div>
                  <div
                    className={`rounded-xl lg:w-20 lg:h-20 w-16 h-16 bg-blue-400 cursor-pointer hover:opacity-90`}
                    onClick={(e) => clickBodyBtn(e, rgbModule.blue)}
                  ></div>
                </div>
                <div>
                  <div
                    className={`rounded-xl lg:w-20 lg:h-20 w-16 h-16 bg-zinc-700 cursor-pointer hover:opacity-90`}
                    onClick={(e) => clickBodyBtn(e, rgbModule.black)}
                  ></div>
                </div>
                <div>
                  <div
                    className={`rounded-xl lg:w-20 lg:h-20 w-16 h-16 bg-yellow-300 cursor-pointer hover:opacity-90`}
                    onClick={(e) => clickBodyBtn(e, rgbModule.yellow)}
                  ></div>
                </div>
                <div
                  className={` rounded-xl lg:w-20 lg:h-20 w-16 h-16 bg-white border-2  cursor-pointer hover:border-4 hover:opacity-90`}
                  onClick={(e) => clickBodyBtn(e, bodyColor)}
                >
                  <div className="w-full  h-full flex justify-center items-center text-zinc-400 flex-col">
                    <span className="">custom</span>
                    <input
                      className="w-full  h-1/2 flex justify-center items-center text-zinc-400 "
                      type="color"
                      id="head"
                      name="head"
                      defaultValue="#ffffff"
                      onChange={(e) => customColor(e, "body")}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center pt-10 gap-10 text-center mb-10">
              <button
                type="button"
                className=" w-1/2  border-zinc-500  bg-blue-500 text-white border-2 rounded-2xl p-1 text-center hover:bg-blue-400 text-md"
                onClick={onClickColorBtn}
              >
                <span className="flex justify-center items-center">
                  <p>APPLY</p>
                </span>
              </button>
              <a href={href} download="image.png">
                <button
                  className=" w-1.2 text-white bg-blue-500  border-zinc-500 border-2 rounded-xl p-1 px-1 text-center hover:bg-gray-200 text-xl"
                  onClick={download}
                >
                  <span className="flex justify-center items-center text-sm">
                    <p>download</p>
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
