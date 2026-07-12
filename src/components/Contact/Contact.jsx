import { useState } from 'react'
import styles from './Contact.module.css'
import SectionHeading from '../SectionHeading/SectionHeading'
import { profile, socials } from '../../data/siteData'
import { GithubIcon, LinkedinIcon, MailIcon, XIcon } from '../Icons'
import { useReveal } from '../../hooks/useReveal'

const iconMap = {
    github: GithubIcon,
    linkedin: LinkedinIcon,
    mail: MailIcon,
    x: XIcon,
}

export default function Contact() {
    const revealRef = useReveal()
    const [form, setForm] = useState({ name: '', email: '', message: '' })

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    // No backend dependency: opens the visitor's own email client with the
    // message pre-filled. Swap this for Formspree/EmailJS if you want
    // submissions to land directly in an inbox without opening a mail app —
    // see the README for a two-line example.
    const handleSubmit = (e) => {
        e.preventDefault()
        const subject = encodeURIComponent(`Portfolio contact from ${form.name || 'a visitor'}`)
        const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
        window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    }

    return (
        <section id="contact" className="section" aria-label="Contact">
            <div className="container">
                <SectionHeading
                    index={6}
                    title="Get in touch"
                    subtitle="Have a role, a question, or just want to say hi? I'd love to hear from you."
                />

                <div ref={revealRef} className={`reveal ${styles.grid}`}>
                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Contact card</h3>
                        <p className={styles.cardText}>
                            The fastest way to reach me is email. You can also find me on the platforms below.
                        </p>
                        <div className={styles.socialList}>
                            {socials.map((social) => {
                                const Icon = iconMap[social.icon] ?? MailIcon
                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target={social.href.startsWith('http') ? '_blank' : undefined}
                                        rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                        className={styles.socialLink}
                                    >
                                        <Icon width={18} height={18} />
                                        {social.label}
                                    </a>
                                )
                            })}
                        </div>
                    </div>

                    <form className={styles.form} onSubmit={handleSubmit} aria-label="Contact form">
                        <div className={styles.field}>
                            <label className={styles.label} htmlFor="name">Name</label>
                            <input
                                className={styles.input}
                                id="name"
                                name="name"
                                type="text"
                                required
                                value={form.name}
                                onChange={handleChange}
                                autoComplete="name"
                            />
                        </div>
                        <div className={styles.field}>
                            <label className={styles.label} htmlFor="email">Email</label>
                            <input
                                className={styles.input}
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={form.email}
                                onChange={handleChange}
                                autoComplete="email"
                            />
                        </div>
                        <div className={styles.field}>
                            <label className={styles.label} htmlFor="message">Message</label>
                            <textarea
                                className={styles.textarea}
                                id="message"
                                name="message"
                                required
                                value={form.message}
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit" className={styles.submitBtn}>Send message</button>
                        <p className={styles.formNote}>Opens your email client with this message pre-filled.</p>
                    </form>
                </div>
            </div>
        </section>
    )
}
