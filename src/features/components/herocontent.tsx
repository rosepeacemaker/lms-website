import { Sparkle } from "lucide-react";
import React from "react";

export default function CardContent() {
  return (
    <div className="flex items-center justify-center relative h-[40vh] w-full">
      <div className="flex flex-row items-center gap-6 absolute right-0 top-0 ">
        <div className="bg-yellow-100 text-black p-4 rounded-lg shadow-md absolute right-[105%] bottom-1 flex flex-col items-center w-[200px] h-[120px]">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">+150</span>
            <span className="text-sm">⭐</span>
          </div>
          <p className="text-sm text-center mt-2">
            Top Mentors on our platform
          </p>
        </div>
        <div className="bg-black text-white relative p-4 rounded-lg shadow-md flex flex-col items-center w-[280px] h-[300px]">
          <span className="flex absolute right-2.5">
            <Sparkle size={40} />
          </span>
          <span className="flex absolute left-0 top-1 p-2">
            <button className="bg-gray-800 text-white px-4 py-2 rounded-full mb-4">
              Welcome
            </button>
          </span>
          <p className="text-sm text-center mt-32">
            Whether you&apos;re a beginner or an experienced professional, you
            can enhance your skills and gain knowledge in a way that suits you
            best.
          </p>
        </div>
      </div>
    </div>
  );
}
