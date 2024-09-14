import React from 'react';
import About from "./components/about"
import Contact from "./components/contact"
import Hero from "./components/hero"
import Projects from "./components/projects"
import Resume from "./components/resume"
import Skills from "./components/skills"



const LandingPage = () => {
    return (
        <div>

            <Hero />
            <About />
            <Skills />
            <Resume />
            <Projects />
            <Contact />

        </div>
    )
}

export default LandingPage


