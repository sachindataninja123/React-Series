import React from "react";

const Popup = ({ popup, setPopup, title, description }) => {
  return (
    <div>
      {popup && (
        <div className="w-screen h-screen bg-black/50 absolute top-0 left-0 flex items-center justify-center ">
          <button
            onClick={() => {
              setPopup(false);
            }}
            className="absolute right-5 top-5 bg-[#242424]">❌
          </button>

          <div className="w-full h-full max-w-140 max-h-80 bg-[#242424] rounded-2xl flex items-center justify-center flex-col gap-7 ">
            <h1 className="text-2xl">⚠️ {title}</h1>
            <p>{description}</p>

            <div className="flex gap-7">
              <button className="bg-red-500">No</button>
              <button className="bg-green-500">Yes</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
