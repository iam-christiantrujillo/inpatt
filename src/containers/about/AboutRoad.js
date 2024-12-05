import DownloadBtn from "@/components/button/DownloadBtn";
import Image from "next/image";

import users from "@/assets/img/about/users.png"

import road1 from "@/assets/img/about/plan1.png"
import road2 from "@/assets/img/about/plan2.png"
import road3 from "@/assets/img/about/plan3.png"

import RoadCard from "@/components/card/RoadCard";

const AboutRoad = () => {

    return (
        <div className="about-road-wrapper">

            <div className="content gsapFadeIn">
                <h3>Planes Flexibles para Cada Necesidad</h3>

                <p>Desde diseñadores independientes hasta equipos y grandes empresas, tenemos un plan para ti.</p>

                <div className="users-wrapper">
                    <Image src={users} alt="Users" />
                    <p>Regístrate y encuentra aliados.</p>
                </div>

                <DownloadBtn />
            </div>

            <div className="cards-road-wrapper parallax-wrapper">
                <RoadCard
                    heading={"Organizar y comparte"}
                    description={"Individual"}
                    img={road1}
                    className={"card-1 parallax"}
                />

                <RoadCard
                    heading={"Trabajos colaborativos"}
                    description={"Equipo"}
                    img={road2}
                    className={"card-2 parallax-reverse"}
                />

                <RoadCard
                    heading={"Gestionar equipos y accesos"}
                    description={"Empresa"}
                    img={road3}
                    className={"card-3 parallax"}
                />
            </div>

        </div>

    );
};

export default AboutRoad;