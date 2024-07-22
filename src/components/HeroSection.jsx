
import '../index.css'
import { useEffect } from "react";
import Typewriter from "typewriter-effect";
import infinitee from '../assets/profile-pictures/infinitee.png'


const HeroSection = () => {

  

  return (
    <div className="flex flex-wrap border-b justify-center" >
    <div className="pt-12 mt-2 w-full lg:w-1/2">
    <div className="text-4xl sm:text-6xl lg:text-6xl pt-2 tracking-wide sm:block lg:block gap-4">
    <div className="pt-2 mt-2">Learning meets</div>
    <div className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text pt-2">
      <Typewriter
             options={{
             autoStart: true,
             loop: true,
             }}
            onInit={(typewriter) => {
                typewriter
                    .typeString("Intention")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Creation")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Innovation")
                    .start();
                    
            }}
        />
    </div>
  </div>
  <p className="mt-10 text-lg  text-black max-w-4xl">
    Empower your creativity and bring your VR app ideas to life with our
    intuitive development tools. Get started today and turn your imagination
    into immersive reality!
  </p>
  <div className="flex  my-10">
    <a
      href="#"
      className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-6 text-white rounded-md"
    >
      Start for free
    </a>
    {/* <a href="#" className="py-3 px-4 mx-3 rounded-md border">
      Documentation
    </a> */}
  </div>
    </div>
    <div className=" w-full lg:w-1/2" >
      <img src={infinitee} alt="Coding" />
    </div>
    
  </div>

  );
};

export default HeroSection;
