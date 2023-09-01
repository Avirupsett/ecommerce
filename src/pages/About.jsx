import React from "react";
import { Link } from "react-router-dom";

const About = () =>{
    return(
        <>
            <section id="about">
                <h2>ABout Page</h2>
                <Link to="login">Login</Link>
            </section>
        </>
    )
}



export default About;