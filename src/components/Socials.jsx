import { FaBehance, FaLinkedin, FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import { IoMailOutline } from 'react-icons/io5';

export default function Socials() {
    return (
        <div className="flex gap-8 text-2xl items-center">
            <a
                href="https://wa.me/5491100000000?text=Hola%20Clara!%20Me%20gustaría%20consultarte%20por%20un%20proyecto."
                className="hover:text-[#000000] transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
                title="Chat de WhatsApp"
            >
                <FaWhatsapp size={22} />
            </a>

            <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=mclaravisconti@gmail.com&su=Consulta desde Portfolio&body=Hola Clara,"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#000000] transition-colors duration-300"
                title="Enviar Email"
            >
                <IoMailOutline />
            </a>

            <a
                href="https://www.behance.net/mariaclaravisconti"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#000000] transition-colors duration-300"
                title="Behance"
            >
                <FaBehance />
            </a>
            <a href="https://www.linkedin.com/in/mariaclaravisconti" className="hover:text-[#000000] transition-colors duration-300" target="_blank"
                rel="noopener noreferrer" title="LinkedinW">

                <FaLinkedin />
            </a>

            {/* <a href="#" className="hover:text-[#00adb5] transition-colors duration-300" title="Facebook">
              <FaFacebookF size={20} /> 
            </a>  */}
        </div>
    );
}
