import Image from "next/image";

import pausa from "@/assets/img/button/pausa.svg"
import apple from "@/assets/img/button/apple.svg"

const DownloadBtn = ({className}) => {

    return (
        <div className={`download-btn-wrapper ${className ? className : null}`}>
            <div className="brand-logo">
                <Image src={pausa} alt="Pausa"/>
            </div>

            <div className="btn-wrapper">
                <a href="https://inpatt-app.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <button>
                        {/* <Image src={apple} alt="Apple"/> */}
                        <span>Crear cuenta</span>
                    </button>
                </a>
            </div>
        </div>

    );
};

export default DownloadBtn;