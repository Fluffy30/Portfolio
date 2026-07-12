import { useEffect, useRef } from 'react'

/**
 * Adds a subtle fade/slide-in animation when an element scrolls into view.
 * Usage: const ref = useReveal(); <div ref={ref} className={`reveal ${styles.card}`}>
 */
export function useReveal(options = { threshold: 0.15 }) {
    const ref = useRef(null)

    useEffect(() => {
        const node = ref.current
        if (!node) return

        // Respect users who prefer reduced motion: show immediately, no observer needed.
        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        if (prefersReduced) {
            node.classList.add('is-visible')
            return
        }

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                node.classList.add('is-visible')
                observer.unobserve(node)
            }
        }, options)

        observer.observe(node)
        return () => observer.disconnect()
    }, [])

    return ref
}
