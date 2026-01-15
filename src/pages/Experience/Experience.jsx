import './Experience.css';

const experiences = [
    {
        role: 'Data Analyst Intern',
        company: 'Manishaas Infratecho Solutions Pvt. Ltd.',
        location: 'Delhi',
        duration: 'May 2024 — July 2024',
        bullets: [
            'Translated business requirements into scalable data and technology solutions by collaborating with stakeholders, applying analytical problem-solving, and supporting strategic and operational decision-making.',
            'Designed and delivered interactive dashboards and KPI frameworks using Tableau, Power BI, SQL, and Python, enabling clear insight generation, trend analysis, and performance tracking across multi-source datasets.',
            'Executed analytics delivery using Agile best practices, including sprint-based development, documentation, data governance, quality checks, and stakeholder reviews to ensure reliable, maintainable, and business-aligned solutions.'
        ],
        tech: ['Tableau', 'Power BI', 'SQL', 'Python', 'Agile']
    }
];

const leadershipRoles = [
    {
        role: 'Head of Marketing',
        organization: 'Entrepreneurship Cell',
        institution: 'National Institute of Technology Karnataka, Surathkal',
        duration: 'April 2024 — April 2025',
        bullets: [
            'Spearheaded marketing campaigns for a national entrepreneurship event, securing ₹9 lakhs in sponsorships through strategic outreach, persuasive brand pitches, and stakeholder engagement.'
        ]
    },
    {
        role: 'Treasurer',
        organization: 'Association of Computer Engineers',
        institution: 'National Institute of Technology Karnataka, Surathkal',
        duration: 'February 2024 — April 2025',
        bullets: [
            'Oversaw budgeting and fund allocation, planned sustainable operations, and secured multi-source funding to support association activities and events.'
        ]
    }
];

const Experience = () => {
    return (
        <section className="section">
            <div className="container">
                <header className="page-header">
                    <h1>Experience</h1>
                    <p>Professional journey focused on driving data-informed decisions</p>
                </header>

                <div className="experience-timeline">
                    {experiences.map((exp, index) => (
                        <div key={index} className="experience-entry">
                            <div className="experience-header">
                                <h3 className="experience-role">{exp.role}</h3>
                                <p className="experience-company">{exp.company}</p>
                                <p className="experience-location">{exp.location}</p>
                                <p className="experience-duration">{exp.duration}</p>
                            </div>
                            <ul className="experience-description">
                                {exp.bullets.map((bullet, bulletIndex) => (
                                    <li key={bulletIndex}>{bullet}</li>
                                ))}
                            </ul>
                            <div className="experience-tech">
                                {exp.tech.map((tech, techIndex) => (
                                    <span key={techIndex}>{tech}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Leadership Section */}
                <header className="page-header" style={{ marginTop: 'var(--space-16)' }}>
                    <h2>Leadership & Extracurricular</h2>
                    <p>Campus leadership roles demonstrating execution and collaboration skills</p>
                </header>

                <div className="experience-timeline">
                    {leadershipRoles.map((role, index) => (
                        <div key={index} className="experience-entry leadership-entry">
                            <div className="experience-header">
                                <h3 className="experience-role">{role.role}</h3>
                                <p className="experience-company">{role.organization}</p>
                                <p className="experience-location">{role.institution}</p>
                                <p className="experience-duration">{role.duration}</p>
                            </div>
                            <ul className="experience-description">
                                {role.bullets.map((bullet, bulletIndex) => (
                                    <li key={bulletIndex}>{bullet}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
