import { Sparkle } from "lucide-react";
import React from "react";

export default function CardContent() {
  return (
    <div className="flex flex-row w-[40%] gap-6 justify-end">
      <div className="bg-yellow-100 text-black p-6 rounded-3xl flex flex-col place-self-end items-center w-[30%]">
        <div className="flex items-center gap-2">
          <span className="text-4xl font-semibold">+150</span>
        </div>
        <p className="text-xs text-center mt-2 px-3">Top Mentors on our platform</p>
      </div>
      <div className="bg-black text-white p-6 rounded-3xl shadow-md flex flex-col justify-between w-[45%]">
        <div className="flex flex-row-reverse justify-between">
          <Sparkle size={40} />
          <button className="bg-gray-800 text-white px-4 py-2 rounded-full mb-4">
            Welcome
          </button>
        </div>
        <span className="text-sm">
          Whether you&apos;re a beginner or an experienced professional, you can
          enhance your skills and gain knowledge in a way that suits you best.
        </span>
      </div>
    </div>
  );
}
