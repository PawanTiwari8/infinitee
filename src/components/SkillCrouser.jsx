import React from 'react'
import image1 from "../assets/profile-pictures/css.png"
import image2 from "../assets/profile-pictures/canva.png"
import image3 from "../assets/profile-pictures/C.png"
import image4 from "../assets/profile-pictures/c++.png"
import image5 from "../assets/profile-pictures/js.png"
import image6 from "../assets/profile-pictures/wp.png"
import image7 from "../assets/profile-pictures/ld.png"
import image8 from "../assets/profile-pictures/insta.png"
import image9 from "../assets/profile-pictures/fb.png"
import image10 from "../assets/profile-pictures/google.png"
import image11 from "../assets/profile-pictures/meta.png"

const SkillCrouser = () => {
  return (
    <div className="mt-20 flex overflow-hidden space-x-16 group  border-gray-500">
    <div className="flex space-x-8 animate-loop-scroll group-hover:paused">
    <img loading="lazy" src={image2} className="max-w-none h-20 w-20" alt="Imag0 w-20" />
    <img loading="lazy" src={image1} className="max-w-none h-20 w-20" alt="Image 1" />
    <img loading="lazy" src={image3} className="max-w-none h-20 w-20" alt="Image 4" />
    <img loading="lazy" src={image4} className="max-w-none h-20 w-20" alt="Image 5" />
    <img loading="lazy" src={image5} className="max-w-none h-20 w-20" alt="Image 6" />
    <img loading="lazy" src={image6} className="max-w-none h-20 w-20" alt="Image 7" />
    <img loading="lazy" src={image7} className="max-w-none h-20 w-20" alt="Image 8" />
    <img loading="lazy" src={image8} className="max-w-none h-20 w-20" alt="Image 9" />
    <img loading="lazy" src={image9} className="max-w-none h-20 w-20" alt="Image 10" />
    <img loading="lazy" src={image10} className="max-w-none h-20 w-20" alt="Image 3" />
    <img loading="lazy" src={image11} className="max-w-none h-20 w-20" alt="Image 3" />
  </div>
  <div className="flex space-x-8 animate-loop-scroll group-hover:paused" aria-hidden="true">
    <img loading="lazy" src={image2} className="max-w-none h-20 w-20" alt="Image 2" />
    <img loading="lazy" src={image1} className="max-w-none h-20 w-20" alt="Image 1" />
    <img loading="lazy" src={image3} className="max-w-none h-20 w-20" alt="Image 4" />
    <img loading="lazy" src={image4} className="max-w-none h-20 w-20" alt="Image 5" />
    <img loading="lazy" src={image5} className="max-w-none h-20 w-20" alt="Image 6" />
    <img loading="lazy" src={image6} className="max-w-none h-20 w-20" alt="Image 7" />
    <img loading="lazy" src={image7} className="max-w-none h-20 w-20" alt="Image 8" />
    <img loading="lazy" src={image8} className="max-w-none h-20 w-20" alt="Image 9" />
    <img loading="lazy" src={image9} className="max-w-none h-20 w-20" alt="Image 10" />
    <img loading="lazy" src={image10} className="max-w-none h-20 w-20" alt="Image 3" />
    <img loading="lazy" src={image11} className="max-w-none h-20 w-20" alt="Image 3" />
  </div>
 </div>
    
  )
}

export default SkillCrouser