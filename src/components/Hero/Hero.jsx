import styles from './Hero.module.css'
import { profile } from '../../data/siteData'
import { ArrowDownIcon, MailIcon } from '../Icons'
import { useReveal } from '../../hooks/useReveal'

export default function Hero() {
    const revealRef = useReveal()

    return (
        <section id="home" className={styles.hero} aria-label="Introduction">
            <div className={`container ${styles.grid}`}>
                <div ref={revealRef} className="reveal">
                    {profile.availableForWork && (
                        <span className={styles.badge}>
              <span className={styles.dot} aria-hidden="true" />
              Available for new-grad roles
            </span>
                    )}

                    <h1 className={styles.name}>{profile.name}</h1>
                    <p className={styles.role}>{profile.role}</p>
                    <p className={styles.tagline}>{profile.tagline}</p>

                    <div className={styles.ctaRow}>
                        <a href="#projects" className={styles.btnPrimary}>
                            View my work <ArrowDownIcon width={16} height={16} />
                        </a>
                        <a href="#contact" className={styles.btnSecondary}>
                            Get in touch <MailIcon width={16} height={16} />
                        </a>
                    </div>

                    <div className={styles.terminal} aria-hidden="true">
                        <div className={styles.terminalHead}>
                            <span className={styles.terminalDot} />
                            <span className={styles.terminalDot} />
                            <span className={styles.terminalDot} />
                        </div>
                        <div className={styles.terminalLine}>
                            <span className={styles.prompt}>$ </span>who am i
                        </div>
                        <div className={styles.terminalLine}>{profile.role.toLowerCase()}</div>
                        <div className={styles.terminalLine}>
                            <span className={styles.prompt}>$ </span>cat interests.txt
                        </div>
                        <div className={styles.terminalLine}>backend systems, clean APIs, good tests</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
