import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { GiSmartphone } from 'react-icons/gi'
import { AiOutlineGlobal, AiFillHtml5,  } from 'react-icons/ai'
import { IoLogoJavascript, IoLogoNodejs } from 'react-icons/io'
import { DiCss3Full, DiReact } from 'react-icons/di'
import { SiRedux, SiExpress, SiSocketdotio, SiMongodb, SiMysql, SiMariadb} from 'react-icons/si'
import { TbCircleLetterB } from 'react-icons/tb'
import { BiPaint } from 'react-icons/bi'
import { BsGit, BsGithub } from 'react-icons/bs'
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
import './style.css'

const Skills = () =>{
  return(
    <>

      <section id="skills">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="wave-2"><path fill="#2b2828" fill-opacity="1" d="M0,288L80,266.7C160,245,320,203,480,202.7C640,203,800,245,960,261.3C1120,277,1280,267,1360,261.3L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
        <div className="hard-skills">
          <h2>Hard Skills</h2>

          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Navigation, Autoplay]}
            loop={true}
            className="carousel-1"
          >

            <SwiperSlide className="skill">
              <GiSmartphone size='100'/>
              <span>Responsive Design</span>
            </SwiperSlide>
            <SwiperSlide className="skill">
              <AiOutlineGlobal size='100'/>
              <span>Internet</span>
            </SwiperSlide>
            <SwiperSlide className="skill">
              <AiFillHtml5 size='100'/>
              <span>HTML</span>
            </SwiperSlide>
            <SwiperSlide className="skill">
              <DiCss3Full size='100'/>
              <span>CSS</span>
            </SwiperSlide>
            <SwiperSlide className="skill">
              <IoLogoJavascript size='100'/>
              <span>Javascript</span>
            </SwiperSlide>
            <SwiperSlide className="skill">
              <BsGit size='100'/>
              <span>Git</span>
            </SwiperSlide>
            <SwiperSlide className="skill">
              <BsGithub size='100'/>
              <span>GitHub</span>
            </SwiperSlide>
            <SwiperSlide className="skill">
              <DiReact size='100'/>
              <span>React</span>
            </SwiperSlide>
            <SwiperSlide className="skill">
              <SiRedux size='100'/>
              <span>Redux</span>
            </SwiperSlide>
            <SwiperSlide className="skill">
              <BiPaint size='100'/>
              <span>Emotion</span>
            </SwiperSlide>
            <SwiperSlide className="skill">
              <TbCircleLetterB size='100'/>
              <span>Boostrap</span>
            </SwiperSlide>
            <SwiperSlide className="skill">
              <IoLogoNodejs size='100'/>
              <span>NodeJS</span>
            </SwiperSlide>
            <SwiperSlide className="skill">
              <SiExpress size='100'/>
              <span>ExpressJs</span>
            </SwiperSlide>
            <SwiperSlide className="skill">
              <SiSocketdotio size='100'/>
              <span>SocketIO</span>
            </SwiperSlide>
            <SwiperSlide className="skill">
              <SiMongodb size='100'/>
              <span>MongoDB</span>
            </SwiperSlide>
            <SwiperSlide className="skill">
              <SiMysql size='100'/>
              <span>MySql</span>
            </SwiperSlide>
            <SwiperSlide className="skill">
              <SiMariadb size='100'/>
              <span>MariaDB</span>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  )
}

export default Skills
