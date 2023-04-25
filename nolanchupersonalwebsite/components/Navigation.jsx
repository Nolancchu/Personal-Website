import "bootstrap/dist/css/bootstrap.min.css";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Navigation = () => {
    return (
    <div>
          <Navbar bg={'ncc-white'} expand="lg">
            <Navbar.Brand href="#home" className='ml-20 fs-4 flex flew-row'>
                <img
                  src="/React-icon.png"
                  width="40"
                  height="40"
                  className="d-inline-block align-top mr-3"
                />
                
                <div className='text-ncc-green text-3xl'>Nolan Chu</div>
            </Navbar.Brand>
    
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <div className='w-3/5'></div>
            <Navbar id="basic-navbar-nav" className="text-2xl text-ncc-green">
                <Nav.Link href="#home" className='mr-4'>Home</Nav.Link>
                <Nav.Link href="#link" className='mr-4 ml-4'>Link</Nav.Link>
                <Nav.Link href="#link" className='ml-4'>About</Nav.Link>
            </Navbar>
          </Navbar>
        <div className={`w-full h-1 bg-ncc-brown`} />
    </div>
    )
}

export default Navigation;
