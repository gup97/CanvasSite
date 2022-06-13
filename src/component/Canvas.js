import React, { useEffect } from "react";
export const Canvas = ({ canvasRef, imagePath = "", className }) => {
  //합성용 canvas
  useEffect(() => {
    if (!{ canvasRef }) return;
    const ctx = canvasRef.current.getContext("2d");
    console.log(ctx);

    const image = new Image();
    image.src = imagePath;
    image.onload = () => {
      ctx.drawImage(image, 0, 0); // image가 성공적으로 load 되지 않은 상태로 drawImage를 실행하면 에러가 발생합니다
      console.log("main canvas load");
    };
  }, []);
  return (
    <canvas
      ref={canvasRef}
      className={`${className} w-full`}
      width="500px"
      height="600px"
    />
  );
};

export const ctxClear = (canvasRef) => {
  if (!canvasRef) return;
  const ctx = canvasRef.current.getContext("2d");
  ctx.clearRect(0, 0, 1500, 1000);
  console.log("캔버스 클리어");
};

//초기화
export const ctxReRender = (canvasRef, canvasRef2, imagePath, func) => {
  if (!{ canvasRef }) {
    console.log("return canvas sasasa");
    return;
  }
  const ctx = canvasRef.current.getContext("2d");
  // console.log(ctx);
  ctxClear(canvasRef);
  ctxClear(canvasRef2);
  const image = new Image();
  image.src = imagePath;
  image.onload = () => {
    ctx.drawImage(image, 0, 0); // image가 성공적으로 load 되지 않은 상태로 drawImage를 실행하면 에러가 발생합니다
    console.log("rerender CTX");
    func();
  };
};
export const rerender = (canvasRef, targetCtx, imagePath, rgba) => {
  if (!{ canvasRef }) return;
  const ctx = canvasRef.current.getContext("2d");
  ctxClear(canvasRef);
  console.log("ctx clear");
  const image = new Image();
  image.src = imagePath;
  image.onload = () => {
    ctx.drawImage(image, 0, 0); // image가 성공적으로 load 되지 않은 상태로 drawImage를 실행하면 에러가 발생합니다
    console.log("rerender 이미지업로드");
    canvasToRGB(canvasRef, targetCtx, rgba);
  };
};
const canvasToRGB = (canvasRef, targetCtxRef, rgba) => {
  if (canvasRef.current) {
    const ctx = canvasRef.current.getContext("2d");
    const rgb = rgba;
    ctx.fillStyle = rgb;
    ctx.globalCompositeOperation = "source-in";
    ctx.fillRect(0, 0, 1500, 1000);
    ctx.globalCompositeOperation = "copy";

    const dataImage = new Image();
    dataImage.src = canvasRef.current.toDataURL();
    ctx.drawImage(dataImage, 0, 0); // image가 성공적으로 load 되지 않은 상태로 drawImage를 실행하면 에러가 발생합니다
    dataImage.onload = () => {
      const targetCtx = targetCtxRef.current.getContext("2d");
      targetCtx.drawImage(dataImage, 0, 0); // image가 성공적으로 load 되지 않은 상태로 drawImage를 실행하면 에러가 발생합니다
    };
  }
};
