import { useEffect } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useState } from "react";
import { db } from "util/firebase";
import SubmitContainer from "./SubmitContainer";
import { handleDelete, handleDeleteImage } from "util/utils";
export default function ListContainer() {
  const [isWrite, setIsWrite] = useState(false);
  const [myStore, setUserStore] = useState();
  useEffect(() => {
    const collectionRef = collection(db, "myStore");
    const q = query(collectionRef, orderBy("timestamp", "desc"));
    const unsub = onSnapshot(q, (snapshot) => {
      setUserStore(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    console.log("collection fetch");
    return unsub;
  }, []);
  const deleteDoc = (data) => {
    var inputString = prompt("비밀번호를 입력하세요");
    if (inputString === data.password) {
      handleDeleteImage(data.StoragePath);
      handleDelete(data.id);
      alert("삭제되었습니다.");
    } else {
      alert("비밀번호가 다릅니다.");
      console.log("비밀번호틀림");
    }
  };
  console.log(myStore);
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 ">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
          나만의 코디 자랑해보기
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {myStore &&
            myStore.map((data) => (
              <div key={data.id} className="group relative">
                <button type="button" onClick={() => deleteDoc(data)}>
                  삭제
                </button>
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={data.imagePath}
                    alt="미리보기이미지"
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <p className="mt-1 text-sm text-gray-500"> {data.name}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">코멘트 :{data.memo}</p>
                </div>
              </div>
            ))}
        </div>
        <div className="w-1/4 flex flex-col-reverse">
          <button
            type="button"
            onClick={() => setIsWrite((state) => !state)}
            className=" border-2 bg-blue-600 text-white hover:bg-blue-500 l-2 px-1 py-1 rounded-lg"
          >
            {!isWrite ? "글 쓰기 버튼열기" : "버튼닫기"}
          </button>
        </div>
        {isWrite && <SubmitContainer />}
      </div>
    </div>
  );
}
