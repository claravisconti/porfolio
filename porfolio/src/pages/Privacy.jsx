export default function Privacy() {
  return (
    <div className="py-20 max-w-3xl mx-auto">
      <h1 className="text-content text-4xl font-black mb-8">Privacy Policy</h1>
      
      <div className="space-y-6 text-muted leading-relaxed">
        <section>
          <h2 className="text-content font-bold text-xl mb-2">1. Información General</h2>
          <p>
            Este sitio web es el portafolio profesional de <strong>Clara Visconti</strong>. 
            Mi objetivo es mostrar mis proyectos de diseño gráfico y facilitar el contacto con posibles clientes.
          </p>
        </section>

        <section>
          <h2 className="text-content font-bold text-xl mb-2">2. Datos que Recolectamos</h2>
          <p>
            No recolectamos datos personales de forma automática a menos que decidas contactarme vía email. 
            En ese caso, solo utilizaremos tu nombre y correo para responder a tu consulta.
          </p>
        </section>

        <section>
          <h2 className="text-content font-bold text-xl mb-2">3. Cookies</h2>
          <p>
            Este sitio puede utilizar cookies técnicas esenciales para el funcionamiento básico del navegador. 
            No utilizamos cookies de seguimiento publicitario de terceros.
          </p>
        </section>

        <section>
          <h2 className="text-content font-bold text-xl mb-2">4. Propiedad Intelectual</h2>
          <p>
            Todos los proyectos, imágenes y diseños mostrados en este sitio son propiedad de Clara Visconti 
            o de los clientes para los cuales fueron realizados, y están protegidos por leyes de derechos de autor.
          </p>
        </section>

        <p className="text-xs pt-10 border-t border-surface">
          Última actualización: Abril 2026.
        </p>
      </div>
    </div>
  );
}