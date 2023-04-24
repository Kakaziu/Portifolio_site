import React from "react";
import { GiBrain } from 'react-icons/gi'
import { AiOutlineStock } from 'react-icons/ai'
import { BsEmojiSunglasses, BsPeople, BsPersonWorkspace } from 'react-icons/bs'
import { SlOrganization} from 'react-icons/sl'
import { GiTalk } from 'react-icons/gi'
import { TbGoGame } from 'react-icons/tb'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import './style.css'

const SoftSkills = () =>{
  return(
    <div className="soft-skills">
      <h2>SoftSkills</h2>

      <Swiper
        dir="rtl"
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
            <GiBrain size='100'/>
            <span>Autodidata</span>
          </SwiperSlide>
          <SwiperSlide className="skill">
            <BsEmojiSunglasses size='100'/>
            <span>Confiante</span>
          </SwiperSlide>
          <SwiperSlide className="skill">
            <GiTalk size='100'/>
            <span>Comunicativo</span>
          </SwiperSlide>
          <SwiperSlide className="skill">
            <TbGoGame size='100'/>
            <span>Resolução de problemas</span>
          </SwiperSlide>
          <SwiperSlide className="skill">
            <SlOrganization size='100'/>
            <span>Organizado</span>
          </SwiperSlide>
          <SwiperSlide className="skill">
            <BsPeople size='100'/>
            <span>Empático</span>
          </SwiperSlide>
          <SwiperSlide className="skill">
            <BsPersonWorkspace size='100'/>
            <span>Flexibilidade</span>
          </SwiperSlide>
          <SwiperSlide className="skill">
            <AiOutlineStock size='100'/>
            <span>Pensamento crítico</span>
          </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default SoftSkills
