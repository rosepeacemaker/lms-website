import { Button } from "@/components/animate-ui/primitives/buttons/button";
import React from "react";
import CardContent from "./herocontent";
import Cards from "./herofooter";

export default function Hero() {
  return (
    <div className="flex flex-row h-[50vh] border border-amber-900 w-full justify-between p-8 ">
      <div className="bg-white flex flex-row w-[50%] h-[50%] mt-8">
        <div className="flex flex-col max-w-[400px] items-center text-center justify-center p-6">
          <h1 className="text-gray-900 text-[40px] font-semibold">
            Comprehensive
          </h1>
          <h2 className="text-purple-300 font-semibold text-[38px]">
            Online Platform
          </h2>
          <h3 className="text-gray-800 text-[38px] font-bold">
            for your Education
          </h3>
          <p>
            this platform provides drives courses across field with access to
            experienced mentor
          </p>
          <div className="flex flex-row gap-3 mt-8">
            <Button className="px-6 py-1.5 text-white bg-black rounded-lg">
              Browse courses
            </Button>
            <Button className="px-6 py-1.5 bg-white rounded-lg text-black border border-gray-400">
              Become mentor
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between w-[50%] h-[50%] mt-8">
        <CardContent />
      </div>
    </div>
  );
}
