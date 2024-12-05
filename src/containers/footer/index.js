import Image from "next/image";

import logo from "@/assets/img/footer/pausa-white.svg"
import superficial from "@/assets/img/footer/made-by-superficial.svg"
import Link from "next/link";

const Footer = () => {

    return (
        <footer className="footer-wrapper">

            <div className="banner-wrapper gsapFadeIn">
                <Image src={logo} alt="Pausa" />
                <p>La puerta hacia la digitalizacón de la moda</p>
                <h4>¡Lleva tus ideas al siguiente nivel y haz que tu creatividad inspire al mundo!</h4>
            </div>

            <div className="bottom-wrapper gsapFadeIn">
                <p className="rights">INPATT. Todos los derechos reservados.</p>

                {/* <Link href={"/"} className="policy">Aviso de privacidad</Link> */}

                {/* <a href="https://superficial.design/" target="_blank" rel="noopener noreferrer" className="superficial">
                    <Image src={superficial} alt="Made by Superficial" />
                </a> */}
            </div>

        </footer>

    );
};

export default Footer;