import pagesStyle from "../../../assets/style/views/pages.module.css";
import skillsData from "../../../data/pages/skillsData.js";
import skillsStyle from "../../../assets/style/views/section/skills.module.css";

const Skills = () => {
  return (
    <section id='skills' className={pagesStyle.skills}>
      <div className='Container'>
        <div className={skillsStyle.skillscontent}>
          <div className={skillsStyle.header}>
            <h5>Skills</h5>
          </div>

          <div className={skillsStyle.body}>
            {skillsData.map((skills, skillsData) => (
              <div key={skillsData} className={skillsStyle.information}>
                <div className={skillsStyle.years}>
                  <h5>{skills.year}</h5>
                </div>
                <div className={skillsStyle.heading}>
                  <div className={skillsStyle.name}>
                    <h5>{skills.name}</h5>
                    <h6>{skills.level}</h6>
                  </div>
                  <div className={skillsStyle.description}>
                    <p dangerouslySetInnerHTML={{ __html: skills.description }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
