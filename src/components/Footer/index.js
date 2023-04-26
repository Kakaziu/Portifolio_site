import React from "react";
import { AiOutlineDownload, AiOutlineWhatsApp, AiOutlineGithub, AiOutlineInstagram } from 'react-icons/ai'
import './style.css'

const Footer = () =>{
  return(
    <footer className="footer">
      <div className="info-area">
        <div className="info-me">
          <h2>Kauã Borba</h2>

          <p>Sou um desenvolvedor web autodidata, apaixonado por programação desde os 15 anos. Com 19 anos,
            tenho uma sólida bagagem de conhecimentos em programação e desenvolvimento web. Sou sempre
            atualizado com as novas tecnologias e tendências da área de tecnologia.</p>

            <a href="./assets/pdf/curriculo.pdf" className="btn-download" download>Download CV <AiOutlineDownload size='22' className="icon-download"/></a>
        </div>
        <div className="info-contact">
          <h2>Contato</h2>

          <ul>
            <li><strong>E-mail</strong>: <a href="mailto:kaua.borba03@gmail.com">kaua.borba03@gmail.com</a></li>
            <li><strong>Tel</strong>: <a href="tel:5521972462497">21 972462497</a></li>
            <li>Duque de caxias, RJ</li>
          </ul>
        </div>
        <div className="social-media">
          <h2>Redes sociais</h2>

          <div>
            <a href="https://github.com/Kakaziu"><AiOutlineGithub size='45' className="icon-footer github"/></a>
            <a href='https://wa.me/5521972462497'><AiOutlineWhatsApp size='45' className="icon-footer whats"/></a>
            <a href="https://www.instagram.com/kaua_kkz/"><AiOutlineInstagram size='45' className="icon-footer ig"/></a>
          </div>
        </div>
      </div>

      <div className="final">Kauã Borba</div>
    </footer>
  )
}

export default Footer
