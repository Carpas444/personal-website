import ContactForm from '@/components/ContactForm'
import React from 'react'

const Page = () => {
  return (
    <div className='w-screen h-screen bg-cover bg-center flex items-center justify-center' style={{backgroundImage: "url(/background.png)"}}>
      <div className='h-[60%] w-[80%] relative bg-cover bg-center rounded-xl border border-white overflow-y-auto mb-[11%] md:mb-[0%]' style={{backgroundImage: "url(/potenBG.jpeg)"}}>
        <div className='absolute left-10 md:left-20 bottom-10 md:bottom-16 w-[70%] md:w-[30%]'>
          <ContactForm/>
        </div>
      </div>
    </div>
  )
}

export default Page