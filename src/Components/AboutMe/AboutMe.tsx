import React from "react";
import "./AboutMe.css"
import { BsLinkedin, BsGithub} from "react-icons/bs";

import image from "./fotasa.jpg"



export default function AboutMe () {
    return (
        <div className="AboutMe-component">
            <div className="name-tittle-button-contact">
            <div className="name-tittle-container">
                <h1 className="name">Dylan Sebastian Marcote</h1>
                <h3 className="tittle">Full Stack Developer</h3>
            </div>
            <div className="button-cv-Aboutme">Descargar CV</div>
            <div className="icons-aboutMe">
                <BsLinkedin/>
                <div className="git"><BsGithub/></div>
            </div>
            </div>

            <img 
            src={image}
            className="img-profile"
            ></img>
            

       </div>
        
    )
}
