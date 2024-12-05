import AboutCard from "@/components/card/AboutCard";

import lottie1 from "@/assets/img/about/card1.png"
import lottie2 from "@/assets/img/about/card2.png"
import lottie3 from "@/assets/img/about/card3.png"

const AboutCards = () => {

    return (
        <div className="about-cards-wrapper">

            <div className="content-cards">
                <AboutCard
                    title={"¿Qué es INPATT?"}
                    description={"Somos una plataforma colaborativa para diseñadores de moda, que permite subir, compartir, y modificar patrones digitalizados en tiempo real, fomentando creatividad comunitaria."}
                    img={lottie1}
                    className={"card-wrapper-1"}
                />
                <AboutCard
                    title={"Relación entre diseño y tecnología"}
                    description={"Somos un equipo creativo que fusiona moda y tecnología para transformar procesos tradicionales. <br/> <br/> Ofrecemos herramientas digitales avanzadas, como digitalización de patrones y colaboración en tiempo real, para diseñar, modificar y compartir de manera ágil e innovadora."}
                    img={lottie2}
                    className={"card-wrapper-2"}
                />
                <AboutCard
                    title={"Tu Portafolio Digital"}
                    description={"Organiza y exhibe tus diseños de manera profesional. Crea un portafolio único donde puedes guardar, compartir y destacar tus patrones con clientes, colaboradores o tu comunidad creativa. ¡Haz que tu trabajo brille!"}
                    img={lottie3}
                    className={"card-wrapper-3"}
                />
            </div>

            {/* <DownloadBtn className={"gsapFadeIn"}/> */}

        </div>

    );
};

export default AboutCards;