'use client'
import { Button } from "@/components/animate-ui/primitives/buttons/button";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowUpRightFromSquareIcon } from "lucide-react";
import React, { useState } from "react";

export default function Cards() {
  const [activeItem, setActiveItem] = useState<string>("");
  const cardBtn = [
    { name: "Product Design", active: true },
    { name: "Marketing", active: false },
    { name: "SMM", active: false },
    { name: "UX", active: false },
    { name: "Develop", active: false },
    { name: "SEO", active: false },
    { name: "UI Design", active: false },
    { name: "Branding", active: false },
    { name: "3D Design", active: false },
    { name: "Illustrations", active: false },
  ];
  return (
    <div className="flex flex-1 mt-4 gap-4">
      <div className="flex flex-col w-[32%]">
        <Card className="bg-green-200 flex flex-1 rounded-3xl p-6 text-center">
          <CardHeader>
            <CardTitle className="text-gray-700 px-10 text-xl font-mono">
              Unlock new skills for your learning
            </CardTitle>
          </CardHeader>
          <CardAction className="flex flex-1 items-center justify-center w-full">
            <Button className="rounded-full border border-black bg-green-200 px-5 py-2 text-xs">
              More Learn
            </Button>
          </CardAction>
        </Card>
        <div className="flex flex-row flex-1 gap-5 mt-4">
          <Card className="bg-gray-200 flex flex-1 text-black py-3 rounded-3xl shadow-md justify-center">
            <CardHeader className="flex items-center flex-col">
              <CardTitle className="text-4xl font-semibold">+120</CardTitle>
              <CardContent className="text-center text-gray-700 text-[10px] font-normal px-7">
                Online courses for your learning.
              </CardContent>
            </CardHeader>
          </Card>
          <Card className="bg-black text-gray-200 flex flex-1 py-3 rounded-3xl shadow-md justify-center">
            <CardHeader className="flex items-center flex-col">
              <CardTitle className="text-4xl font-semibold">+120K</CardTitle>
              <CardContent className="text-center text-white text-[10px] font-normal px-8">
                Student trusted our platform
              </CardContent>
            </CardHeader>
          </Card>
        </div>
      </div>
      <div className="flex flex-col flex-1 rounded-3xl p-6 bg-purple-100">
        <div className="flex flex-row gap-4 border mt-4 flex-wrap">
          {cardBtn.map((items, index) => (
            <button
              onClick={() => setActiveItem(items.name)}
              key={index}
              className={`px-8 py-2 text-black text-xs rounded-full ${
                activeItem === items.name
                  ? "bg-black text-white"
                  : "bg-transparent border border-black text-black"
              }`}
            >
              {items.name}
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-8">
          <h2 className="text-5xl font-semibold mt-10">Popular Courses</h2>
          <div className="flex flex-row justify-between">
            <p className="text-md text-gray-500 pr-85">
              Our platform features top-notch courses across various domains.
              Crafted by leading experts, these programs ensure you receive
              high-quality and up-to-date knowledge for your success.
            </p>
            <span className="flex flex-1 w-full justify-end items-center">
              <ArrowUpRightFromSquareIcon size={100} className="font-bold" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
