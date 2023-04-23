import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <body className="bg-ncc-white">
      <nav className="flex items-center flex-wrap bg-ncc-beige p-6">
        <div className="flex items-center flex-shrink-0 text-ncc-brown mr-6">
          <svg className="fill-current h-8 w-8 mr-2 ml-16" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
            <span className="font-semibold text-xl tracking-tight">Nolan Chu</span>
        </div>
        <div className="w-full flex flex-grow flex-row lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-ncc-brown hover:text-white mr-4">
              Work
            </a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-ncc-brown hover:text-white mr-4">
              Experience
            </a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-ncc-brown hover:text-white">
              Profile
            </a>
          </div>
        </div>
      </nav>
      <div className="flex flex-col items-center bg-ncc-white"></div>
    </body>
  )
}
