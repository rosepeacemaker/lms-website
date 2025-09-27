import React from "react";

export default function Hero() {
  return (
    <div className="flex flex-row h-screen w-full justify-between p-8">
      <div className="bg-white flex flex-row w-[50%] h-[50%]">
        <div className="flex flex-col max-w-[400px] items-center text-center justify-center p-6">
          <h1 className="text-gray-900 text-[40px] font-semibold">
            Comprehensive
          </h1>
          <h2 className="text-purple-300 font-semibold text-4xl">
            Online Platform
          </h2>
          <h3 className="text-gray-800 text-[38px] font-bold">
            for your Education
          </h3>
          <p>
            this platform provides drives courses across field with access to
            experienced mentor
          </p>
        </div>
      </div>
      <div className="flex flex-row  justify-between w-[50%] h-[50%] border border-red-500">
      <div className="bg-yellow-300 flex items-start h-[150px] w-[200px] rounded-2xl">
        <h2>hellooo</h2>
      </div>
      <div className="bg-black flex w-[300px] h-[295px] rounded-2xl"></div>
      </div>
    </div>
  );
}
