import React from "react";
import { BsDiscord } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import {FaGithubSquare} from "react-icons/fa"
import {FaLinkedin} from "react-icons/fa"
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="w-full relative">
        <div className={`w-full h-1 bg-ncc-brown`} />
        <div className="w-full relative bottom-0 bg-ncc-white">
          <div className="h-24 flex flex-row justify-center items-center">

            <motion.a
                target="_blank"
                href="https://discord.gg/Ugjp6Us"
                className="text-ncc-brown hover:opacity-70 p-12"
            >
                <FaGithubSquare size={74}/>
            </motion.a>

            <motion.a
              target="_blank"
              href="https://discord.gg/Ugjp6Us"
              className="text-ncc-brown hover:opacity-70 p-12"
            >
              <FaLinkedin size={74} />
            </motion.a>

            <motion.a
              target="_blank"
              className="text-ncc-brown hover:opacity-70 p-12"
              href="https://ieeeucr.github.io/subscribe.html"
            >
              <GrMail size={84} />
            </motion.a>
            
          </div>
        </div>
    </footer>
  );
};

export default Footer;
