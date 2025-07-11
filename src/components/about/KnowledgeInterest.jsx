import React from "react";

const KnowledgeInterest = () => {
  const knowledgeContent = [
    {
      id: 1,
      colClass: "left",
      title: "Knowledge",
      content: [
        "C++, Java, Python",
        "React, JavaScript, TypeScript",
        "HTML, CSS, Tailwind",
        "Git, GitHub, VS Code",
        "APIs & Responsive Design",
      ],
    },
    {
      id: 2,
      colClass: "right",
      title: "Interests",
      content: [
        "Software Development",
        "UI/UX Design",
        "Building Scalable Apps",
        "Web Accessibility",
        "Exploring AI & Data Science",
      ],
    },
  ];

  return (
    <>
      {knowledgeContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="tokyo_section_title">
            <h3>{item.title}</h3>
          </div>
          <div className="tokyo_tm_skill_list">
            <ul>
              {item.content.map((val, i) => (
                <li key={i}>
                  <span>
                    <img
                      className="svg"
                      src="assets/img/svg/rightarrow.svg"
                      alt="arrow"
                    />
                    {val}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default KnowledgeInterest;
