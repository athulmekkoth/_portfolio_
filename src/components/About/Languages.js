import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import { SiSolidity ,SiTailwindcss} from "react-icons/si";
import { FaSuitcaseRolling } from 'react-icons/fa';
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiLinux,
    DiHtml5,
    DiVisualstudio,
    DiGit,
       DiCss3Full,
   
  } from "react-icons/di";
  
export default function Languages()
{
    return(
   
    <div className="mt-24">
        <h1 className=" text-center text-6xl font-mono text-white">Skill Set</h1>
  
         <div className="grid grid-cols-1 mt-5 h-auto gap-4 justify-items-center md:grid-cols-2 lg:grid-cols-3 ">   

<div className=" hover:scale-105 shadow-lg rounded-lg shadow-violet-900 flex justify-center items-center  border-violet-700  text-center  text-white text-5xl m border-2 w-48  h-28  md:w-60 "><DiJavascript1/></div>
<div className=" hover:scale-105 shadow-lg rounded-lg shadow-violet-900 flex justify-center items-center  border-violet-700  border-2 w-48  h-28  md:w-60 text-white text-5xl">< CgCPlusPlus/></div>
<div className=" hover:scale-105 shadow-lg rounded-lg shadow-violet-900 flex justify-center items-center  border-violet-700  border-2 w-48  h-28  md:w-60 text-white text-5xl">< DiNodejs/></div>
<div className=" hover:scale-105 shadow-lg rounded-lg shadow-violet-900 flex justify-center items-center  border-violet-700  border-2 text-white text-5xl w-48  h-28  md:w-60 ">  <DiReact/></div>
<div className=" hover:scale-105 shadow-lg rounded-lg shadow-violet-900 flex justify-center items-center  border-violet-700  border-2    text-white text-5xl w-48  h-28  md:w-60 "> <DiGit/></div>
<div className=" hover:scale-105 shadow-lg rounded-lg shadow-violet-900 flex justify-center items-center  border-violet-700  border-2 w-48  h-28  md:w-60 text-white text-5xl">< DiHtml5/></div>
<div className=" hover:scale-105 shadow-lg rounded-lg shadow-violet-900 flex justify-center items-center  border-violet-700  border-2 w-48  h-28  md:w-60 text-white text-5xl">< DiCss3Full/></div>
<div className=" hover:scale-105 shadow-lg rounded-lg shadow-violet-900 flex justify-center items-center  border-violet-700  border-2 w-48  h-28  md:w-60 text-white text-5xl">< DiVisualstudio/></div>
<div className=" hover:scale-105 shadow-lg rounded-lg shadow-violet-900 flex justify-center items-center  border-violet-700  border-2 w-48  h-28  md:w-60 text-white text-5xl">< DiLinux/></div>
<div className=" hover:scale-105 shadow-lg rounded-lg shadow-violet-900 flex justify-center items-center  border-violet-700  border-2 w-48  h-28  md:w-60 text-white text-5xl">< DiLinux/></div>
<div className=" hover:scale-105 shadow-lg rounded-lg shadow-violet-900 flex justify-center items-center  border-violet-700  border-2 w-48  h-28  md:w-60 text-white text-5xl">< SiSolidity/></div>
<div className=" hover:scale-105 shadow-lg rounded-lg shadow-violet-900 flex justify-center items-center  border-violet-700  border-2  w-48  h-28  md:w-60   text-white text-5xl">< SiTailwindcss/></div>



</div>

</div>

    )
}

