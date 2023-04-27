import React, { useState } from "react";
import { AiOutlineMenu } from 'react-icons/ai'
import { Link } from "react-scroll";
import './style.css'

const Header = () =>{

  const [onMoveTitle, setOnMoveTitle] = useState(false)
  const [headerMove, setHeaderMove] = useState(false)
  const [showMenuMobile, setShowMenuMobile] = useState(false)

  window.addEventListener('scroll', () =>{
    if(window.scrollY > 180){
      setHeaderMove(true)
    }

    if(window.scrollY === 0){
      setHeaderMove(false)
    }
  })

  return(
    <header className={ headerMove ? 'header headerDown headerDownAni' : 'header'}>
      <div className="container">
        <div className="title">
          <span onMouseOver={() => setOnMoveTitle(true)} onMouseOut={() => setOnMoveTitle(false)}>
            <lord-icon
              src="https://cdn.lordicon.com/whttoese.json"
              trigger="morph"
              style={{width:'80px', height:'80px', cursor: 'pointer'}}
              >
          </lord-icon>
          </span>
          <h2 className={onMoveTitle ? 'moveTitleOn' : 'moveTitleOff'}>KB</h2>
        </div>

        <nav className={showMenuMobile ? 'nav nav-mobile-on' : 'nav nav-mobile-off'}>
          <ul>
            <Link to="home" spy={true} smooth={true} offset={0} duration={500} onClick={() => setShowMenuMobile(false)}><li className="link-nav">Home</li></Link>
            <Link to="about" spy={true} smooth={true} offset={-50} duration={500} onClick={() => setShowMenuMobile(false)}><li className="link-nav">Sobre</li></Link>
            <Link to="skills" spy={true} smooth={true} offset={-50} duration={500} onClick={() => setShowMenuMobile(false)}><li className="link-nav">Habilidades</li></Link>
            <Link to="projects" spy={true} smooth={true} offset={-50} duration={500} onClick={() => setShowMenuMobile(false)}><li className="link-nav">Projetos</li></Link>
            <Link to="contact" spy={true} smooth={true} offset={-50} duration={500} onClick={() => setShowMenuMobile(false)}><li className="link-nav">Contato</li></Link>
          </ul>
        </nav>
      </div>
      <AiOutlineMenu className="menu-mobile" size='40' onClick={() => setShowMenuMobile(!showMenuMobile)}/>
    </header>
  )
}

export default Header
