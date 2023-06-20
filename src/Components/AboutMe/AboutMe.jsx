import React from "react";
import "./AboutMe.css"
import { BsLinkedin, BsGithub} from "react-icons/bs";
import {SiGmail} from "react-icons/si"

import image from "./fotasa.jpg"
import cv from "../Documents/Dylan Marcote ES.pdf"


export default function AboutMe () {

  
    return (
        <div className="AboutMe-component">
            <div className="name-tittle-button-contact">
            <div className="name-tittle-container">
                <h1 className="name">Dylan Sebastian Marcote</h1>
                <h3 className="tittle">Full Stack Developer</h3>
            </div>
             <a href={cv} download={cv}><div className="button-cv-Aboutme">Descargar CV</div></a>
             <div className="icons-aboutMe">

                <a href="https://www.linkedin.com/in/dylan-sebastian-03706316b/" className="icons-redes"><BsLinkedin/></a>
                <a href="https://github.com/dylansebastianm?tab=repositories" className="icons-redes"><div className="git"><BsGithub/></div></a>
                <a href="https://mail.google.com/mail/?view=cm&to=dyla.sebastianmte@gmail.com" target="_blank" className="icons-redes"><SiGmail/></a>
 
            </div>
            </div>

            <img 
            src={image}
            className="img-profile"
            ></img>
            

       </div>
        
    )
}
