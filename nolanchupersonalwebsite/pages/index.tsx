import { Inter } from 'next/font/google'
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer"
import HomePageGraphic from "@/components/HomePageGraphic";


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='w-full h-screen bg-ncc-beige'>
      <div className="w-full h-2 bg-ncc-beige"/>
      <Navigation/>
      <HomePageGraphic/>
      <Footer/>
    </div>
  )
}
