import React from "react";

const Intro = () => {
  const introContent = {
    image: "assets/img/personal/image0.jpeg",
    name: "Ava Tovi",
    designation: "Software Developer",
    text: (
      <>
        <p>
          Hi, my name is Ava Tovi and I’m a Computer Science major at San Diego State University (SDSU), 
          graduating in the summer of 2026. I’m passionate about software engineering and efficient in 
          languages like C++, Java, JavaScript, TypeScript, Python, and web technologies like HTML and CSS.
        </p>
        <p>
          I have interned at SuperApps Inc., where 
          I’ve gained experience building responsive and user-friendly 
          applications using React. I enjoy solving complex problems, 
          learning new technologies, and contributing to innovative software 
          projects. My goal is to explore a wide range of opportunities in the 
          tech industry and make meaningful contributions wherever I go.
        </p>
      </>
    ),
  };

  return (
    <>
      <div
        className="top_author_image"
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "24px",
        }}
      >
        <img
          src={introContent.image}
          alt="Ava Tovi"
          style={{
            width: "auto",   // shrink to a nice size
            height: "450px",   // keep aspect ratio
            borderRadius: "0", // remove circular/oval crop
          }}
        />
      </div>
      <div className="about_title">
        <h3>{introContent.name}</h3>
        <span>{introContent.designation}</span>
      </div>
      <div className="about_text">{introContent.text}</div>
    </>
  );
};

export default Intro;
