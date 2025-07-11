import React from "react";

const Resume = () => {
  return (
    <div className="container">
      <div className="tokyo_tm_resume">
        <div className="tokyo_tm_title">
          <div className="title_flex">
            <div className="left">
              <span>Resume</span>
              <h3>My Professional Resume</h3>
            </div>
          </div>
        </div>

        <div className="resume_embed" style={{ textAlign: "center" }}>
          <object
            data="/AvasProfessionalResume.pdf"
            type="application/pdf"
            width="100%"
            height="800px"
          >
            <p>
              Your browser does not support displaying PDFs.{" "}
              <a href="/AvasProfessionalResume.pdf" target="_blank" rel="noreferrer">
                Click here to view or download it.
              </a>
            </p>
          </object>
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
