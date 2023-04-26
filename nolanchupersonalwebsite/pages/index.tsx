import { Inter } from 'next/font/google'
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer"


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className="w-full h-2 bg-ncc-beige"/>
      <Navigation/>
      <div className='flex flex-col items-center w-full h-screen bg-ncc-beige'>l</div>
      <Footer/>
    </>
  )
}
