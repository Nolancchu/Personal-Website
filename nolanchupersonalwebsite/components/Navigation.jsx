import "bootstrap/dist/css/bootstrap.min.css";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaBars} from "react-icons/fa";
import {FaEnvelope} from "react-icons/fa"
import {FaGithubSquare} from "react-icons/fa"
import {FaLinkedin} from "react-icons/fa"
import { motion, AnimatePresence, useCycle, rotate} from "framer-motion";
import { Cormorant_Garamond } from "next/font/google";

const garamond = Cormorant_Garamond({
  subsets: ['latin'], 
  weight: ['400'],
})

const links = [
  { name: "Home", to: "/", id: 1 },
  { name: "Portfolio", to: "/portfolio", id: 2 },
  { name: "Experience", to: "/experience", id: 3 },
  { name: "Resume", to: "#", id: 4 },
  { name: "About", to: "/about", id: 5 }
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
    <div className="w-full h-auto flex flex-col  ">
      <div className="flex flex-row justify-between mt-4">
          <Navbar>
            <Navbar.Brand href="#home" className="justify-center ml-16">
                    <img
                      src="/React-icon.png"
                      width="40"
                      className="d-inline-block align-top"
                    />
            </Navbar.Brand>
          </Navbar>

          <main>
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
                    className="container "
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={sideVariants}
                  >
                    {links.map(({ name, to, id }) => (
                      <motion.a
                        key={id}
                        href={to}
                        whileHover={{ scale: 1.1 }}
                        variants={itemVariants}
                        className="text-ncc-black no-underline ml-2 mr-2"
                      >
                        {name}
                      </motion.a>
                    ))}
                  </motion.div>
                </motion.aside>
              )}
            </AnimatePresence>
            
              <div className="btn-container text-xl p-3 ml-3 mt-2 ">
                  <button onClick={cycleOpen}>{open ? <FaBars size={26}/> : <FaBars size={26}/>}</button>
              </div>
            
          </main>

          <Navbar>
            <Nav>
              <motion.a
                    target="_blank"
                    href="https://github.com/Nolancchu"
                    className="text-ncc-brown hover:text-ncc-green ml-1 mr-6"
                >
                    <FaGithubSquare size={24}/>
                </motion.a>

                <motion.a
                  target="_blank"
                  href="https://www.linkedin.com/in/nolan-chu/"
                  className="text-ncc-brown hover:text-ncc-green mr-6"
                >
                  <FaLinkedin size={24} />
                </motion.a>

                <motion.a
                  target="_blank"
                  href="mailto: nolancswe@gmail.com"
                  className="text-ncc-brown hover:text-ncc-green mr-16"
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
