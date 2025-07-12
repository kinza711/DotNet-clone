
import { CiGlobe } from "react-icons/ci";
import { CiMobile1 } from "react-icons/ci";
import { IoCloudOutline } from "react-icons/io5";
import { RiMicrosoftFill } from "react-icons/ri";


function Main() {
  return (
    <>
    <div className="bg-gradient-to-r from-[#f5f5f5] to-[#f4f3f3] w-full h-screen flex">
        <div className="left w-1/2 bg-transparent ">
        <div className="dil bg-transparent ml-20 mt-16 ">
        <h1 className='font-sans font-bold text-7xl mb-5 text-[#190649]'>Build. Test. Deploy.</h1>
        <p className='font-semibold text-3xl text-gray-800'>.NET is the free, open-source, cross-platform <br />
         framework for building modern apps and <br /> 
         powerful cloud services.</p> 
        </div>
        <div className="btn flex  gap-2 font-bold text-[20px] ml-20 mt-10   ">
   <button className='bg-[#512BD4] text-white hover:bg-[#4122AA] rounded-md p-2  px-3'> <a href="#">Download</a></button>
   <button className='border-[1px] text-[#5B38D7] border-[#512BD4] rounded-md p-2  px-3  hover:bg-[#EEEAFB]'> <a href="#">Get started</a></button>

       </div>
       <h1 className='text-[13px] text-gray-800 ml-20 mt-2'>Supported on Windows, Linux, and macOS</h1>
       

        </div>

        
        <div className="right overflow-hidden w-1/2 h-full bg-[#FAF5F6]">
        <img className=' w-full h-300 scale-[2] max-w-[700vh]  max-h-[900vh] object-cover scale-10  ' src="https://dotnet.microsoft.com/blob-assets/images/illustrations/hero/home-hero.png" size = "80 " alt="" />
        </div>

    </div>

    {/* next section */}
<div className="section items-center justify-center relative  -mt-[16%] ">
  <h1 className='text-5xl font-semibold mb-5 text-center '>Build it with .NET</h1>
  <div className="cards gap-5 mt-2 flex  items-center justify-center">
  <div className="card1 rounded-xl border-[1.75px] border-[#0B6CFF] w-full sm:w-1/3 md:w-1/4 lg:w-1/5 h-44 bg-[#FAFAFA] hover:bg-[#ece9e9]">
    <svg width="0" height="0">
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#ff0000', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#0000ff', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
    </svg>
    <h1 className="mx-5 my-2 text-[#5429D2] text-[20px] font-semibold">
      <CiGlobe className="mt-5" style={{ fill: 'url(#gradient)' }} /> Web
    </h1>
    <p className='mx-5 text-[16px]'>Build web apps and services for macOS, Windows, Linux, and Docker.</p>
  </div>

  <div className="card2 border-[1.75px] border-[#D600AA] rounded-xl w-full sm:w-1/3 md:w-1/4 lg:w-1/5 h-44 bg-[#f4f3f3] hover:bg-[#ece9e9]">
    <h1 className='mx-5 my-2 text-[#D32789] text-[20px] font-semibold'>
      <CiMobile1 className='mt-5' /> Mobile and desktop
    </h1>
    <p className='mx-5 text-[16px]'>Build web apps and services for macOS, Windows, Linux, and Docker.</p>
  </div>

  <div className="card3 rounded-xl border-[1.75px] border-[#0B6CFF] w-full sm:w-1/3 md:w-1/4 lg:w-1/5 h-44 bg-[#FAFAFA] hover:bg-[#ece9e9]">
    <h1 className='mx-5 my-2 text-[#1165FB] text-[20px] font-semibold'>
      <IoCloudOutline className='mt-5' /> Cloud
    </h1>
    <p className='mx-5 text-[16px]'>Build web apps and services for macOS, Windows, Linux, and Docker.</p>
  </div>

  <div className="card4 rounded-xl border-[1.75px] border-[#0B6CFF] w-full sm:w-1/3 md:w-1/4 lg:w-1/5 h-44 bg-[#FAFAFA] hover:bg-[#ece9e9]">
    <h1 className='mx-5 my-2 text-[#512BD4] text-[20px] font-semibold'>
      <RiMicrosoftFill className='mt-5' /> Microservices
    </h1>
    <p className=' mx-5 text-[16px]'>Build web apps and services for macOS, Windows, Linux, and Docker.</p>
  </div>
</div>


</div>


    </>
  )
}

export default Main