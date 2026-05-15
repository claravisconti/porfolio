import { FaBehance, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { IoMailOutline } from 'react-icons/io5';

export default function Socials() {

    // Función genérica para trackear clics en redes sociales
    const trackSocialClick = (platform) => {
        if (window.gtag) {
            window.gtag('event', 'click_social', {
                'social_platform': platform
            });
        }
    };

    return (
        <div className="flex gap-8 text-2xl items-center">
            <a
                href="https://wa.me/5491124851989?text=Hola%20Clara!%20Me%20gustaría%20consultarte%20por%20un%20proyecto."
                className="hover:text-[#000000] transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
                title="Chat de WhatsApp"
                onClick={() => trackSocialClick('WhatsApp')} // <--- Tracking
            >
                <FaWhatsapp size={22} />
            </a>

            <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=mclaravisconti@gmail.com&su=Consulta desde Portfolio&body=Hola Clara,"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#000000] transition-colors duration-300"
                title="Enviar Email"
                onClick={() => trackSocialClick('Email')} // <--- Tracking
            >
                <IoMailOutline />
            </a>

            <a
                href="https://www.behance.net/mariaclaravisconti"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#000000] transition-colors duration-300"
                title="Behance"
                onClick={() => trackSocialClick('Behance')} // <--- Tracking
            >
                <FaBehance />
            </a>

            <a
                href="https://www.linkedin.com/in/mariaclaravisconti"
                className="hover:text-[#000000] transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
                title="Linkedin"
                onClick={() => trackSocialClick('LinkedIn')} // <--- Tracking
            >
                <FaLinkedin />
            </a>
        </div>
    );
}