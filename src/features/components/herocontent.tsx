import { Sparkle } from "lucide-react";
import React from "react";

export default function CardContent() {
  return (
    <div className="flex flex-row w-[40%] gap-6">
      <div className="bg-yellow-100 text-black p-4 rounded-2xl flex flex-col place-self-end items-center">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold">+150</span>
          <span className="text-sm">⭐</span>
        </div>
        <p className="text-sm text-center mt-2">Top Mentors on our platform</p>
      </div>
      <div className="bg-black text-white flex-1 p-6 rounded-2xl shadow-md flex flex-col justify-between">
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
