import './Experience.css';

const experiences = [
    {
        role: 'Senior Data Analyst',
        company: 'Tech Solutions Inc.',
        duration: 'Jan 2022 — Present',
        bullets: [
            'Led analytics for a product team of 15, delivering insights that improved user retention by 18%',
            'Built automated reporting pipelines reducing manual reporting time by 12 hours weekly',
            'Designed and maintained executive dashboards tracking $50M+ in annual revenue metrics',
            'Conducted A/B testing analysis for 20+ experiments, directly impacting product roadmap decisions'
        ],
        tech: ['Python', 'SQL', 'Tableau', 'BigQuery', 'Airflow']
    },
    {
        role: 'Data Analyst',
        company: 'Analytics Corp',
        duration: 'Jun 2019 — Dec 2021',
        bullets: [
            'Developed customer segmentation models that increased marketing campaign ROI by 25%',
            'Created self-service analytics tools adopted by 50+ non-technical stakeholders',
            'Optimized SQL queries reducing dashboard load times from 45s to under 5s',
            'Partnered with engineering to design data warehouse schema for new product lines'
        ],
        tech: ['SQL', 'Python', 'Power BI', 'PostgreSQL', 'Excel']
    },
    {
        role: 'Junior Data Analyst',
        company: 'StartUp Labs',
        duration: 'Aug 2017 — May 2019',
        bullets: [
            'Analyzed user behavior data to identify key drop-off points in the conversion funnel',
            'Built weekly KPI reports tracking core business metrics for leadership team',
            'Cleaned and standardized datasets from 5+ data sources for unified reporting',
            'Assisted in migrating legacy Excel reports to automated Tableau dashboards'
        ],
        tech: ['Excel', 'SQL', 'Tableau', 'Google Analytics']
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
            </div>
        </section>
    );
};

export default Experience;
