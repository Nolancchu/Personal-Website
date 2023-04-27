import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AboutHeadGraphic from "@/components/AboutHeadGraphic";

export default function About() {
  return (
    <div className='w-full h-screen bg-ncc-beige'>
        <Navigation/>
        <div className="w-full h-12 bg-ncc-beige"/>
        <AboutHeadGraphic/>
        <Footer/>
    </div>
  )
}