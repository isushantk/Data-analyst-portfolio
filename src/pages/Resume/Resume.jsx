import './Resume.css';

const Resume = () => {
    // Place your resume PDF in the public folder as 'resume.pdf'
    const resumeUrl = `${import.meta.env.BASE_URL}Sushant_Data_analyst_04.pdf`;

    return (
        <div className="resume-page">
            {/* Hero Section */}
            <section className="resume-hero">
                <div className="container">
                    <h1>My Resume</h1>
                    <p>View my professional background and qualifications</p>
                    <div className="resume-actions">
                        <a
                            href={resumeUrl}
                            download="Sushant_Data_analyst_04.pdf"
                            className="btn btn-primary"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="btn-icon">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                            </svg>
                            Download Resume
                        </a>
                        <a
                            href={resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="btn-icon">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                            </svg>
                            Open in New Tab
                        </a>
                    </div>
                </div>
            </section>

            {/* PDF Viewer Section */}
            <section className="resume-viewer-section">
                <div className="container">
                    <div className="resume-viewer-wrapper">
                        <div className="resume-viewer">
                            <iframe
                                src={ushant_Data_analyst_04.pdf}
                                title="Resume PDF Viewer"
                                className="pdf-frame"
                            >
                                <p>Your browser does not support PDFs.
                                    <a href={ushant_Data_analyst_04.pdf} download>Download the PDF</a>
                                </p>
                            </iframe>
                        </div>
                        <div className="resume-note">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="note-icon">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                            </svg>
                            <span>Having trouble viewing? Use the buttons above to download or open in a new tab.</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Resume;
