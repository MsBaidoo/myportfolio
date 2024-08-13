import About from "./components/about"
import Contact from "./components/contact"
import Hero from "./components/hero"
import Resume from "./components/resume"
import Skills from "./components/skills"



const LandingPage = () => {
    return (
        <div>

            <Hero/>
            <About/>
            <Skills/>
            <Resume/>
            <Contact/>
        </div>
    )
}

export default LandingPage


