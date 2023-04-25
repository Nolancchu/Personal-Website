import { Inter } from 'next/font/google'
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer"


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navigation/>
      <div className='flex flex-col items-center w-full h-screen bg-ncc-green'>TEST TEXT</div>
      <Footer/>
    </>
  )
}
