import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Importar estilos de Swiper
import 'swiper/css';

const TextSlider = () => {
  const words = ["Web", "UX", "UI", "Branding", "Marketing", ""];

  return (
    /* hidden en mobile, block en desktop para contener el Swiper */
    <div className="hidden md:block w-full py-20 bg-white overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        slidesPerView="auto"
        spaceBetween={100}
        speed={8000} // Velocidad del deslizamiento (más alto = más lento/suave)
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        allowTouchMove={false} // Evita que el usuario lo detenga manualmente
        className="infinite-swiper"
      >
        {words.map((word, index) => (
          <SwiperSlide key={index} className="!w-auto">
            <div className="group cursor-pointer relative">
              {/* SOLUCIÓN AL DELINEADO: 
                Un solo H2. El hover cambia el color y activa el stroke 
                exactamente sobre las mismas coordenadas.
              */}
              <h2 className="text-9xl font-bold uppercase tracking-tighter transition-all duration-500 
                             text-[#f0f0f0] 
                             group-hover:text-transparent"
                  style={{
                    // El stroke se define aquí para que no haya saltos de posición
                    WebkitTextStroke: '0px black' 
                  }}
              >
                {word}
              </h2>

              {/* Estilo local para inyectar el stroke solo en hover sin mover el texto */}
              <style jsx>{`
                .group:hover h2 {
                  -webkit-text-stroke: 1px black !important;
                }
                :global(.infinite-swiper .swiper-wrapper) {
                  transition-timing-function: linear !important;
                }
              `}</style>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TextSlider;