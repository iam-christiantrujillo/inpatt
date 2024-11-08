import AboutCard from "@/components/card/AboutCard";

import lottie1 from "@/assets/lottie/Animacion1_2.json"
import lottie2 from "@/assets/lottie/Animacion2.json"
import lottie3 from "@/assets/lottie/Animacion3.json"

const AboutCards = () => {

    return (
        <div className="about-cards-wrapper">

            <div className="content-cards">
                <AboutCard
                    title={"Basic"}
                    description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "}
                    lottie={lottie1}
                    className={"card-wrapper-1"}
                />
                <AboutCard
                    title={"Team"}
                    description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "}
                    lottie={lottie2}
                    className={"card-wrapper-2"}
                />
                <AboutCard
                    title={"Company"}
                    description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "}
                    lottie={lottie3}
                    className={"card-wrapper-3"}
                />
            </div>

            {/* <DownloadBtn className={"gsapFadeIn"}/> */}

        </div>

    );
};

export default AboutCards;