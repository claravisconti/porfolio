export default function Banner({ title, image }) {
  return (
    <section className="relative w-full h-[60vh] overflow-hidden flex flex-col justify-end">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        {/* Overlay sutil para legibilidad */}
        <div className="absolute inset-0 bg-black/20"></div> 
      </div>

      {/* Texto en el borde inferior */}
      <div className="relative z-10 w-full px-6 md:px-24 pb-0">
        <h1 className="text-white text-7xl md:text-[12rem] font-bold tracking-tighter leading-[0.8] text-center opacity-100 mb-[-0.1em]">
          {title}
        </h1>
      </div>
    </section>
  );
}