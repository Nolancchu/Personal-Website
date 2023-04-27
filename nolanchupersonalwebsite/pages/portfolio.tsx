import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Portfolio() {
  return (
    <div className='w-full h-screen bg-ncc-beige'>
        <Navigation/>
        <div className="w-full h-36 bg-ncc-beige"/>
        <div className="flex w-8/12 h-96 justify-center items-center rounded-xl bg-ncc-green"></div> 
        
        <Footer/>
    </div>
  )
}