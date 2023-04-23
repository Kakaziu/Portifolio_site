import React from "react";
import './style.css'

const Hero = () =>{
  return(
      <section id="home">
        <div className="hero">
          <div className="img-hero">
            <img src="./assets/images/myfoto.jpg" alt="myFoto"/>
          </div>
          <div className="content-hero">
            <h1>
              Olá!!
              <span>Me chamo Kauã</span>
              <span className="span-secondary">Desenvolvedor FullStack</span>
            </h1>
            <div className="icons">
              <img src="./assets/images/html-5.png" alt="tech-img"/>
              <img src="./assets/images/css-3.png" alt="tech-img"/>
              <img src="./assets/images/js.png" alt="tech-img"/>
              <img src="./assets/images/physics.png" alt="tech-img"/>
              <img src="./assets/images/redux.png" alt="tech-img"/>
              <img src="./assets/images/node-js.png" alt="tech-img"/>
              <img src="./assets/images/mysql.png" alt="tech-img"/>
          </div>
          <button>Entre em contato</button>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="wave"><path fill="#2b2828" fill-opacity="1" d="M0,288L60,250.7C120,213,240,139,360,117.3C480,96,600,128,720,165.3C840,203,960,245,1080,245.3C1200,245,1320,203,1380,181.3L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
      </section>
  )
}

export default Hero

