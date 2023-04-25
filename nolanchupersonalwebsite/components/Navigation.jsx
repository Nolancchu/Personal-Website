import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { GrMail } from "react-icons/gr";
import {FaEnvelope} from "react-icons/fa"
import {FaGithubSquare} from "react-icons/fa"
import {FaLinkedin} from "react-icons/fa"
import { motion } from "framer-motion";


const Navigation = () => {
    return (
    <div className="flex justify-between bg-ncc-beige">
        <Navbar>
          <NavDropdown title="Menu" id="basic-nav-dropdown" style={{fontSize: 24}} className="justify-start ml-16">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" className="test-2xl">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
          </NavDropdown>
        </Navbar>

        <Navbar>
          <Navbar.Brand href="#home" className="justify-center ml-20">
                  <img
                    src="/React-icon.png"
                    width="60"
                    height="60"
                    className="d-inline-block align-top"
                  />
          </Navbar.Brand>
        </Navbar>

        <Navbar>
          <Nav>
            <motion.a
                  target="_blank"
                  href="https://github.com/Nolancchu"
                  className="text-ncc-brown hover:opacity-70 ml-1 mr-6"
              >
                  <FaGithubSquare size={30}/>
              </motion.a>

              <motion.a
                target="_blank"
                href="https://www.linkedin.com/in/nolan-chu/"
                className="text-ncc-brown hover:opacity-70 mr-6"
              >
                <FaLinkedin size={30} />
              </motion.a>

              <motion.a
                target="_blank"
                href="mailto: nolancswe@gmail.com"
                className="text-ncc-brown hover:opacity-70 mr-16"
              >
                <FaEnvelope size={30} />
            </motion.a>
          </Nav>
        </Navbar>
    </div>
    
      /*
    <div className="w-full flex flex-row justify-center items-center bg-ncc-white">
        <Navbar bg={'ncc-white'} expand="lg" className="">
          
            <NavDropdown title="Dropdown" id="basic-nav-dropdown" style={{fontSize: 30}}>
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className="test-2xl">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

          
            <Navbar.Brand href="#home">
                <img
                  src="/React-icon.png"
                  width="40"
                  height="40"
                  className="d-inline-block align-top"
                />
            </Navbar.Brand>
            

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar id="basic-navbar-nav" className="text-2xl text-ncc-brown">
                <Nav.Link href="#home" className='mr-4'>Home</Nav.Link>
                <Nav.Link href="#link" className='mr-4 ml-4'>Link</Nav.Link>
                <Nav.Link href="#link" className='ml-4'>About</Nav.Link>
            </Navbar>
            </Navbar>
          
    </div>*/
    )
}

export default Navigation;
