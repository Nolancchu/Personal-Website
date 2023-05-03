import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ExperienceText from "@/components/ExperienceText";

export default function Experience() {
  return (
    <div className='w-full h-full bg-ncc-beige'>
        <Navigation/>
        <ExperienceText/>
        <Footer/>
    </div>
  )
}