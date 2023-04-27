import React from "react";
import { BsDiscord } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import {FaGithubSquare} from "react-icons/fa"
import {FaLinkedin} from "react-icons/fa"
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="w-full relative">
        <div className={`w-full h-[.1rem] bg-ncc-brown`} />
        <div className="w-full flex flex-col items-center  bg-ncc-beige">
            <div className="h-14 mt-3 flex flex-row justify-center items-center">

                <motion.a
                    target="_blank"
                    href="https://discord.gg/Ugjp6Us"
                    className="text-ncc-brown hover:text-ncc-green mr-8"
                >
                    <FaGithubSquare size={20}/>
                </motion.a>

                <motion.a
                target="_blank"
                href="https://discord.gg/Ugjp6Us"
                className="text-ncc-brown hover:text-ncc-green "
                >
                <FaLinkedin size={20} />
                </motion.a>

                <motion.a
                target="_blank"
                className="text-ncc-brown hover:text-ncc-green ml-8"
                href="https://ieeeucr.github.io/subscribe.html"
                >
                <GrMail size={20} />
                </motion.a>
            
            </div>

            <div className="text-ncc-brown mb-10">
                Nolan Christopher Chu
            </div>
        </div>
    </footer>
  );
};

export default Footer;
