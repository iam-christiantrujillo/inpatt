import Image from "next/image";

import spiral from "@/assets/img/hero/spiral.svg"

const Hero = () => {

    return (
        <div className="hero-wrapper">

            <div className="content">
                <h1 className="wordsUpHero">INPATT</h1>
                <div className="content-des gsapFadeInHero">
                    <p className="primary-text">El espacio perfecto para tus patrones</p>
                    {/* <p className="secondary-text">Comunidad de diseñadores</p> */}
                </div>
            </div>

            <Image src={spiral} className="spiral" alt="Spiral" />
        </div>

    );
};

export default Hero;