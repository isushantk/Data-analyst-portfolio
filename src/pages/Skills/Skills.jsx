import './Skills.css';

const skillCategories = [
    {
        name: 'Programming & Analytics',
        skills: ['Python', 'Pandas', 'NumPy', 'SQL', 'R']
    },
    {
        name: 'Data & Visualization',
        skills: ['Tableau', 'Power BI', 'Matplotlib', 'Seaborn', 'Plotly']
    },
    {
        name: 'Databases & Cloud',
        skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'AWS S3', 'Google BigQuery', 'Azure Data Lake']
    },
    {
        name: 'Tools & Methodologies',
        skills: ['Data Cleaning', 'ETL Pipelines', 'Statistical Analysis', 'Forecasting', 'APIs', 'Agile', 'Git/GitHub', 'Data Governance', 'Jira', 'Jupyter Notebooks', 'Excel Advanced']
    },
    {
        name: 'Soft Skills',
        skills: ['Analytical Thinking', 'Problem Solving', 'Communication', 'Collaboration', 'Project Management', 'Stakeholder Collaboration', 'Attention to Detail']
    },
    {
        name: 'Coursework',
        skills: ['Computer Networks', 'Operating Systems', 'Data Structures', 'Database Management', 'Computer Architecture', 'Big Data Analytics', 'Machine Learning', 'Cloud Computing']
    }
];

const Skills = () => {
    return (
        <section className="section">
            <div className="container">
                <header className="page-header">
                    <h1>Skills</h1>
                    <p>Technical competencies and tools I use to transform data into actionable insights</p>
                </header>

                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="card skill-category">
                            <h3>{category.name}</h3>
                            <div className="skill-list">
                                {category.skills.map((skill, skillIndex) => (
                                    <span key={skillIndex} className="skill-tag">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
