import React from 'react'

const ContactForm = () => {
  return (
    <form>
        <h2 className='text-3xl md:text-5xl font-bold mb-5 text-white'>Contact Me</h2>
        <div className='mb-3 md:text-xl text-white'>
            Email: afonsocarpinteiro@gmail.com
        </div>
        <div className='mb-3 md:text-xl text-white'>
            Telefone: +351 936 816 953
        </div>
    </form>
  )
}

export default ContactForm