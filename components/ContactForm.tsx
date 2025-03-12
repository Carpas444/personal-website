import React from 'react'

const ContactForm = () => {
  return (
    <form>
        <h2 className='text-3xl md:text-5xl font-bold mb-5 text-white'>Contacte-me</h2>
        <div className='mb-3 md:text-xl text-white'>
            Email: afonsocarpinteiro@gmail.com
        </div>
        <div className='mb-3 md:text-xl text-white'>
            Telefone: +351 936 816 *** - Por motivos de prevenção de scrapping, este número só se encontra disponível no meu CV
        </div>
        <div className='mb-3 md:text-xl text-white'>
          {"Faça "}
          <button>
            <a href="/myCV.pdf" download="AfonsoCarpinteiro_CV.pdf" className="mb-3 md:text-xl text-white underline">
              aqui
            </a>
          </button>
          {" o download do meu CV!"}
        </div>
    </form>
  )
}

export default ContactForm