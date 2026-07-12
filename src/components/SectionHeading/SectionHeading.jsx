import styles from './SectionHeading.module.css'

/**
 * Section label styled like a code comment, e.g. "// 02  Projects".
 * `index` is the section's position in the page, used only as a visual cue.
 */
export default function SectionHeading({ index, title, subtitle }) {
    const number = String(index).padStart(2, '0')
    return (
        <div className={styles.wrap}>
            <span className={styles.eyebrow}>{`// ${number}`}</span>
            <h2 className={styles.title}>{title}</h2>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
    )
}
