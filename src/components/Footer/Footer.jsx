import styles from './Footer.module.css'
import { profile, socials } from '../../data/siteData'

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.row}`}>
                <p className={styles.copy}>&copy; {year} {profile.name}. Built with React.</p>
                <nav className={styles.links} aria-label="Footer social links">
                    {socials.map((social) => (
                        <a
                            key={social.label}
                            href={social.href}
                            target={social.href.startsWith('http') ? '_blank' : undefined}
                            rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className={styles.link}
                        >
                            {social.label}
                        </a>
                    ))}
                </nav>
                <a href="#home" className={styles.backToTop}>&uarr; Back to top</a>
            </div>
        </footer>
    )
}
