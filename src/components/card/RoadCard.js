import Image from "next/image";

import bg from "@/assets/img/about/road-bg.svg"
import calendar from "@/assets/img/about/calendar.svg"

const RoadCard = ({ heading, description, img, className }) => {

    return (
        <div className={`card-road-wrapper ${className ? className : null}`}>

            <div className="bg-wrapper">
                <Image src={bg} alt="Background Color"/>
            </div>

            <Image src={img} className="road-img" alt="Road Card Image" />

            <div className="content">
                <p className="heading">{heading}</p>

                <div className="days-wrapper">
                    {/* <Image src={calendar} className="icon" alt="Calendar"/> */}
                    <p>{description}</p>
                </div>

            </div>


        </div>

    );
};

export default RoadCard;