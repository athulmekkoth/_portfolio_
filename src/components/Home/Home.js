
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import cd  from '../images/home-main (1).svg'
import img from "../images/avatar.5852f40fbb38aa284829fa3fb7722225.svg"
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';


export default function Home() {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  return (
    <div className="App">
      
      <div className=" mt-16">
    <div  className=" h-96" >

            <div className="  text-white  ">
            <h1 className="pl-20 text-3xl md:flex font-semibold text-purple-600 md:text-5xl">
  Hi ,There <span className="animate-wave">👋🏻</span></h1>
 
    
  <h1 className=" text-center text-3xl whitespace-nowrap  md:text-7xl md:whitespace-nowrap lg:text-9xl mt-7" >I'm <span className=" text-violet-900 inline-block animate-pulse">ATHUL SURESH </span></h1>
  <div className= " mx-auto md:w-1/2 lg:w-1/3  ">
  <img className=""  src={cd} alt="img" /> 
  
  </div>
        </div >
     </div>
     
     <div className=" mt-32  w-100  tracking-wide ... sm:h-102 md:mx-10 lg:mt-96 ">
     <div className=" flex-[0.5]  text-center lg:text-justify text-white font-thin">
     <h1 className="  text-center text-4xl sm:text-6xl  ">LET ME<span className=" text-purple-600">INTRODUCE</span>  MYSELFF</h1>
    <p className="ml-5 inline-block text-xl sm:text-4xl">I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️</p>
    <p className="ml-5  text-xl sm:text-4xl">I am fluent in Languages like<span className=" text-purple-600">  C++, Javascript and Soldity.</span></p>

    <p className="ml-5 text-xl sm:text-4xl">My field of Interest's are building new <span className="text-purple-600"> Web Technologies </span> and <span className="text-purple-600">Blockchain Development </span></p>
  
     </div>
     <img  className=" relative top-3 mx-auto  w-36  hover:animate-pulse   lg:w-80 md:relative " src={img} alt="avatr" />
     </div>
     <div className="ct">
     <div className=" mt-20  text-white text-center h-32  ">
        <h1 className="sm:text-4xl">CONNECT WITH ME ON</h1>
        
        <ul className=" flex justify-center text-xl sm:text-2xl ">
            <li className="px-3  hover:text-violet-900  "><a
                  href="https://github.com/athulmekkoth"
                  target="_blank"
                  rel="noreferrer"
                  className=""
                >
                  <FaGithub/>
                </a>
                </li>
                <li className="px-3  hover:text-violet-900 "><a
                  href="https://twitter.com/athulmekkoth22"
                  target="_blank"
                  rel="noreferrer"
                  className=""
                >
                  <FaTwitter/>
                </a>
                </li>
                <li className="px-3  hover:text-violet-900 "><a
                  href="https://www.linkedin.com/in/athul-suresh-603b29187/"
                  target="_blank"
                  rel="noreferrer"
                  className=""
                >
                  <FaLinkedin/>
                </a>
                </li>
        </ul>
      
        
        

     </div>
     </div>
    </div>

       <Particles
      id="tsparticles"
      init={particlesInit}

      options={{
        "fullScreen": {
            "enable": true,
            "zIndex": -55
        },
        "particles": {
            "number": {
                "value": 10,
                "density": {
                    "enable": false,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#fff"
            },
            "shape": {
                "type": "star",
                "options": {
                    "sides": 5
                }
            },
            "opacity": {
                "value": 0.8,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 4,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "rotate": {
                "value": 0,
                "random": true,
                "direction": "clockwise",
                "animation": {
                    "enable": true,
                    "speed": 5,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 600,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 2
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": ["grab"]
                },
                "onclick": {
                    "enable": false,
                    "mode": "bubble"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true,
        "background": {
            "color": "black",
            "image": "",
            "position": "50% 50%",
            "repeat": "no-repeat",
            "size": "cover"
        }
    }}
    />
    </div>
  );
}
/*import React from "react";
import "./Home.css";
import cd  from '../images/home-main (1).svg'
import img from "../images/avatar.5852f40fbb38aa284829fa3fb7722225.svg"
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Home()
{
    return(

     

        <div className="bg-black mt-16">
    <div  className=" h-96" >

            <div className="  text-white  ">
            <h1 className="pl-20 text-3xl md:flex font-semibold text-purple-600 md:text-5xl">
  Hi ,There <span className="animate-wave">👋🏻</span></h1>
 
    
  <h1 className=" text-center text-3xl whitespace-nowrap  md:text-7xl md:whitespace-nowrap lg:text-9xl mt-7" >I'm <span className=" text-violet-900 inline-block animate-pulse">ATHUL SURESH </span></h1>
  <div className= " mx-auto md:w-1/2 lg:w-1/3  ">
  <img className=""  src={cd} alt="img" /> 
  
  </div>
        </div >
     </div>
     
     <div className=" mt-32  w-100  tracking-wide ... sm:h-102 md:mx-10 lg:mt-96 ">
     <div className=" flex-[0.5]  text-center lg:text-justify text-white font-thin">
     <h1 className="  text-center text-4xl sm:text-6xl  ">LET ME<span className=" text-purple-600">INTRODUCE</span>  MYSELFF</h1>
    <p className="ml-5 inline-block text-xl sm:text-4xl">I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️</p>
    <p className="ml-5  text-xl sm:text-4xl">I am fluent in Languages like<span className=" text-purple-600">  C++, Javascript and Soldity.</span></p>

    <p className="ml-5 text-xl sm:text-4xl">My field of Interest's are building new <span className="text-purple-600"> Web Technologies </span> and <span className="text-purple-600">Blockchain Development </span></p>
  
     </div>
     <img  className=" relative top-3 mx-auto  w-36  hover:animate-pulse   lg:w-80 md:relative " src={img} alt="avatr" />
     </div>
     <div className="ct">
     <div className=" mt-20  text-white text-center h-32  ">
        <h1 className="sm:text-4xl">CONNECT WITH ME ON</h1>
        
        <ul className=" flex justify-center text-xl sm:text-2xl ">
            <li className="px-3  hover:text-violet-900  "><a
                  href="https://github.com/athulmekkoth"
                  target="_blank"
                  rel="noreferrer"
                  className=""
                >
                  <FaGithub/>
                </a>
                </li>
                <li className="px-3  hover:text-violet-900 "><a
                  href="https://twitter.com/athulmekkoth22"
                  target="_blank"
                  rel="noreferrer"
                  className=""
                >
                  <FaTwitter/>
                </a>
                </li>
                <li className="px-3  hover:text-violet-900 "><a
                  href="https://www.linkedin.com/in/athul-suresh-603b29187/"
                  target="_blank"
                  rel="noreferrer"
                  className=""
                >
                  <FaLinkedin/>
                </a>
                </li>
        </ul>
      
        
        

     </div>
     </div>
    </div>
  
    
         
           
           
         
 

    )
}
*/