import React, { useState } from "react";
import { motion } from "framer-motion";
import { Cormorant_Garamond } from "next/font/google";
import Link from "next/link";

const garamond = Cormorant_Garamond({
    subsets: ['latin'], 
    weight: ['700'],
})


const HomePageNav = () => {
  return (
    <div >
        <div className={`w-full h-1 bg-ncc-brown mb-12`} />
    
        <div className="flex flex-row w-full items-center justify-center bg-ncc-beige">
            <Link href="https://legacy.reactjs.org/docs/getting-started.html" className="text-ncc-brown text-6xl hover:text-ncc-white" style={{ textDecoration: 'none' }}>[ Portfolio ]</Link>
            <div className={garamond.className}><span className="text-9xl ml-10 mr-10">|</span></div>
            <Link href="https://legacy.reactjs.org/docs/getting-started.html" className="text-ncc-brown text-6xl hover:text-ncc-white" style={{ textDecoration: 'none' }}>[ Work &amp; Experiences ]</Link>
            <div className={garamond.className}><span className="text-9xl ml-10 mr-10">|</span></div>
            <Link href="https://legacy.reactjs.org/docs/getting-started.html" className="text-ncc-brown text-6xl hover:text-ncc-white" style={{ textDecoration: 'none' }}>[ About ]</Link>
        </div>

        <div className="w-full h-12 bg-ncc-beige "></div>
    </div>
  );
};

export default HomePageNav;
