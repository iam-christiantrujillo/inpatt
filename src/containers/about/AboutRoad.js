import DownloadBtn from "@/components/button/DownloadBtn";
import Image from "next/image";

import users from "@/assets/img/about/users.png"

import road1 from "@/assets/img/about/road1.png"
import road2 from "@/assets/img/about/road2.png"
import road3 from "@/assets/img/about/road3.png"

import RoadCard from "@/components/card/RoadCard";

const AboutRoad = () => {

    return (
        <div className="about-road-wrapper">

            <div className="content gsapFadeIn">
                <h3>Encuentra aliados
                    en tu camino</h3>

                <p>Únete a los más de 3 millones de usuarios que están
                    cambiando sus marcas con nuestra herramienta.</p>

                <div className="users-wrapper">
                    <Image src={users} alt="Users" />
                    <p>Regístrate y encuentra aliados.</p>
                </div>

                <DownloadBtn />
            </div>

            <div className="cards-road-wrapper parallax-wrapper">
                <RoadCard
                    heading={"Respiración resonante"}
                    description={"71 días de racha"}
                    img={road1}
                    className={"card-1 parallax"}
                />

                <RoadCard
                    heading={"Respiración cuadrada"}
                    description={"13 días de racha"}
                    img={road2}
                    className={"card-2 parallax-reverse"}
                />

                <RoadCard
                    heading={"Respiración Método Wim Hof"}
                    description={"121 días de racha"}
                    img={road3}
                    className={"card-3 parallax"}
                />
            </div>

        </div>

    );
};

export default AboutRoad;