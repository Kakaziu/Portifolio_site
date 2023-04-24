import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import './style.css'
import HardSkills from "../HardSkills";
import SoftSkills from "../SoftSkills";

const Skills = () =>{
  return(
    <>

      <section id="skills">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="wave-2"><path fill="#2b2828" fill-opacity="1" d="M0,288L80,266.7C160,245,320,203,480,202.7C640,203,800,245,960,261.3C1120,277,1280,267,1360,261.3L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
      <HardSkills/>
      <SoftSkills/>
      </section>
    </>
  )
}

export default Skills
