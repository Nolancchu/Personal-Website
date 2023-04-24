import { Inter } from 'next/font/google'
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "@/components/Navigation";


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navigation/>
      <div className='flex flex-column items-center w-full min-h-screen bg-ncc-green'>TEST TEXT</div>
    </>
  )
}
