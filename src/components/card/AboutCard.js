import road1 from "@/assets/img/about/road1.png"
import Image from "next/image";

const AboutCard = ({ title, description, lottie, className }) => {

    return (
        <div className={`card-about-wrapper ${className ? className : null}`}>

            <div className="content">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>

            <div className="lottie-wrapper">
                <Image src={road1} alt="Image"/>
            </div>


        </div>

    );
};

export default AboutCard;