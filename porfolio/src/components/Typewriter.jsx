import { useState, useEffect } from 'react';

export default function TypeWriter() {
  const [displayText, setDisplayText] = useState("");
  
  const line1 = "Our Creative Agency Is Always";
  const line2Part1 = "Ready for ";
  const line2Part2 = "New Projects.|"; 
  
  const fullContent = `${line1}\n${line2Part1}${line2Part2}`;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(fullContent.slice(0, index + 1));
      index++;
      if (index >= fullContent.length) clearInterval(interval);
    }, 50); 

    return () => clearInterval(interval);
  }, []);

  const renderText = () => {
    const lines = displayText.split('\n');
    
    return (
      <div className="w-full max-w-[95rem]"> 
        {/* Línea 1 */}
        <h2 className="text-6xl lg:text-[5.5rem] font-bold text-[#111] leading-[1] tracking-tighter text-left">
          {lines[0]}
        </h2>
        
        {/* Línea 2 con color TEAL */}
        {lines[1] !== undefined && (
          <h2 className="text-6xl lg:text-[5.5rem] font-bold text-[#111] leading-[1] tracking-tighter text-left">
            {lines[1].length <= line2Part1.length ? (
              lines[1]
            ) : (
              <>
                {line2Part1}
                <span className="text-[#00adb5]"> {/* Tu color Teal */}
                  {lines[1].slice(line2Part1.length)}
                </span>
              </>
            )}
          </h2>
        )}
      </div>
    );
  };

  return (
    /* hidden: oculto en móvil 📱
       md:flex: visible desde tablets/desktop 🖥️
       py-0: eliminamos padding vertical para que no ocupe espacio si está arriba/abajo de otra sección
    */
    <section className="hidden md:flex bg-white py-10 px-24 justify-start w-full overflow-hidden">
      {renderText()}
    </section>
  );
}