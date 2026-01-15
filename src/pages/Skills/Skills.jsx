import './Skills.css';

const skillCategories = [
    {
        name: 'Programming & Analytics',
        skills: ['Python', 'R', 'SQL', 'Pandas', 'NumPy', 'SciPy', 'Scikit-learn', 'Statistics']
    },
    {
        name: 'Data Visualization',
        skills: ['Tableau', 'Power BI', 'Matplotlib', 'Seaborn', 'Plotly', 'Looker', 'Excel Charts']
    },
    {
        name: 'Databases & Warehousing',
        skills: ['PostgreSQL', 'MySQL', 'BigQuery', 'Snowflake', 'Redshift', 'MongoDB', 'SQLite']
    },
    {
        name: 'Cloud & Big Data',
        skills: ['AWS (S3, Athena, Glue)', 'Google Cloud Platform', 'Azure', 'Spark', 'Databricks', 'Airflow']
    },
    {
        name: 'Tools & Methodologies',
        skills: ['Git', 'Jupyter Notebooks', 'VS Code', 'A/B Testing', 'ETL Pipelines', 'Agile', 'JIRA']
    },
    {
        name: 'Business Intelligence',
        skills: ['KPI Development', 'Dashboard Design', 'Data Storytelling', 'Requirements Gathering', 'Stakeholder Reporting']
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
