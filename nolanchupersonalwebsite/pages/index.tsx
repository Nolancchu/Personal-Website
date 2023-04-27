import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer"
import HomePageGraphic from "@/components/HomePageGraphic";
import HomePageNav from "@/components/HomePageNav";

export default function Home() {
  return (
    <div className='w-full h-screen bg-ncc-beige'>
      <Navigation/>
      <HomePageGraphic/>
      <HomePageNav/>
      <Footer/>
    </div>
  )
}
