import pagesStyle from "../../../assets/style/views/pages.module.css";
import experienceStyle from "../../../assets/style/views/section/experience.module.css";
import experienceData from "../../../data/pages/experienceData.js";

const Experience = () => {
  return (
    <section id='experience' className={pagesStyle.experience}>
      <div className='Container'>
        <div className={experienceStyle.experiencecontent}>
          <div className={experienceStyle.header}>
            <h5>Experience</h5>
          </div>

          <div className={experienceStyle.body}>
            {experienceData.map((experience, experienceData) => (
              <div key={experienceData} className={experienceStyle.information}>
                <div className={experienceStyle.years}>
                  <h5>{experience.year}</h5>
                </div>
                <div className={experienceStyle.heading}>
                  <div className={experienceStyle.name}>
                    <h5>{experience.name}</h5>
                    <h5>{experience.title}</h5>
                    <h6>{experience.location}</h6>
                  </div>
                  <div className={experienceStyle.description}>
                    <p dangerouslySetInnerHTML={{ __html: experience.description }} />
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

export default Experience;
