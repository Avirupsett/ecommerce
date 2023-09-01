
import React from "react";
import { Link, Outlet } from "react-router-dom";

const About = () =>{
    return(
        <>
            <section id="about">
                <h2>ABout Page</h2>
                <Link to="login">Login</Link>
                <Outlet />
            </section>
        </>
    )
}



export default About;