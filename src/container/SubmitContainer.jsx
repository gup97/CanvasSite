import React from "react";
import { useState } from "react";
import { handleAddItem } from "util/utils";
import { InputImageFile } from "components/InputImageFile";
import {
  InputLocker,
  InputMemo,
  InputName,
  InputObject,
  InputPassword,
  InputPlace,
} from "components/InputText";

// import { mock as userStore } from "./mock";
const SubmitContainer = () => {
  const [form, setForm] = useState({
    name: "", //습득한사람 이름
    password: "", //물건 종류
    imagePath: "",
    memo: "",
  });

  const onChange = (e) => {
    // console.log(form);
    const { value, name } = e.target;
    setForm((state) => ({
      ...state,
      [name]: value,
    }));
  };
  const showData = () => {
    // console.log(form);
  };

  const onSubmit = (e) => {
    if (form.name === "" || form.password === "" || form.imagePath === "") {
      alert(" 전부입력해주세요");
    } else {
      handleAddItem(form);
      alert("제출되었습니다.");
    }
    // firebase 값 전송 (성공)
    //여기서 이미지를 서버에올리고()
    //초기화
    setForm({
      name: "", //습득한사람 이름
      password: "",
      imagePath: "",
      memo: "",
    });
    e.preventDefault();
  };
  return (
    <div className=" max-w-md mx-auto max-h-full sm:max-w-3xl">
      <div className="bg-white px-4 py-1 pb-4">
        <form onSubmit={onSubmit} className="w-full sm:max-w-3xl sm:text-sm">
          <div className="flex flex-wrap -mx-3  md:mb-6">
            <div className="w-1/2 md:w-1/4  px-3 md:mb-0">
              <InputName onChange={onChange} data={form.name} />
            </div>
            <div className="w-1/2 md:w-1/4 px-3 md:mb-0">
              <InputPassword onChange={onChange} data={form.password} />
            </div>
            <div className="w-full md:w-1/3 px-3 md:mb-6">
              <InputMemo onChange={onChange} data={form.memo} />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/2 px-3 mb-15 md:mb-0">
              <InputImageFile data={form} setData={setForm} />
            </div>
          </div>

          <div className="mt-10 sm:mt-20">
            <button
              type="submit"
              onClick={showData}
              className="block w-full  px-4 py-2 border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus-offset-2 focus:ring-indigo-500 "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubmitContainer;
