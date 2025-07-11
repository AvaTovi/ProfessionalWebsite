import React from "react";

const Resume = () => {
  return (
    <div className="container">
      <div className="tokyo_tm_portfolio">
        <div className="tokyo_tm_title">
          <div className="title_flex">
            <div className="left">
              <span>Resume</span>
              <h3>My Professional Resume</h3>
            </div>
          </div>
        </div>

        <div className="resume_viewer" style={{ marginTop: "30px" }}>
          <iframe
            src="/AvasProfessionalResume.pdf"
            width="100%"
            height="800px"
            style={{ border: "none", borderRadius: "8px" }}
            title="Ava Tovi Resume"
          />
        </div>

        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <a
            href="/AvasProfessionalResume.pdf"
            className="ib-button"
            download
            target="_blank"
            rel="noreferrer"
          >
            Download Resume (PDF)
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
