"use client";

import React from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const FilterBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const path = usePathname();

  const featureFilter = searchParams.get("feature") || "all";
  const difficultyFilter = searchParams.get("difficulty") || "all";

  const handleFilterChange = (filterType, filterValue) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(filterType, filterValue);
    router.push(`${path}?${params.toString()}`);
  };

  return (
    <div className="bg-primary py-4 px-5">
      <div className="flex flex-col justify-between md:flex-row space-y-2 md:space-y-0 md:space-x-4">
        <div className="flex items-center gap-x-5">
          <p className="text-white">Featured:</p>

          <div className="flex space-x-2">
            <Button
              className={`${
                featureFilter === "popular" ? "bg-white text-gray-900" : ""
              } bg-white text-gray-900  hover:bg-white hover:text-primary`}
              onClick={() => handleFilterChange("feature", "popular")}
            >
              Popular Courses
            </Button>
            <Button
              className={`${
                featureFilter === "new" ? "bg-white text-gray-900" : ""
              } bg-white text-gray-900 hover:bg-white hover:text-primary`}
              onClick={() => handleFilterChange("feature", "new")}
            >
              New Courses
            </Button>
            <Button
              className={`${
                featureFilter === "sales" ? "bg-white text-gray-900" : ""
              } bg-white text-gray-900  hover:bg-white hover:text-primary`}
              onClick={() => handleFilterChange("feature", "sales")}
            >
              On Sales Courses
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-x-5">
          <p className="text-white">Level:</p>
          <div className="flex space-x-2">
            <Button
              className={`${
                difficultyFilter === "beginner" ? "bg-white text-gray-900" : ""
              } bg-white text-gray-900  hover:bg-white hover:text-primary`}
              onClick={() => handleFilterChange("difficulty", "beginner")}
            >
              Beginner
            </Button>
            <Button
              className={`${
                difficultyFilter === "intermediate"
                  ? "bg-white text-gray-900"
                  : ""
              } bg-white text-gray-900  hover:bg-white hover:text-primary`}
              onClick={() => handleFilterChange("difficulty", "intermediate")}
            >
              Intermediate
            </Button>
            <Button
              className={`${
                difficultyFilter === "advanced" ? "bg-white text-gray-900" : ""
              } bg-white text-gray-900  hover:bg-white hover:text-primary`}
              onClick={() => handleFilterChange("difficulty", "advanced")}
            >
              Advanced
            </Button>
          </div>
        </div>

        <div className="">
          <Button
            className={`${
              difficultyFilter === "all" ? "bg-white text-gray-900" : ""
            } bg-white text-gray-900  hover:bg-white hover:text-primary`}
            onClick={() => handleFilterChange("difficulty", "all")}
          >
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
