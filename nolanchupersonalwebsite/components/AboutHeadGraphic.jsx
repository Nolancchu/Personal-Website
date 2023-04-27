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
          <div className="text-8xl w-[.2rem] h-full bg-ncc-black ml-8 mr-8"></div>
          <div className="flex flex-col w-full">
            <div className="flex w-6/12 text-4xl items-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <div className="w-full h-12 bg-ncc-beige"/>
            <div className="w-6/12 text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
          </div>
        </div>
        <div className="w-full h-12 bg-ncc-beige"/>
        <div className="flex w-full justify-center items-center">
            <div className="flex text-8xl justify-end">FILLER TEXT</div>
        </div>
    </div>
  );
};

export default AboutHeadGraphic;
