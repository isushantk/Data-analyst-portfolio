import { Link } from 'react-router-dom';
import './Home.css';
import Education from '../../components/Education/Education';

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="home-hero">
                <div className="container home-hero-content">
                    <h1 className="home-title">Sushant Kumar</h1>
                    <p className="home-subtitle">Data Analyst</p>
                    <p className="home-summary">
                        I transform complex datasets into actionable insights that drive business decisions.
                        With expertise in SQL, Python, and data visualization, I help organizations
                        uncover patterns, optimize processes, and make data-driven strategies.
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
                            <h3>5+</h3>
                            <p>Years of Experience</p>
                        </div>
                        <div className="stat-item">
                            <h3>20+</h3>
                            <p>Projects Completed</p>
                        </div>
                        <div className="stat-item">
                            <h3>10+</h3>
                            <p>Tools & Technologies</p>
                        </div>
                        <div className="stat-item">
                            <h3>3</h3>
                            <p>Industries Served</p>
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
                            <p>Deep-dive analysis using SQL, Python, and statistical methods to uncover meaningful patterns and trends.</p>
                        </div>
                        <div className="card highlight-card">
                            <svg className="highlight-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                            </svg>
                            <h3>Data Visualization</h3>
                            <p>Creating compelling dashboards and reports with Tableau, Power BI, and Python visualization libraries.</p>
                        </div>
                        <div className="card highlight-card">
                            <svg className="highlight-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                            </svg>
                            <h3>Database Management</h3>
                            <p>Designing and optimizing database queries, ETL pipelines, and data warehousing solutions.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Education Section */}
            <Education />
        </>
    );
};

export default Home;
