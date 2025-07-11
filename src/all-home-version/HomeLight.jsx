import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/about/AboutMain";
import Contact from "../components/Contact";
import Resume from "../components/Resume"; // Assuming you renamed Portfolio to Resume
import PageTitle from "../components/PageTitle";

const HomeLight = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
    localStorage.setItem("isDarkModeEnabled", isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <PageTitle title="Home Regular" />

      <button className="theme-switcher-label" onClick={toggleDarkMode}>
        {isDarkMode ? <FaSun /> : <FaMoon />}
      </button>

      <Tabs>
        <TabList>
          <div className="leftpart">
            <div className="leftpart_inner">
              <div className="logo">
                <Link className="navbar-brand" to="/" style={{ textDecoration: "none", color: "inherit" }}>
                  <h3>Ava Tovi</h3>
                </Link>
              </div>

              <div className="menu">
                <ul>
                  <Tab>
                    <img
                      className="svg"
                      src="/assets/img/svg/home-run.svg"
                      alt="homerun"
                    />
                    <span className="menu_content">Home</span>
                  </Tab>
                  <Tab>
                    <img
                      className="svg"
                      src="/assets/img/svg/avatar.svg"
                      alt="avatar"
                    />
                    <span className="menu_content">About</span>
                  </Tab>
                  <Tab>
                    <img
                      className="svg"
                      src="/assets/img/svg/briefcase.svg"
                      alt="briefcase"
                    />
                    <span className="menu_content">Resume</span>
                  </Tab>
                  <Tab>
                    <img
                      className="svg"
                      src="/assets/img/svg/mail.svg"
                      alt="mail"
                    />
                    <span className="menu_content">Contact</span>
                  </Tab>
                </ul>
              </div>
            </div>
          </div>
        </TabList>

        <div className="rightpart">
          <div className="rightpart_in">
            <div className="tokyo_tm_section">
              <TabPanel>
                <div data-aos="fade-right" data-aos-duration="1200">
                  <Home />
                </div>
              </TabPanel>

              <TabPanel>
                <div data-aos="fade-right" data-aos-duration="1200" data-aos-delay="100">
                  <About />
                </div>
              </TabPanel>

              <TabPanel>
                <Resume />
              </TabPanel>

              <TabPanel>
                <div data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200">
                  <Contact />
                </div>
              </TabPanel>
            </div>
          </div>
        </div>
      </Tabs>
    </>
  );
};

export default HomeLight;
