import { Button } from "@/components/animate-ui/primitives/buttons/button";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowUpRightFromSquareIcon } from "lucide-react";
import React from "react";

export default function Cards() {
  const cardsbtn = [
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
    <div className="flex flex-1 w-full mt-6 mb-2 gap-3">
      <div className="flex flex-row flex-1 w-[40%]">
        <div className="flex flex-col flex-1">
          <Card className="bg-green-200 flex flex-1 rounded-lg p-4 text-center">
            <CardHeader>
              <CardTitle className="text-gray-700">
                unlock new skills for your learning,unlock new skills for your
                learning
              </CardTitle>
            </CardHeader>
            <CardAction className="flex flex-1 items-center justify-center w-full">
              <Button className="rounded-full border border-gray-400 bg-green-200 px-4 py-1">
                Learn more
              </Button>
            </CardAction>
          </Card>
          <div className="flex flex-row flex-1 gap-5 mt-4">
            <Card className="bg-gray-200 flex flex-1 text-black p-4 rounded-lg shadow-md">
              <CardHeader className="flex items-center flex-col">
                <CardTitle className="text-2xl font-bold">+120</CardTitle>
                <CardContent className="text-center text-gray-700 text-[14px] font-semibold">
                  online courses for your learniing.
                </CardContent>
              </CardHeader>
            </Card>
            <Card className="bg-black text-gray-200 flex flex-1 p-4 rounded-lg shadow-md">
              <CardHeader className="flex items-center flex-col">
                <CardTitle className="text-2xl font-bold">+120K</CardTitle>
                <CardContent className="text-center text-gray-500 text-[16px] font-semibold">
                  Student trused our platform
                </CardContent>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
      <div className="flex-1 w-[60%] rounded-2xl bg-purple-100">
        <div className="flex flex-row gap-2 border mt-4 p-4">
          {cardsbtn.map((items, index) => (
            <button
              key={index}
              className={`px-4 py-1.5 text-black text-[10px] rounded-full ${
                items.active ? "bg-black text-white" : "bg-white text-black"
              }`}
            >
              {items.name}
            </button>
          ))}
        </div>
        <div className="flex flex-col p-5">
          <h2 className="text-4xl font-bold mt-6 mb-4">Popular Courses</h2>
          <p className="text-lg text-black mb-4">
            Our platform features top-notch courses across various domains.
            Crafted by leading experts, these programs ensure you receive
            high-quality and up-to-date knowledge for your success.
          </p>
          <span className="flex flex-1 w-full justify-end items-center">
            <ArrowUpRightFromSquareIcon size={45} className="font-bold" />
          </span>
        </div>
      </div>
    </div>
  );
}
