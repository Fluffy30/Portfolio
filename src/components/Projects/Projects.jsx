import styles from './Projects.module.css'
import SectionHeading from '../SectionHeading/SectionHeading'
import ProjectCard from './ProjectCard'
import { projects } from '../../data/siteData'
import { useReveal } from '../../hooks/useReveal'

export default function Projects() {
    const revealRef = useReveal()

    return (
        <section id="projects" className="section" aria-label="Projects">
            <div className="container">
                <SectionHeading
                    index={3}
                    title="Projects"
                    subtitle="A selection of things I've built, from side projects to a capstone."
                />
                <div ref={revealRef} className={`reveal ${styles.grid}`}>
                    {projects.map((project) => (
                        <ProjectCard project={project} key={project.id} />
                    ))}
                </div>
            </div>
        </section>
    )
}
