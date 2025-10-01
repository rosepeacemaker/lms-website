import { Button } from "@/components/animate-ui/primitives/buttons/button";
import React from "react";
import CardContent from "./herocontent";

export default function Hero() {
  return (
    <div className="flex flex-row justify-between mt-10 h-80">
      <div className="bg-white w-[30%] flex flex-row">
        <div className="flex flex-col">
          <div className="leading-12">
            <h1 className="text-gray-900 text-[45px] font-semibold">
              Comprehensive
            </h1>
            <h1 className="text-purple-300 font-semibold text-[42px]">
              Online Platform
            </h1>
            <h1 className="text-gray-800 text-[40px] font-bold">
              for your Education
            </h1>
          </div>
          <p className="mt-5">
            This platform provides drives courses across field with access to
            experienced mentor
          </p>
          <div className="flex flex-row gap-3 mt-8">
            <Button className="px-7 py-3 text-white text-xs bg-black rounded-lg">
              Browse courses
            </Button>
            <Button className="px-7 py-3 bg-white text-xs rounded-lg text-black border border-gray-400">
              Become mentor
            </Button>
          </div>
        </div>
      </div>

      <CardContent />
    </div>
  );
}
