import image1 from "../assets/profile-pictures/css.png"
import image2 from "../assets/profile-pictures/canva.png"
import image3 from "../assets/profile-pictures/C.png"
import image4 from "../assets/profile-pictures/c++.png"
import image5 from "../assets/profile-pictures/js.png"
import image6 from "../assets/profile-pictures/wp.png"
import digital from "../assets/profile-pictures/digital.png";
import digital2 from "../assets/profile-pictures/1.png";
import digital3 from "../assets/profile-pictures/3.png";
import image7 from "../assets/profile-pictures/ld.png"
import image8 from "../assets/profile-pictures/insta.png"
import image9 from "../assets/profile-pictures/fb.png"
import image10 from "../assets/profile-pictures/google.png"
import image11 from "../assets/profile-pictures/meta.png"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
const FeatureSection = () => {

useEffect(()=>{Aos.init({duration:2000,})},[])

  return(
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        {/* <span className="bg-neutral-900 text-white rounded-full h-6 text-sm font-large px-2 py-1 uppercase">
          Courses
        </span> */}
        <h2 className="text-4xl sm:text-4xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Programs offer by{"  "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            SkillShala
          </span>
        </h2>
      </div>
      <div class="container mx-auto px-4 py-8 mt-12">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div class="bg-white shadow-lg rounded-lg overflow-hidden border-4 border-orange-800 shadow-white" data-aos="zoom-in">
        <img class="w-full h-64 object-cover" src={digital} alt="Image description for card 1"></img>
        <div class="p-4">
          <h2 class="text-black text-2xl font-bold mb-2">Complete Web Devlopment</h2>
          <div className="flex p-3 gap-7">
             <div className="text-gray-700">
              <ul className=" list-disc">
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>Javascript/JQUERY</li>
                <li>PHP</li>
                <li>AJAX</li>
                <li>PHP Frameworks</li>
              </ul>
              </div>
              <div className="text-gray-700">
              <ul className=" list-disc">
                <li>Complete database learning & much more</li>
              </ul>
              </div>
          </div>
        </div>
      </div>
      
      <div class="bg-white shadow-lg rounded-lg overflow-hidden border-4 border-orange-800 shadow-white" data-aos="zoom-in">
        <img class="w-full h-64 object-cover" src={digital2} alt="Image description for card 1"></img>
        <div class="p-4">
          <h2 class="text-black text-2xl font-bold mb-2">Digital Marketing</h2>
          <div className="flex p-3 gap-7">
             <div className="text-gray-700">
              <ul className=" list-disc">
              <li>Introduction to Digital Marketing Landscape in 2024</li>
                <li>Content Creation with AI</li>
                <li>Google Advertisement/ PPC/SEM</li>
                <li>Performance Marketing</li>
                <li>Blogging/Content Writing</li>
               
              </ul>
              </div>
              <div className="text-gray-700">
              {/* <ul className=" list-disc">
                <li></li> 
              </ul> */}
              </div>
          </div>
        </div>
      </div>
      
      <div class="bg-white shadow-lg rounded-lg overflow-hidden border-4 border-orange-800 shadow-white" data-aos="zoom-in">
        <img class="w-full h-64 object-cover" src={digital3} alt="Image description for card 1"></img>
        <div class="p-4">
          <h2 class="text-black text-2xl font-bold mb-2">Programming Languages and Development</h2>
          <div className="flex p-3 gap-7">
             <div className="text-gray-700">
              <ul className=" list-disc">
                <li>Complete Wordpress with practical implementation </li>
                <li>Complete C++ and STL</li>
                <li>C</li>
              </ul>
              </div>
              <div className="text-gray-700">
              {/* <ul className=" list-disc">
                <li></li> 
              </ul> */}
              </div>
          </div>
        </div>
      </div>
      </div>
      </div>
  
  
</div>
);
};

export default FeatureSection;
