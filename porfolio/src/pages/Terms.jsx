export default function Terms() {
  return (
    <div className="py-20 max-w-3xl mx-auto">
      <h1 className="text-content text-4xl font-black mb-8 italic uppercase tracking-tighter">
        Terms <span className="text-accent">&</span> Conditions
      </h1>
      
      <div className="space-y-8 text-muted leading-relaxed">
        <section>
          <h2 className="text-content font-bold text-lg mb-2 uppercase tracking-widest">1. Uso del Sitio</h2>
          <p>
            Al acceder a este sitio web, aceptas cumplir con estos términos. Este espacio ha sido creado para 
            exhibir el trabajo creativo de <strong>Clara Visconti</strong> y proporcionar información sobre sus servicios.
          </p>
        </section>

        <section>
          <h2 className="text-content font-bold text-lg mb-2 uppercase tracking-widest">2. Propiedad Intelectual</h2>
          <p>
            Todo el contenido visual, logotipos, textos e imágenes son propiedad exclusiva de la autora, 
            a menos que se indique lo contrario. Queda prohibida la reproducción, distribución o uso comercial 
            de cualquier material sin autorización previa por escrito.
          </p>
        </section>

        <section>
          <h2 className="text-content font-bold text-lg mb-2 uppercase tracking-widest">3. Limitación de Responsabilidad</h2>
          <p>
            Aunque nos esforzamos por mantener la información actualizada, no garantizamos que el sitio 
            esté libre de errores o que el acceso sea ininterrumpido. El uso del sitio es bajo tu propia cuenta y riesgo.
          </p>
        </section>

        <section>
          <h2 className="text-content font-bold text-lg mb-2 uppercase tracking-widest">4. Enlaces a Terceros</h2>
          <p>
            Este sitio puede contener enlaces a redes sociales o sitios externos. No somos responsables 
            del contenido o las políticas de privacidad de dichos sitios.
          </p>
        </section>

        <p className="text-xs pt-10 border-t border-surface italic">
          Copyright © {new Date().getFullYear()} Clara Visconti. All rights reserved.
        </p>
      </div>
    </div>
  );
}