import styles from './Skills.module.css'
import SectionHeading from '../SectionHeading/SectionHeading'
import { skills } from '../../data/siteData'
import { useReveal } from '../../hooks/useReveal'

export default function Skills() {
    const revealRef = useReveal()

    return (
        <section id="skills" className="section" aria-label="Skills">
            <div className="container">
                <SectionHeading
                    index={2}
                    title="Skills"
                    subtitle="Tools and technologies I reach for most often."
                />
                <div ref={revealRef} className={`reveal ${styles.groups}`}>
                    {skills.map((group) => (
                        <div className={styles.group} key={group.category}>
                            <h3 className={styles.groupTitle}>{group.category}</h3>
                            <ul className={styles.pillList}>
                                {group.items.map((item) => (
                                    <li className={styles.pill} key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
