import React, { useState } from "react";
import './style.css'

const Header = () =>{

  const [onMoveTitle, setOnMoveTitle] = useState(false)

  return(
    <header className="header">
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
            <li>Home</li>
            <li>Sobre</li>
            <li>Habilidades</li>
            <li>Projetos</li>
            <li>Contato</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
