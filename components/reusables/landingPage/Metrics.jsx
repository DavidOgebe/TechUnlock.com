import React from "react";
import StatsCard from "./StatsCard";
import TestimonyCarousel from "./TestimonyCarousel";

const Metrics = () => {
  return (
    <div className="metrics min-h-screen grid gap-y-[5rem]">
      <StatsCard />

      <p className="text-3xl lg:text-5xl font-bold text-center text-white w-5/6 lg:w-[61%] mx-auto drop-shadow-md">
        Building Africa’s leading <span className="mt-3">Innovation</span>{" "}
        <br /> <span className="text-4xl font-normal italic">ecosystem</span>
      </p>

      <TestimonyCarousel />
    </div>
  );
};

export default Metrics;
