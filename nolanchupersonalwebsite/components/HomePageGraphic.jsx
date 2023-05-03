import React from "react"; 
import { Cormorant_Garamond } from 'next/font/google';
import { Inter } from "next/font/google";
import { FaReact } from "react-icons/fa";

const garamond = Cormorant_Garamond({
    subsets: ['latin'], 
    weight: ['300'],
})

const int = Inter ({
    subsets: ['latin'],
    weight: ['600']
})

const HomePageGraphic = () => {
  return (
    <div className="styles.container">
        <div className="flex flex-col lg:flex-row overflow-clip w-full mt-10">

            <div className="xl:mt-10 ml-16 w-full lg:w-1/2 z-10" >
                <div className="text-[0rem] lg:text-9xl leading-snug">
                    <span className={garamond.className}>PRE</span><br></br>
                    <span className={garamond.className}>PRETEN</span><br></br>
                    <span className={int.className}>PRETENTIOUS</span><br></br>
                </div>
                <div className="text-xl lg:text-[0rem] leading-snug">
                    <span className={int.className}>WELCOME</span><br></br>
                </div>
                <div className="ml-1 text-xl lg:text-2xl max-lg:justify-self-center max-lg:w-6/12 lg:w-9/12">
                    <span className={garamond.className}>My name is Nolan Chu, a first-year computer science student at the University of California, Riverside.</span>
                </div>   
            </div>

            <div className="flex justify-center items-start">
                <FaReact size={550} className=" max-md:scale-50 md:max-xl:scale-75"/>
            </div>
            
        </div>
        
    </div>
  );
};

export default HomePageGraphic;
