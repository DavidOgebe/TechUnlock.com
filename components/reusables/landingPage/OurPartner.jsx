import React from "react";
import Image from "next/image";
import line from "@/assets/landing-page/Line.svg";
import partners from "@/assets/landing-page/partners.svg";

const OurPartner = () => {
  return (
    <div className="">
      <div className="relative">
        <p className="relative grid justify-center content-center">
          <Image
            src={line}
            alt="line"
            className="absolute left-[42%] top-9 w-[16%] mx-auto"
          />
          <span className="text-center text-3xl font-semibold text-first-primary">
            Our Partners
          </span>
        </p>
      </div>

      <div className="mt-8 w-[95%] mx-auto">
        <Image src={partners} alt="partners" className="mx-auto" />
      </div>
    </div>
  );
};

export default OurPartner;
