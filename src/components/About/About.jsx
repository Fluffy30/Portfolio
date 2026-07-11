import styles from './About.module.css'
import SectionHeading from './SectionHeading/SectionHeading'
import {about} from '../../data/siteData'
import {useReveal} from '../../hooks/useReveal'

export default function About() {
    const revealRef = useReveal()

    return (
        section id="about" className={'section ${styles.about}'} aria-label="About me">
        <div className="container">
          <SectionHeading index={1} title="About me" />
            <div ref={revealRef} className={'reveal ${styles.grid}'}>
                <div className={styles.paragraphs}>
                    {about.paragraphs.map((para, i) => (
                        <p key={i}>{para}</p>
                ))}
                </div>
                <div className={styles.highlights}>
                    {about.highlights.map(h) => (
                        <div className={styles.highlightCard} key={h.label}>
                            <span className={styles.highlightLabel}>{h.label}</span>
                            <span className={styles.highlightValue}>{h.value}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
    )
}