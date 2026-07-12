import { useEffect, useState } from 'react'
import styles from './Navbar.module.css'
import { nav, profile } from '../../data/siteData'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import { MenuIcon, CloseIcon } from '../Icons'

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const activeId = useScrollSpy(nav.map((item) => item.id))

    // Close the mobile menu whenever the route/hash changes via a nav click,
    // and lock body scroll while the panel is open.
    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : ''
        return () => {
            document.body.style.overflow = ''
        }
    }, [open])

    const handleLinkClick = () => setOpen(false)

    return (
        <header className={styles.header}>
            <div className={`container ${styles.bar}`}>
                <a href="#home" className={styles.logo} aria-label={`${profile.name} — home`}>
                    <span>&gt;</span>{profile.name.split(' ')[0].toLowerCase()}
                </a>

                <nav className={styles.desktopNav} aria-label="Primary">
                    <ul>
                        {nav.map((item) => (
                            <li key={item.id}>
                                <a
                                    href={`#${item.id}`}
                                    className={`${styles.navLink} ${activeId === item.id ? styles.active : ''}`}
                                    aria-current={activeId === item.id ? 'true' : undefined}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <a href="#contact" className={styles.ctaButton}>Let's talk</a>
                </nav>

                <button
                    className={styles.menuToggle}
                    onClick={() => setOpen((v) => !v)}
                    aria-expanded={open}
                    aria-controls="mobile-nav-panel"
                    aria-label={open ? 'Close menu' : 'Open menu'}
                >
                    {open ? <CloseIcon /> : <MenuIcon />}
                </button>
            </div>

            <div
                id="mobile-nav-panel"
                className={`${styles.mobilePanel} ${open ? styles.open : ''}`}
            >
                <nav aria-label="Mobile primary">
                    <ul>
                        {nav.map((item) => (
                            <li key={item.id}>
                                <a
                                    href={`#${item.id}`}
                                    onClick={handleLinkClick}
                                    className={`${styles.mobileLink} ${activeId === item.id ? styles.active : ''}`}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <a href="#contact" onClick={handleLinkClick} className={`${styles.ctaButton} ${styles.mobileCta}`}>
                    Let's talk
                </a>
            </div>
        </header>
    )
}
