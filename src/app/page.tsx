import MainScreen from "@/components/shared/mainscreen";
import MenuBar from "@/components/shared/menubar";
import HeroPage from "@/features/components/hero";
import Cards from "@/features/components/herofooter";
import React from "react";

export default function LandingPage() {
  return (
    <MainScreen className="bg-white w-full h-screen flex flex-col px-10">
      <MenuBar />
      <HeroPage />
      <Cards />
    </MainScreen>
  );
}
