import styles from './Experience.module.css'
import SectionHeading from '../SectionHeading/SectionHeading'
import { timeline } from '../../data/siteData'
import { useReveal } from '../../hooks/useReveal'

export default function Experience() {
    const revealRef = useReveal()

    return (
        <section id="experience" className={`section ${styles.experience}`} aria-label="Experience and education">
            <div className="container">
                <SectionHeading index={4} title="Experience & Education" />
                <ol ref={revealRef} className={`reveal ${styles.timeline}`}>
                    {timeline.map((item) => (
                        <li className={styles.item} key={item.id}>
                            <span className={styles.marker} aria-hidden="true" />
                            <div className={styles.itemHead}>
                                <h3 className={styles.itemTitle}>{item.title}</h3>
                                <span className={styles.itemPeriod}>{item.period}</span>
                            </div>
                            <p className={styles.itemOrg}>{item.org}</p>
                            <span className={styles.itemType}>{item.type === 'education' ? 'Education' : 'Work'}</span>
                            <p className={styles.itemDescription}>{item.description}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    )
}
