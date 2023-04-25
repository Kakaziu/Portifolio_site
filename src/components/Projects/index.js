import React from "react";
import { RiComputerFill } from 'react-icons/ri'
import { AiFillGithub } from 'react-icons/ai'
import './style.css'

const Projects = () =>{



  function handleDoubleClick(e){
    const project = e.target
    const contentProject = project.nextElementSibling.nextElementSibling

    if(contentProject){
      contentProject.style.top = '0%'

      if(project.className === 'overlay'){
        project.innerHTML = ''
      }
    }
  }

  return(
    <section id="projects">
      <hr></hr>
      <h2>Projetos</h2>

      <div className="projects-area">
        <div className="project" onDoubleClick={handleDoubleClick}>
          <div className="overlay">Clique duas vezes</div>
          <img src="./assets/images/financas.jpg" alt="img-project"/>
          <div className="content-project">
            <div>
              <h3>MyFinances</h3>
              <p>Uma aplicação para controle financeiro criado com ReactJs e Redux no frontend, NodeJs no backend e MongoDB como banco de dados.</p>
            </div>

            <div className="btns-project">
              <a className="website-btn" href="#">Visitar <RiComputerFill size='20' className="icon-btn-project"/></a>
              <a className="repo-btn" href="#">Repositório <AiFillGithub size='20' className="icon-btn-project"/></a>
            </div>
          </div>
        </div>
        <div className="project" onDoubleClick={handleDoubleClick}>
          <div className="overlay">Clique duas vezes</div>
          <img src="./assets/images/blog.jpg" alt="img-project"/>
          <div className="content-project">
            <div>
              <h3>BlogApp</h3>
              <p>Uma aplicação que simula os dois lados de um blog, tanto o do leitor, como o do autor. Feita com ReactJs e Redux no frontend, NodeJs pro backend e MariaDB como banco de dados.</p>
            </div>

            <div className="btns-project">
              <a className="website-btn" href="#">Visitar <RiComputerFill size='20' className="icon-btn-project"/></a>
              <a className="repo-btn" href="#">Repositório <AiFillGithub size='20' className="icon-btn-project"/></a>
            </div>
          </div>
        </div>
        <div className="project" onDoubleClick={handleDoubleClick}>
          <div className="overlay">Clique duas vezes</div>
          <img src="./assets/images/agenda.webp" alt="img-project"/>
          <div className="content-project">
            <div>
              <h3>Agenda</h3>
              <p>Uma aplicação CRUD que simula uma agenda de contatos. Feita com ReactJs e contextAPI no frontend, NodeJs no backend e MongoDB no banco de dados.</p>
            </div>

            <div className="btns-project">
              <a className="website-btn" href="#">Visitar <RiComputerFill size='20' className="icon-btn-project"/></a>
              <a className="repo-btn" href="#">Repositório <AiFillGithub size='20' className="icon-btn-project"/></a>
            </div>
          </div>
        </div>
        <div className="project" onDoubleClick={handleDoubleClick}>
          <div className="overlay">Clique duas vezes</div>
          <img src="./assets/images/consult.png" alt="img-project"/>
          <div className="content-project">
            <div>
              <h3>Consult</h3>
              <p>Um site institucional que fiz simulando uma empresa de serviços terceirizados. Feito com HTML, CSS, JS.</p>
            </div>

            <div className="btns-project">
              <a className="website-btn" href="#">Visitar <RiComputerFill size='20' className="icon-btn-project"/></a>
              <a className="repo-btn" href="#">Repositório <AiFillGithub size='20' className="icon-btn-project"/></a>
            </div>
          </div>
        </div>
        <div className="project" onDoubleClick={handleDoubleClick}>
          <div className="overlay">Clique duas vezes</div>
          <img src="./assets/images/store-web.png" alt="img-project"/>
          <div className="content-project">
            <div>
              <h3>E-kicky</h3>
              <p>Um site no estilo de MarketPlace onde crio uma loja virtual de games, Feita com ReactJs e contextAPI no frontend e NodeJs no backend.</p>
            </div>

            <div className="btns-project">
              <a className="website-btn" href="#">Visitar <RiComputerFill size='20' className="icon-btn-project"/></a>
              <a className="repo-btn" href="#">Repositório <AiFillGithub size='20' className="icon-btn-project"/></a>
            </div>
          </div>
        </div>
        <div className="project" onDoubleClick={handleDoubleClick}>
          <div className="overlay">Clique duas vezes</div>
          <img src="./assets/images/livro.jpeg" alt="img-project"/>
          <div className="content-project">
            <div>
              <h3>Book Finder</h3>
              <p>Uma aplicação que se comunica com API do Google Books para trazer os livros pesquisados a tela, Feita com ReactJs.</p>
            </div>

            <div className="btns-project">
              <a className="website-btn" href="#">Visitar <RiComputerFill size='20' className="icon-btn-project"/></a>
              <a className="repo-btn" href="#">Repositório <AiFillGithub size='20' className="icon-btn-project"/></a>
            </div>
          </div>
        </div>
        <div className="project" onDoubleClick={handleDoubleClick}>
          <div className="overlay">Clique duas vezes</div>
          <img src="./assets/images/music.webp" alt="img-project"/>
          <div className="content-project">
            <div>
              <h3>Music Player</h3>
              <p>Uma aplicação onde simulo um player de música com inspiração nas cores do spotify. Feito com HTML, CSS, JS.</p>
            </div>

            <div className="btns-project">
              <a className="website-btn" href="#">Visitar <RiComputerFill size='20' className="icon-btn-project"/></a>
              <a className="repo-btn" href="#">Repositório <AiFillGithub size='20' className="icon-btn-project"/></a>
            </div>
          </div>
        </div>
        <div className="project" onDoubleClick={handleDoubleClick}>
          <div className="overlay">Clique duas vezes</div>
          <img src="./assets/images/todp.jpg" alt="img-project"/>
          <div className="content-project">
            <div>
              <h3>TodoList</h3>
              <p>Uma clássica lista de tarefas para anotações do dia a dia.  Feita com ReactJs no frontend, NodeJs no backend e MongoDB no banco de dados.</p>
            </div>

            <div className="btns-project">
              <a className="website-btn" href="#">Visitar <RiComputerFill size='20' className="icon-btn-project"/></a>
              <a className="repo-btn" href="#">Repositório <AiFillGithub size='20' className="icon-btn-project"/></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
