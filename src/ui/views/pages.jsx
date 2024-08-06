import pagesStyle from "../../assets/style/views/pages.module.css";
import Profile from "./section/profile.jsx";
import Project from "./section/project.jsx";
import Experience from "./section/experience.jsx";
import Education from "./section/education.jsx";
import Skills from "./section/skills.jsx";
import Certifications from "./section/certifications.jsx";
import Contact from "./section/contact.jsx";

const Pages = () => {
  return (
    <main className={pagesStyle.main}>
      <Profile />
      <Project />
      <Experience />
      <Education />
      <Skills />
      <Certifications />
      <Contact />
    </main>
  );
};

export default Pages;
