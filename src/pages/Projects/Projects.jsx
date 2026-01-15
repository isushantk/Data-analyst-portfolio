import './Projects.css';

const projects = [
    {
        title: 'Electric Vehicles Market Size Analysis',
        problem: 'Analyzed the Electric Vehicle market to understand adoption trends, manufacturer dominance, and range distribution patterns.',
        dataset: '177,866 entries across 17 columns',
        tech: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'NumPy', 'SciPy'],
        insights: 'Processed and cleaned a large EV dataset handling missing values across columns including VIN, location, model year, make, and electric range. Created visualizations of EV trends, BEV dominance, top Tesla models, and range histograms.',
        github: 'https://github.com/isushantk',
        demo: null
    },
    {
        title: 'YouTube Data Collection and Analysis',
        problem: 'Built a data pipeline to collect and analyze trending YouTube videos to understand content performance patterns.',
        dataset: '200+ trending videos via YouTube Data API v3',
        tech: ['Python', 'YouTube Data API v3', 'Pandas', 'Seaborn', 'Matplotlib'],
        insights: 'Discovered <5min videos in Music/Gaming categories (42% of trends) achieve highest engagement with 0.85+ views-likes correlation. Built complete ETL pipeline with API pagination, data cleaning (ISO duration parsing), category mapping, and 10+ visualizations revealing optimal 2-8PM upload window.',
        github: 'https://github.com/isushantk',
        demo: null
    },
    {
        title: 'Creating a Mutual Fund Plan',
        problem: 'Developed a portfolio optimization tool to help investors make informed decisions about mutual fund investments.',
        dataset: 'Nifty 50 stock data',
        tech: ['Python', 'Pandas', 'NumPy', 'Plotly', 'Jupyter Notebook'],
        insights: 'Built portfolio optimizer analyzing Nifty 50 data; selected 9 stocks via high ROI/low volatility criteria with inverse volatility weighting (NTPC: 28%). Created interactive financial dashboards comparing mutual fund portfolio low-risk 4-13% ROI vs high-growth stocks. Projected 5K monthly SIP growing to ₹8.6L in 10 years using compound interest formula.',
        github: 'https://github.com/isushantk',
        demo: null
    }
];

const Projects = () => {
    return (
        <section className="section">
            <div className="container">
                <header className="page-header">
                    <h1>Projects</h1>
                    <p>Data analysis and visualization projects demonstrating analytical skills and business impact</p>
                </header>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="card project-card">
                            <div className="project-header">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-problem">{project.problem}</p>
                            </div>

                            <div className="project-meta">
                                <div className="project-meta-item">
                                    <span className="project-meta-label">Dataset:</span>
                                    <span className="project-meta-value">{project.dataset}</span>
                                </div>
                            </div>

                            <div className="project-tech">
                                {project.tech.map((tech, techIndex) => (
                                    <span key={techIndex}>{tech}</span>
                                ))}
                            </div>

                            <div className="project-insights">
                                <h4>Key Insights</h4>
                                <p>{project.insights}</p>
                            </div>

                            <div className="project-links">
                                {project.github && (
                                    <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                        GitHub
                                    </a>
                                )}
                                {project.demo && (
                                    <a href={project.demo} className="project-link" target="_blank" rel="noopener noreferrer">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                        </svg>
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
