import React from "react";

const PersonalInfo = () => {
  const personalInfoContent = [
    {
      id: 1,
      colClass: "left",
      info: [
        {
          id: 1,
          name: "Birthday",
          content: "12.15.2001",
        },
        {
          id: 2,
          name: "Age",
          content: "23",
        },
        {
          id: 3,
          name: "Address",
          content: "San Diego, CA",
        },
        {
          id: 4,
          name: "Email",
          content: (
            <a href="mailto:avatovi45@icloud.com" style={{ color: "blue" }}>
              avatovi45@icloud.com
            </a>
          ),
        },
        {
          id: 5,
          name: "Phone",
          content: (
            <a href="tel:(619)402-8814" style={{ color: "blue" }}>
              (619)402-8814
            </a>
          ),
        },
      ],
    },
    {
      id: 2,
      colClass: "right",
      info: [
        {
          id: 1,
          name: "Nationality",
          content: "USA",
        },
        {
          id: 2,
          name: "Study",
          content: "San Diego State University",
        },
        {
          id: 3,
          name: "Degree",
          content: "Bachelor Degree",
        },
        {
          id: 4,
          name: "Interest",
          content: "Strategic boardgames, watching and playing sports",
        },
        {
          id: 5,
          name: "Freelance",
          content: "Available",
        },
      ],
    },
  ];
  return (
    <>
      {personalInfoContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="tokyo_tm_info">
            <ul>
              {item?.info?.map((value) => (
                <li key={value.id}>
                  <span>{value.name}:</span>
                  <span>{value.content}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default PersonalInfo;
