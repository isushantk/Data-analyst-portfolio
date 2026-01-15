import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="home-hero">
                <div className="container home-hero-content">
                    <h1 className="home-title">Sushant Kumar</h1>
                    <p className="home-subtitle">Data Analytics Professional</p>
                    <p className="home-summary">
                        Data Analytics professional with hands-on experience in transforming complex business
                        requirements into actionable insights through data-driven solutions. Proficient in
                        Python, SQL, Tableau, and Power BI, with a strong foundation in data cleaning,
                        ETL pipelines, statistical analysis, and visualization.
                    </p>
                    <div className="home-cta">
                        <Link to="/projects" className="btn btn-primary">
                            View My Projects
                        </Link>
                        <Link to="/contact" className="btn btn-secondary">
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="home-stats">
                <div className="container">
                    <div className="stats-grid">
                        <div className="stat-item">
                            <h3>NIT Karnataka</h3>
                            <p>B.Tech CSE (2021-2025)</p>
                        </div>
                        <div className="stat-item">
                            <h3>3+</h3>
                            <p>Analytics Projects</p>
                        </div>
                        <div className="stat-item">
                            <h3>15+</h3>
                            <p>Tools & Technologies</p>
                        </div>
                        <div className="stat-item">
                            <h3>₹9L+</h3>
                            <p>Sponsorships Secured</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Highlights Section */}
            <section className="home-highlights">
                <div className="container">
                    <div className="highlights-header">
                        <h2>What I Do</h2>
                        <p>Turning data into decisions through analysis and visualization</p>
                    </div>
                    <div className="highlights-grid">
                        <div className="card highlight-card">
                            <svg className="highlight-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                            </svg>
                            <h3>Data Analysis</h3>
                            <p>Deep-dive analysis using Python, SQL, Pandas, and NumPy to uncover meaningful patterns and trends from complex datasets.</p>
                        </div>
                        <div className="card highlight-card">
                            <svg className="highlight-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                            </svg>
                            <h3>Data Visualization</h3>
                            <p>Creating compelling dashboards and interactive reports with Tableau, Power BI, Matplotlib, Seaborn, and Plotly.</p>
                        </div>
                        <div className="card highlight-card">
                            <svg className="highlight-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                            </svg>
                            <h3>ETL & Databases</h3>
                            <p>Designing ETL pipelines, managing databases (MySQL, PostgreSQL, MongoDB), and working with cloud platforms.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
