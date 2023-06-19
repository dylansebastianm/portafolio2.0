import React from "react";
import "./Nav.css"
import { BsLinkedin, BsGithub} from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";




export default function Nav () {
    return (
        <div className="nav-component">
            <div className="links-container">
                <div className="rutas">
                    <p /* href="#" */ className="links"> 
                    Proyectos
                    </p>
                    < p /* href="#" */ className="links"> 
                    Habilidades
                    </p>
                </div>
                
                <div className="barrita">|</div>
                <div className="iconsNav">
                    <BsLinkedin/>
                    <BsGithub/>
                    <MdDarkMode/>
                </div>
            </div>          
       </div>
        
    )
}
