import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Experience from './components/Experience/Experience'
import Resume from './components/Resume/Resume'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

export default function App() {
    return (
        <>
            <a href="#main-content" className="skip-link">Skip to main content</a>
            <Navbar />
            <main id="main-content">
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Resume />
                <Contact />
            </main>
            <Footer />
        </>
    )
}
