import React from "react";
import Social from "./Social";

const Home = () => {
  return (
    <>
      <div className="tokyo_tm_home">
        <div
          className="home_content"
          style={{
            display: "flex",
            flexDirection: "column",     // ⬅️  stack image over text
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {/* ——— Avatar ——— */}
          <div
            className="image avatar_img"
            style={{
              backgroundImage: "url(assets/img/personal/frame.png)",
              width: "260px",
              height: "260px",
              borderRadius: "50%",
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
              overflow: "hidden",
              marginBottom: "24px",       // gap between image and name
            }}
          >
            <img
              src="assets/img/personal/me1.jpg"
              alt="Ava Tovi"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "50%",
                position: "absolute",
                top: 0,
                left: 0,
              }}
            />
          </div>

          {/* ——— Name & Bio ——— */}
          <div className="details">
            <h3 className="name">Ava Tovi</h3>
            <p className="job">
              Computer Science major at San&nbsp;Diego&nbsp;State&nbsp;University with a
              passion for technology and a drive to explore opportunities across
              the entire tech industry.
            </p>
            <Social />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
