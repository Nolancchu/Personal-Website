import "bootstrap/dist/css/bootstrap.min.css";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaEquals } from "react-icons/fa";
import {FaEnvelope} from "react-icons/fa"
import {FaGithubSquare} from "react-icons/fa"
import {FaLinkedin} from "react-icons/fa"
import { motion, AnimatePresence, useCycle, rotate} from "framer-motion";
import { FaReact } from "react-icons/fa";
import { Inter } from "next/font/google";

const int = Inter ({
    subsets: ['latin'],
    weight: ['600']
})

const links = [
  { name: "Home", to: "/", id: 1 },
  { name: "Portfolio", to: "/portfolio", id: 2 },
  { name: "Experience", to: "/experience", id: 3 },
  { name: "About", to: "/about", id: 4 }
];

const itemVariants = {
  closed: {
    opacity: 0
  },
  open: { opacity: 1 }
};
const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1
    }
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1
    }
  }
};

const Navigation = () => {
    const [open, cycleOpen] = useCycle(false, true);

    return (
    <div className="w-full h-full flex flex-col ">
      <AnimatePresence>
              {open && (
                <motion.aside
                  initial={{ width: 0 }}
                  animate={{
                    width: 0
                  }}
                  exit={{
                    width: 0,
                    transition: { delay: 0.7, duration: 0.3 }
                  }}
                >
                  <motion.div
                    className="container absolute h-1000 w-auto z-20 bg-ncc-beige border-r-4 border-ncc-brown"
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={sideVariants}
                  >
                    {links.map(({ name, to, id }) => (
                      <motion.a
                        key={id}
                        href={to}
                        whileHover={{
                          color: "#3B6662",
                        }}
                        variants={itemVariants}
                        className="text-ncc-green no-underline flex flex-col text-5xl items-start mt-8 mb-8"
                      >
                        <span className={int.className}>{name}</span>
                      </motion.a>
                    ))}
                  </motion.div>
                </motion.aside>
              )}
      </AnimatePresence>

      <div className="w-full h-2 bg-ncc-beige"/>
      <div className="flex flex-row justify-between mt-4 z-40">
          <div className="btn-container mt-1 ml-16">
              <button onClick={cycleOpen}>{open ? <FaEquals size={34}/> : <FaEquals size={34}/>}</button>
          </div>

          <Navbar>
            <Navbar.Brand href="/" className="mb-4 ml-32">
                    <FaReact size={35} className="md:scale-150 "/>
            </Navbar.Brand>
          </Navbar>

          <Navbar>
            <Nav>
              <motion.a
                    target="_blank"
                    href="https://github.com/Nolancchu"
                    className="text-ncc-brown hover:text-ncc-green mr-2 md:mr-9 mb-3 md:scale-150"
                >
                    <FaGithubSquare size={24}/>
                </motion.a>

                <motion.a
                  target="_blank"
                  href="https://www.linkedin.com/in/nolan-chu/"
                  className="text-ncc-brown hover:text-ncc-green mr-2 md:mr-9 mb-3 md:scale-150"
                >
                  <FaLinkedin size={24} />
                </motion.a>

                <motion.a
                  target="_blank"
                  href="mailto: nolancswe@gmail.com"
                  className="text-ncc-brown hover:text-ncc-green mr-6 md:mr-16 mb-3 md:scale-150"
                >
                  <FaEnvelope size={24} />
              </motion.a>
            </Nav>
          </Navbar>
      </div>
    </div>
    )
}

export default Navigation;
