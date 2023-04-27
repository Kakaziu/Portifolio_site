import React, { useEffect, useState } from 'react'
import { AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai'
import './style.css'

const Contact = () =>{

  const [showIcon, setShowIcon] = useState(true)

  useEffect(() =>{
    if(window.innerWidth < 900){
      setShowIcon(false)
    }
  }, [])

  const [inputName, setInputName] = useState({ value: '', error: ''})
  const [inputSubject, setInputSubject] = useState({ value: '', error: ''})
  const [inputMessage, setInputMessage] = useState({ value: '', error: ''})

  function handleSubmit(e){
    validCamps(inputName.value, setInputName, 'Nome')
    validCamps(inputSubject.value, setInputSubject, 'Assunto')
    validCamps(inputMessage.value, setInputMessage, 'Mensagem')

    if(inputName.value && inputSubject.value && inputMessage.value){
      e.target.href = `mailto:kaua.borba03@gmail.com?subject=${inputSubject.value}&body=${inputMessage.value}`
    }
  }

  function validCamps(value, setFunc, camp){
    if(!value){
      setFunc({ value: '', error: `* O campo "${camp}" está vazio.` })
    }
  }

  return(
    <>
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='wave-3'><path fill="#433E3E" fill-opacity="1" d="M0,192L60,176C120,160,240,128,360,128C480,128,600,160,720,197.3C840,235,960,277,1080,256C1200,235,1320,149,1380,106.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
      <section id="contact">
        <div className='content-contact'>
          <form className='form'>
            <h2>Contato</h2>
            <div className='field'>
              <label>Nome:</label>
              <input type='text' onChange={(e) => setInputName({ value: e.target.value, error: '' })} value={inputName.value}/>
              <span>{inputName.error}</span>
            </div>
            <div className='field'>
              <label>Assunto:</label>
              <input type='text' onChange={(e) => setInputSubject({ value: e.target.value, error: '' })} value={inputSubject.value}/>
              <span>{inputSubject.error}</span>
            </div>
            <div className='field'>
              <label>Mensagem:</label>
              <textarea onChange={(e) => setInputMessage({ value: e.target.value, error: '' })} value={inputMessage.value}/>
              <span>{inputMessage.error}</span>
            </div>
            <div className='btns'>
              <a className='email-link' onClick={handleSubmit} style={{ cursor: 'pointer' }}>Enviar</a>
              <span>ou</span>
              <a href='https://wa.me/5521972462497' className='wpp-link'><AiOutlineWhatsApp className='icon-contact' size='22'/>Whatsapp</a>
            </div>
          </form>
          { showIcon ? <img src='./assets/images/email.png'></img>: <></> }
        </div>
      </section>
    </>
  )
}

export default Contact
