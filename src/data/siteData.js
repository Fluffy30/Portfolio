// ─────────────────────────────────────────────────────────────
// EDIT THIS FILE to personalize the whole site. Every component
// reads from here — you shouldn't need to touch component code
// just to update your name, projects, or links.
// ─────────────────────────────────────────────────────────────

export const profile = {
    name: 'Jacob Brown',
    role: 'Computer Science Graduate',
    location: 'Kampala, Uganda',
    tagline:
        "I build reliable, well-tested software — from backend systems to the interfaces people actually touch.",
    intro:
        "Recent Computer Science graduate with a focus on backend engineering and distributed systems, plus hands-on experience shipping full-stack products. I like turning ambiguous problems into simple, working software.",
    email: 'alex.morgan@example.com',
    resumeUrl: '/resume.pdf', // Replace with your real PDF, see public/resume.pdf
    availableForWork: true,
}

export const socials = [
    { label: 'GitHub', href: 'https://github.com/yourusername', icon: 'github' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/yourusername', icon: 'linkedin' },
    { label: 'Email', href: 'mailto:alex.morgan@example.com', icon: 'mail' },
    { label: 'X / Twitter', href: 'https://x.com/yourusername', icon: 'x' },
]

export const about = {
    paragraphs: [
        "I graduated with a B.Sc. in Computer Science, where I focused on algorithms, distributed systems, and software engineering practices. Outside coursework, I spent most of my time building things: side projects, hackathon entries, and contributions to open source.",
        "I care about writing code that's easy for the next person to read, testing it properly, and shipping in small, reversible steps. I'm comfortable across the stack, but backend systems and developer tooling are where I do my best work.",
        "Right now I'm looking for a software engineering role where I can keep learning from senior engineers while contributing from day one.",
    ],
    highlights: [
        { label: 'Education', value: 'B.Sc. Computer Science' },
        { label: 'Focus', value: 'Backend & Distributed Systems' },
        { label: 'Based in', value: 'Kampala, Uganda (open to remote)' },
        { label: 'Status', value: 'Open to new-grad roles' },
    ],
}

export const skills = [
    {
        category: 'Languages',
        items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'SQL'],
    },
    {
        category: 'Frontend',
        items: ['React', 'HTML5', 'CSS3', 'Redux', 'Vite'],
    },
    {
        category: 'Backend',
        items: ['Node.js', 'Express', 'Django', 'REST APIs', 'GraphQL'],
    },
    {
        category: 'Data & Infra',
        items: ['PostgreSQL', 'MongoDB', 'Docker', 'Git', 'AWS', 'Linux'],
    },
    {
        category: 'CS Fundamentals',
        items: ['Data Structures', 'Algorithms', 'System Design', 'OOP'],
    },
]

export const projects = [
    {
        id: 'proj-1',
        title: 'TaskFlow',
        description:
            'A collaborative task manager with real-time updates, built to learn WebSockets and optimistic UI patterns.',
        tags: ['React', 'Node.js', 'Socket.io', 'PostgreSQL'],
        liveUrl: 'https://example.com',
        codeUrl: 'https://github.com/yourusername/taskflow',
        featured: true,
    },
    {
        id: 'proj-2',
        title: 'PathFinder Visualizer',
        description:
            "An interactive tool that visualizes pathfinding algorithms (Dijkstra, A*, BFS) on a grid in real time.",
        tags: ['JavaScript', 'Canvas API', 'Algorithms'],
        liveUrl: 'https://example.com',
        codeUrl: 'https://github.com/yourusername/pathfinder-visualizer',
        featured: true,
    },
    {
        id: 'proj-3',
        title: 'DevLog API',
        description:
            'A REST API for a developer journaling app, with JWT auth, rate limiting, and full test coverage.',
        tags: ['Python', 'Django REST', 'PostgreSQL', 'Docker'],
        liveUrl: '',
        codeUrl: 'https://github.com/yourusername/devlog-api',
        featured: false,
    },
    {
        id: 'proj-4',
        title: 'Campus Marketplace',
        description:
            'A capstone project: a marketplace app for students to buy and sell used textbooks and gear.',
        tags: ['React', 'Express', 'MongoDB', 'Stripe'],
        liveUrl: 'https://example.com',
        codeUrl: 'https://github.com/yourusername/campus-marketplace',
        featured: false,
    },
]

export const timeline = [
    {
        id: 'exp-1',
        type: 'work',
        title: 'Software Engineering Intern',
        org: 'Example Tech Co.',
        period: 'Jun 2025 — Aug 2025',
        description:
            'Built and shipped two internal tools used by the data team; reduced a nightly batch job runtime by 40% by optimizing database queries.',
    },
    {
        id: 'exp-2',
        type: 'education',
        title: 'B.Sc. Computer Science',
        org: 'University Name',
        period: '2022 — 2026',
        description:
            'Coursework in algorithms, operating systems, databases, and distributed systems. Teaching assistant for Intro to Data Structures.',
    },
    {
        id: 'exp-3',
        type: 'work',
        title: 'Freelance Web Developer',
        org: 'Self-employed',
        period: '2021 — 2022',
        description:
            'Delivered small business websites end-to-end, from client requirements through deployment and handover.',
    },
]

export const nav = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' },
]
