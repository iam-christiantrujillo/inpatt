import Image from "next/image";

import logo from "@/assets/img/footer/pausa-white.svg"
import superficial from "@/assets/img/footer/made-by-superficial.svg"
import Link from "next/link";

const Footer = () => {

    return (
        <footer className="footer-wrapper">

            <div className="banner-wrapper gsapFadeIn">
                <Image src={logo} alt="Pausa" />
                <p>INPATT es la puerta hacia la digitalizacón de la moda.</p>
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </h4>
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