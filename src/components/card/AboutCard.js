// import road1 from "@/assets/img/about/road1.png"
import Image from "next/image";

const AboutCard = ({ title, description, img, className }) => {

    return (
        <div className={`card-about-wrapper ${className ? className : null}`}>

            <div className="content">
                <h3 dangerouslySetInnerHTML={{__html: title}}/>
                <p dangerouslySetInnerHTML={{__html: description}}/>
            </div>

            <div className="lottie-wrapper">
                <Image src={img} alt="Image"/>
            </div>


        </div>

    );
};

export default AboutCard;