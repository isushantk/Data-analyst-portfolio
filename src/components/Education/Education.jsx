import './Education.css';

const Education = () => {
    const educationData = [
        {
            id: 1,
            degree: "Bachelor of Technology",
            field: "Computer Science & Engineering",
            institution: "University Name",
            location: "City, State",
            year: "2020 - 2024",
            grade: "8.5 CGPA",
            icon: "🎓",
            highlights: [
                "Specialized in Data Science and Analytics",
                "Completed projects in Machine Learning",
                "Active member of Technical Club"
            ]
        },
        {
            id: 2,
            degree: "Class 12th (Senior Secondary)",
            field: "Science Stream (PCM)",
            institution: "School Name",
            location: "City, State",
            year: "2018 - 2020",
            grade: "92%",
            icon: "📚",
            highlights: [
                "Physics, Chemistry, Mathematics",
                "Computer Science as Optional",
                "School Science Olympiad Participant"
            ]
        },
        {
            id: 3,
            degree: "Class 10th (Secondary)",
            field: "General Education",
            institution: "School Name",
            location: "City, State",
            year: "2017 - 2018",
            grade: "90%",
            icon: "📖",
            highlights: [
                "Strong foundation in Mathematics",
                "Excellence in Science subjects",
                "Active in extracurricular activities"
            ]
        }
    ];

    return (
        <section className="education-section">
            <div className="container">
                <div className="education-header">
                    <h2>Education Journey</h2>
                    <p>My academic path that shaped my analytical mindset</p>
                </div>
                <div className="education-timeline">
                    {educationData.map((edu, index) => (
                        <div key={edu.id} className="education-card" style={{ '--delay': `${index * 0.1}s` }}>
                            <div className="education-icon">{edu.icon}</div>
                            <div className="education-content">
                                <div className="education-meta">
                                    <span className="education-year">{edu.year}</span>
                                    <span className="education-grade">{edu.grade}</span>
                                </div>
                                <h3 className="education-degree">{edu.degree}</h3>
                                <p className="education-field">{edu.field}</p>
                                <div className="education-institution">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="institution-icon">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                                    </svg>
                                    <span>{edu.institution}</span>
                                </div>
                                <p className="education-location">{edu.location}</p>
                                <ul className="education-highlights">
                                    {edu.highlights.map((highlight, idx) => (
                                        <li key={idx}>{highlight}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="education-connector"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
