import React from "react";

const Skills = () => {
  const skillsContent = [
    {
      id: 1,
      colClass: "left",
      title: "Programming Skills",
      progress: [
        { id: 1, skillName: "- React" },
        { id: 2, skillName: "- JavaScript" },
        { id: 3, skillName: "- TypeScript" },
        { id: 4, skillName: "- C++" },
        { id: 5, skillName: "- C" },
        { id: 12, skillName: "- C#" },
        { id: 6, skillName: "- Python" },
        { id: 7, skillName: "- Java" },
        { id: 8, skillName: "- Racket" },
        { id: 9, skillName: "- R" },
        { id: 10, skillName: "- Tailwind CSS" },
        { id: 13, skillName: "- Unity" },
        { id: 11, skillName: "- HTML / CSS / XML" },
      ],
    },
    {
      id: 2,
      colClass: "right",
      title: "Soft Skills",
      progress: [
        { id: 1, skillName: "- Problem Solving" },
        { id: 2, skillName: "- Team Collaboration" },
        { id: 3, skillName: "- Communication" },
        { id: 4, skillName: "- Adaptability" },
        { id: 5, skillName: "- Critical Thinking" },
        { id: 6, skillName: "- Time Management" },
        { id: 7, skillName: "- Self-Learning" },
        { id: 8, skillName: "- Attention to Detail" },
        { id: 9, skillName: "- Leadership" },
      ],
    },
  ];

  return (
    <>
      {skillsContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="tokyo_section_title">
            <h3>{item.title}</h3>
          </div>

          <div className="tokyo_progress">
            {item?.progress?.map((skill) => (
              <div className="progress_inner" key={skill.id}>
                <span>
                  <span className="label">{skill?.skillName}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Skills;
