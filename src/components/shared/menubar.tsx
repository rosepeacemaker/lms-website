import React from "react";
import { Menubar, MenubarMenu, MenubarTrigger } from "../ui/menubar";
import { StarIcon } from "lucide-react";
import { Button } from "../animate-ui/primitives/buttons/button";
export default function MenuBar() {
  const menuItems = [
    { label: "Home", hoverText: "hover:text-purple-500" },
    { label: "About", hoverText: "hover:text-black" },
    { label: "Courses", hoverText: "hover:text-red" },
    { label: "Mentors", hoverText: "hover:text-red" },
  ];
  const baseStyles =
    "text-gray-700 text-[14px] font-semibold hover:underline hover:cursor-pointer transition-all duration-200";
  return (
    <Menubar className="flex flex-row h-[60px] mt-1 w-full justify-between items-center border-none shadow-none bg-white py-5">
      <div className="flex items-center gap-2">
        <StarIcon size={30} fill="pink" />
        <span className="text-gray-800  font-semibold text-[18px]">Learn</span>
      </div>
      <div className="flex flex-row items-center gap-26">
        {menuItems.map((items) => (
          <MenubarMenu key={items.label}>
            <MenubarTrigger className={`${items.hoverText} ${baseStyles}`}>
              {items.label}
            </MenubarTrigger>
          </MenubarMenu>
        ))}
      </div>
      <div className="flex flex-row gap-4">
        <Button
          className="text-black bg-white py-2 px-6 rounded-lg border border-gray-400 text-xs " 
          initial={{ translateX: -10 }}
          animate={{ translateY: 0 }}
          transition={{ duration: 0.1 }}
        >
          Log in
        </Button>
        <Button
          className="text-white bg-black rounded-lg py-2 px-6  text-xs"
          initial={{ translateY: -10 }}
          animate={{ translateY: 0 }}
          transition={{ duration: 0.1 }}
        >
          Sign up
        </Button>
      </div>
    </Menubar>
  );
}
