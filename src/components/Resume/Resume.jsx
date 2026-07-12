import styles from './Resume.module.css'
import SectionHeading from '../SectionHeading/SectionHeading'
import { profile } from '../../data/siteData'
import { DownloadIcon } from '../Icons'
import { useReveal } from '../../hooks/useReveal'

export default function Resume() {
    const revealRef = useReveal()

    return (
        <section id="resume" className="section" aria-label="Resume">
            <div className="container">
                <SectionHeading index={5} title="Resume" />
                <div ref={revealRef} className={`reveal ${styles.card}`}>
                    <div className={styles.text}>
                        <h3>Want the full picture?</h3>
                        <p>Download my resume for a complete breakdown of my education, experience, and skills.</p>
                    </div>
                    <a href={profile.resumeUrl} download className={styles.btn}>
                        Download resume <DownloadIcon width={16} height={16} />
                    </a>
                </div>
            </div>
        </section>
    )
}
