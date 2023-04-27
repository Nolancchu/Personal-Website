import React from "react";
import { FaReact } from "react-icons/fa";
import { Bebas_Neue } from "next/font/google";

const Bebas = Bebas_Neue ({
    subsets: ['latin'],
    weight:['400']
})

const AboutHeadGraphic = () => {
  return (
    <div className="flex flex-col w-full h-full bg-ncc-beige">
        <div className="flex w-11/12 flex-col text-8xl !ml-12 items-end mb-8">
                    <span >PROFILE:</span>
        </div>
        <div className="flex flex-row w-full bg-ncc-beige">
          <img
                      src="/React-icon.png"
                      width={500}
                      className="h-8/12 align-middle translate-y-0"
                    />
          <div className="text-8xl w-[.2rem] h-full bg-ncc-black ml-8"></div>
        </div>

        <div className="text-2xl"></div>

    </div>
  );
};

export default AboutHeadGraphic;
