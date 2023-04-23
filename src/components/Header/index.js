import React, { useState } from "react";
import './style.css'

const Header = () =>{

  const [onMoveTitle, setOnMoveTitle] = useState(false)
  const [headerMove, setHeaderMove] = useState(false)

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

        <nav className="nav">
          <ul>
            <li className="link-nav">Home</li>
            <li className="link-nav">Sobre</li>
            <li className="link-nav">Habilidades</li>
            <li className="link-nav">Projetos</li>
            <li className="link-nav">Contato</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
