import React from "react";
import { Menubar, MenubarMenu, MenubarTrigger } from "../ui/menubar";
import { StarIcon } from "lucide-react";
import { Button } from "../animate-ui/primitives/buttons/button";
import { easeInOut, motion } from "motion/react";
export default function MenuBar() {
  const menuItems = [
    { label: "Home", hoverText: "hover:text-purple-500" },
    { label: "About", hoverText: "hover:text-black" },
    { label: "courses", hoverText: "hover:text-red" },
    { label: "Mentors", hoverText: "hover:text-red" },
  ];
  const baseStyles =
    "text-gray-700 text-[14px] font-semibold hover:underline hover:cursor-pointer transition-all duration-200";
  return (
    <Menubar className="flex flex-row h-[60px] mt-1 w-full justify-between items-center bg-white border border-amber-300 p-6 ">
      <div className="flex items-center gap-2">
        <StarIcon size={30} fill="pink" />
        <span className="text-gray-800  font-semibold text-[18px]">Learn</span>
      </div>
      <div className="flex flex-row items-center gap-10">
        {menuItems.map((items) => (
          <MenubarMenu key={items.label}>
            <MenubarTrigger className={`${items.hoverText} ${baseStyles}`}>
              {items.label}
            </MenubarTrigger>
          </MenubarMenu>
        ))}
      </div>
      <div className="flex flex-row gap-4 p-6">
        <Button
          className="text-black bg-white p-1 px-4 rounded-lg border border-gray-400"
          initial={{ translateX: -10 }}
          animate={{ translateY: 0 }}
          transition={{ duration: 0.1 }}
          whileHover={{ border: "blue" }}
        >
          Log in
        </Button>
        <Button
          className="text-white bg-black rounded-lg p-1 px-4"
          initial={{ translateY: -10 }}
          animate={{ translateY: 0 }}
          transition={{ duration: 0.1 }}
          whileHover={{ scale: 1.1 }}
        >
          sign up
        </Button>
      </div>
    </Menubar>
  );
}
