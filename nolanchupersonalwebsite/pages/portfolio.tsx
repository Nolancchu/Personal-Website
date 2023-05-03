import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProjectSection from "@/components/ProjectSection"


export default function Portfolio() {
  return (
    <div className='w-full h-full bg-ncc-beige'>
        <Navigation/>
        <div className = "flex flex-col justify-center items-center">
          <div className="w-full h-8 bg-ncc-beige"/>
          <div className="p-4 text-3xl lg:text-4xl xl:text-5xl">Besides this website, here's what I've been working on...</div>
          <div className="w-full h-12 bg-ncc-beige"/>
          <ProjectSection/>
        </div>
        <Footer/>
    </div>
  )
}