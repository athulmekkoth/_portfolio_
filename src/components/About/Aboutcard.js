import React from "react"
import im from "../images/man.svg"

export default function Aboutcard()
{
    return(
<div className="font-sans md:flex  ">
        <div className="  mt-11 mx-auto lg:mt-32 md:1/4 lg:w-1/3   ml-2 rounded overflow-hidden shadow-2xl">
  <div class="px-6 py-4">
  <h1 className=" text-2xl whitespace-pre-line md:text-5xl lg:text-9xl text-center py-4 font-mono text-white ">Know who <span className="text-violet-700">I'm</span></h1>
    <p class="text-gray-700 text-base"></p>
      
    <div className=" text-center text-white md:text-2xl lg:text-3xl ">
    <p>Hi Everyone, I am <span className="text-violet-600">Athul Suresh</span> from Bangalore, India.
I am a junior pursuing bachelor's  in Computer Science and Application in Christ Academy.</p>
    </div>
    
  </div>
  <div class="px-6 pt-4 pb-2 text-center">
    <h3 className="text-white md:text-3xl">Apart from Coding what i like</h3>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Reading</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Music</span>
  </div>
 
</div>
<div className="">
<img className="w-80 mb-6 rounded-lg  mx-auto md:w-1/2 md:mt-48 lg:w-102 lg:mr-12 lg:py-44 " src={im} alt="img"/>

</div>
</div>

   )
}

