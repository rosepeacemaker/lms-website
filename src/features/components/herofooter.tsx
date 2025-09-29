import { Button } from "@/components/animate-ui/primitives/buttons/button";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
    <div className="flex h-full w-full p-8">
      <div className="flex flex-row h-full w-[40%]">
        <div className="flex flex-col p-6">
          <Card className=" bg-green-200 h-[170px] w-[400px] rounded-lg p-4 text-center">
            <CardHeader>
              <CardTitle>unlock new skills for your learning</CardTitle>
            </CardHeader>
            <CardAction>
              <div className="flex items-center border border-red-800 w-full">
                <Button className="rounded-full border border-gray-400 bg-green-200 px-4 py-1">
                  Learn more
                </Button>
              </div>
            </CardAction>
          </Card>
          <div className="flex flex-row gap-5 mt-4">
            <Card className="bg-gray-200 text-black p-4 rounded-lg shadow-md w-[200px] h-[130px]">
              <CardHeader className="flex items-center flex-col">
                <CardTitle className="text-2xl font-bold">+120</CardTitle>
                <CardContent className="text-center text-gray-700 text-[14px] font-semibold  w-[170px] border border-red-900">
                  online courses for your learniing.
                </CardContent>
              </CardHeader>
            </Card>
            <Card className="bg-black text-gray-200 p-4 rounded-lg shadow-md w-[200px] h-[130px]">
              <CardHeader className="flex items-center flex-col">
                <CardTitle className="text-2xl font-bold">+120</CardTitle>
                <CardContent className="text-center text-gray-700 text-[14px] font-semibold  w-[170px] border border-red-900">
                  Student trused our platform
                </CardContent>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
      <div className="h-full w-[60%] rounded-2xl bg-purple-300">
        <div className="flex flex-row gap-4 mt-4 p-4">
          {cardsbtn.map((items, index) => (
            <button
              key={index}
              className={`px-2.5 py-1.5 text-black rounded-full ${
                items.active
                  ? "bg-black text-white"
                  : "bg-white text-black border"
              }`}
            >
              {items.name}
            </button>
          ))}
        </div>
         <div className="flex flex-col items-start p-4">
      <h2 className="text-4xl font-bold mt-6  border-b-gray-700 mb-4">Popular Courses</h2>
      <p className="text-lg text-black mb-4">
        Our platform features top-notch courses across various domains. Crafted by leading experts, these programs ensure you receive high-quality and up-to-date knowledge for your success.
      </p>
      
    </div>
      </div>
     
    </div>
  );
}
