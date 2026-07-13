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
    email: 'jacobabuki@gmail.com',
    resumeUrl: '/resume.pdf',
    availableForWork: true,
}

export const socials = [
    { label: 'GitHub', href: 'https://github.com/Fluffy30', icon: 'github' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/jacob-brown-dev', icon: 'LinkedIn' },
    { label: 'Email', href: 'mailto:jacobabuki@gmail.com', icon: 'mail' },
    { label: 'X / Twitter', href: 'https://x.com/yourusername', icon: 'x' },
]

export const about = {
    paragraphs: [
        "I am a computer science student and junior software developer based in Kampala, Uganda, with hands-on experience building real-world projects using Java, Python, SQL, JavaScript, and web technologies. I focus on turning ideas into reliable software that improves how people access information, learn, and connect online.\n" +
        "\n" +
        "My portfolio includes a personal React-based portfolio site, a full-stack hospital website, an online church platform, and programming tutorials on my YouTube channel, CodeWise Tutor. These projects have strengthened my skills in backend development, web development, database design, and clear technical communication.\n" +
        "\n" +
        "I work daily with Git and GitHub, IntelliJ IDEA, NetBeans, Bash, and object-oriented programming principles. I am comfortable collaborating remotely with classmates and online teams, documenting my work, and learning new technologies like Spring Boot, Django, and modern cloud tools quickly.\n" +
        "\n" +
        "I am actively looking for internship, junior, and entry-level opportunities in software engineering, backend development, cloud engineering, and cybersecurity-related projects. My main interests are Java, Python, SQL, and building secure, scalable systems that solve practical problems.\n" +
        "\n" +
        "I am open to remote roles, internships, and freelance projects. If my profile matches what you’re looking for, I would be happy to share code samples, walk through my projects, and discuss how I can contribute to your team.",
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
        type: 'Work',
        title: 'Personal Profile',
        org: 'Self-employed',
        period: 'Jun 2026 — Jul 2026',
        description:
        'Built a personal portfolio website using HTML, CSS, JavaScript, React, and GitHub Pages to showcase my projects and improve my online visibility.'
    },
    {
        id: 'exp-2',
        type: 'Education',
        title: 'B.Sc. Computer Science',
        org: 'ISBAT University',
        period: '2025 — 2027',
        description:
            'Coursework in algorithms, operating systems, databases, and distributed systems. Teaching assistant for Intro to Data Structures.',
    },
    {
        id: 'exp-3',
        type: 'Education',
        title: 'Hospital Website',
        org: 'ISBAT University',
        period: 'May 2026 — Jul 2026',
        description:
        'Collaborated with course mates on a full-stack hospital website that helped patients quickly find information, build trust, and book services or contact the hospital more efficiently.'
    },
    {
        id: 'exp-4',
        type: 'Work',
        title: 'Online Church Website',
        org: 'Self-employed',
        period: 'Jul 2026 — Aug 2026',
        description:
            'Developed an online church website that increased discoverability, strengthened member engagement, and supported 24/7 delivery of teaching and care at a low operational cost.'
    },
    {
        id: 'exp-5',
        type: 'Work',
        title: 'YouTube Channel - CodeWise Tutor',
        org: 'Self-employed',
        period: '2026 — Now',
        description:
        'Created programming tutorials on my YouTube channel, CodeWise Tutor, to teach Java, Python, and other concepts, improving my ability to explain technical topics clearly.'
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
