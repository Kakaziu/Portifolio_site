import React from "react";
import { AiOutlineDownload } from 'react-icons/ai'
import './style.css'

const About = () =>{
  return(
    <section id="about">
      <lord-icon
        src="https://cdn.lordicon.com/qhgmphtg.json"
        trigger="loop"
        delay={2000}
        style={{width:'450px', height:'450px'}}>
      </lord-icon>

      <div className="content-about">
        <h3>Um resumo sobre mim</h3>
        <p>Sou um desenvolvedor web apaixonado por programação. Desde cedo, sempre fui curioso e
          interessado por tecnologia, e comecei a estudar programação por conta própria aos 15 anos. Até hoje sou autodidata e adquiro meus conhecimentos por conta própria.<br></br><br></br>
          Hoje, aos 19 anos, já tenho uma sólida bagagem de conhecimentos em programação e desenvolvimento web.
          Sou muito comunicativo e adoro aprender coisas novas, e isso me motiva a estar sempre atualizado
          sobre as novas tecnologias e tendências da área de tecnologia.</p>

          <a className="btn-download">Download CV <AiOutlineDownload size='22' className="icon-download"/></a>
      </div>
    </section>
  )
}

export default About
