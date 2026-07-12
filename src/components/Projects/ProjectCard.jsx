import styles from './Projects.module.css'
import { ExternalLinkIcon, GithubIcon } from '../Icons'

export default function ProjectCard({ project }) {
    return (
        <article className={styles.card}>
            <div className={styles.cardTop}>
                <h3 className={styles.title}>{project.title}</h3>
                {project.featured && <span className={styles.featuredTag}>Featured</span>}
            </div>

            <p className={styles.description}>{project.description}</p>

            <ul className={styles.tags} aria-label="Technologies used">
                {project.tags.map((tag) => (
                    <li className={styles.tag} key={tag}>{tag}</li>
                ))}
            </ul>

            <div className={styles.links}>
                {project.liveUrl && (
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                    >
                        Live demo <ExternalLinkIcon width={15} height={15} />
                    </a>
                )}
                {project.codeUrl && (
                    <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                    >
                        Code <GithubIcon width={15} height={15} />
                    </a>
                )}
            </div>
        </article>
    )
}
