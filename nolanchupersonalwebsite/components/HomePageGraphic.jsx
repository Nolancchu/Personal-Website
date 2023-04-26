import React from "react"; 
import Head from "next/head";
import { Cormorant_Garamond } from 'next/font/google';
import { Bebas_Neue } from "next/font/google";

const garamond = Cormorant_Garamond({
    subsets: ['latin'], 
    weight: ['400'],
})

const Bebas = Bebas_Neue ({
    subsets: ['latin'],
    weight:['400']
})

const HomePageGraphic = () => {
  return (
    <div className="styles.container">
        <Head>

        </Head>
        <div className="flex flex-row overflow-clip w-full bg-ncc-beige">
            <div className="col mt-10 ml-16 w-1/2 z-10">
                <div className="text-9xl translate-y-[2.7rem]">
                    <span className={garamond.className}>PRE</span>
                </div>
                <div className="text-9xl">
                    <span className={garamond.className}>PRETEN</span>
                </div>
                <div className="text-9xl -translate-y-[2.1rem]">
                    <span className={Bebas.className}>PRETENTIOUS TEXT</span>
                </div>
                <div className="text-xl -translate-y-[3rem]">
                    <span className={garamond.className}>My name is Nolan Chu, a first-year computer science <br></br> student at the University of California, Riverside.</span>
                </div>
            </div>
            <img
                    src="/React-icon.png"
                    width={80}
                    className="-translate-y-96 h-full align-middle"
                  />
        </div>
    </div>
  );
};

export default HomePageGraphic;
