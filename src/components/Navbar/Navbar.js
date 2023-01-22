import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const click=()=>{
    setNavbar(!navbar)

  }

 const [width, setWidth] = React.useState(window.innerWidth);
 const breakpoint = 789;
 React.useEffect(() => {
  const handleResizeWindow = () => setWidth(window.innerWidth);
   // subscribe to window resize event "onComponentDidMount"
   window.addEventListener("resize", handleResizeWindow);
   return () => {
     // unsubscribe "onComponentDestroy"
     window.removeEventListener("resize", handleResizeWindow);
   };
 }, []);
 if (width > breakpoint) {
   
     return (
       <nav className="">
        
        <div className=" text-gray-400 flex justify-between py-12 px-11">
   
          <Link className=" text-6xl text-white" to='/'>AS</Link>
       
         
        <ul className="flex text-2xl text-white flex-row">  
        <Link className=" hover:text-violet-900 px-8 py-3 hover: via-violet-900  "to='/'> Home</Link>
        <Link  className="hover:text-violet-900 px-8 py-3 hover: via-violet-900 "to='/projects'>Projects</Link>
        <Link className="hover:text-violet-900  px-8 py-3 hover: via-violet-900 "to='/about'>Resume</Link>
        <Link className="hover:text-violet-900  px-8 py-3 hover: via-violet-900 " to='/about'>About</Link>
        <Link className="hover:text-violet-900  px-8 py-3 hover: via-violet-900 " to='/contactme'>Contact Me</Link>
   
        </ul>  
     
        </div>
      
            </nav>
 
     
   );
 }
 return (
  <nav className="sticky top-0  z-10  bg-violet-900">
    <div >

   <div className="flex justify-between py-12 px-5"> 

         <h1 className="text-6xl text-white">AS</h1>
         <div className="   text-white text-2xl  lg:hidden">
<i onClick={click} className={navbar===false ? "fas fa-bars" :"fas fa-times"}></i>
</div >
</div>
 
 

<div className="">
<ul className={navbar===true  ?" text-left text-white  z-10 flex flex-col  " :"hidden"}>  
  <Link className="  px-8 py-3" to='/'> Home</Link>
  <Link  className="px-8 py-3"to='/projects'>Projects</Link>
  <Link className=" px-8 py-3"to='/about'>Resume</Link>
  <Link className=" px-8 py-3"to='/about'>About</Link>

  </ul> 
  </div>
 

  </div>

  </nav>
   
 );
}
  