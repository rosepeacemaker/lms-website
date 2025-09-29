import { MainScreenTypes } from "@/types";
import React from "react";

export default function MainScreen({ className, children }: MainScreenTypes) {
  return <div className={`${className} flex flex-1`}>{children}</div>;
}
