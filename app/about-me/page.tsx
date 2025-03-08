"use client"
import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import {SkillData} from '@/constants'
import Image from 'next/image'
import {Autoplay} from 'swiper/modules'

const Page = () => {
    return (
        <div
          style={{ backgroundImage: "url(/background.png)" }}
          className="gap-[5%] md:gap-[8%] h-screen w-screen flex flex-col items-center justify-center bg-cover bg-center pb-[5%] md:pb-[2%] mt-20 md:mt-4 overflow-y-auto"
        >
          {/* About Me Section */}
          <div className="flex flex-col gap-5 md:gap-[10px] max-w-[90%] md:max-w-[50vw] text-center items-center mt-24 md:mt-[220px] 2xl:mt-0">
            <h1 className="font-semibold text-white text-3xl sm:text-5xl md:text-[3vw]">
              Sobre mim
            </h1>
            <p className="text-gray-300 text-sm sm:text-lg md:text-[1.23vw]">
              O meu nome é Afonso, frequento o 2º ano da Licenciatura em Engenharia
              Informática na Universidade do Minho.
              Sou de Braga e desde muito pequeno que tenho um particular interesse
              em computadores e informática no geral. Interesso-me pelo desenvolvimento
              de sites tal como este, especialmente na parte de front-end, embora 
              back-end também me interesse.
            </p>
          </div>

          <div className="flex flex-col gap-5 md:gap-[10px] max-w-[90%] md:max-w-[50vw] text-center items-center">
            <h1 className="font-semibold text-white text-3xl sm:text-5xl md:text-[3vw]">
              Interesses específicos
            </h1>
            <p className="text-gray-300 text-sm sm:text-lg md:text-[1.23vw]">
              •Desenvolvimento do front-end de websites
              <br/>
              •Redes Informáticas
              <br/>
              •Cibersegurança
              <br/>
              •Videojogos
            </p>
          </div>
  
          {/* Skills & Technologies Section */}
          <div className="flex flex-col gap-5 md:gap-[40px] max-w-[90%] md:max-w-[50vw] text-center items-center mb-[160px] md:mb-12">
            <div className="flex flex-col items-center gap-1">
              <h1 className="font-semibold text-white text-3xl sm:text-5xl md:text-[3vw]">
                Competências{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                  {" "}
                  &{" "}
                </span>
                Tecnologias
              </h1>
              <p className="text-gray-300 text-sm sm:text-lg md:text-[1.23vw]">
                Usando as tecnologias mais capazes existentes no mercado
              </p>
            </div>
  
            {/* Swiper Carousel */}
            <Swiper
              slidesPerView={3} // Default for small screens
              loop={true}
              autoplay={{ delay: 0, disableOnInteraction: false }}
              speed={5000}
              modules={[Autoplay]}
              className="max-w-[90%] md:max-w-[68%] pb-[5%]"
              breakpoints={{
                640: { slidesPerView: 3 }, // For screens ≥ 640px
                1024: { slidesPerView: 5 }, // For screens ≥ 1024px
              }}
            >
              {SkillData.map((skill, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={skill.Image}
                    alt={skill.name}
                    width={skill.width}
                    height={skill.height}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
    );
  };
  
  export default Page;