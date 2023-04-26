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
        <div className="flex flex-row overflow-clip w-full h-full bg-ncc-beige">
            <div className="col mt-10">
                <div className="ml-16 text-9xl translate-y-[3.35rem]">
                    <span className={garamond.className}>PRE</span>
                </div>
                <div className="ml-16 text-9xl">
                    <span className={garamond.className}>PRETEN</span>
                </div>
                <div className="ml-16 text-9xl -translate-y-11">
                    <span className={Bebas.className}>PRETENTIOUS TEXT</span>
                </div>
            </div>

            <img src="" alt="" />
        </div>
    </div>
  );
};

export default HomePageGraphic;
