import pagesStyle from "../../../assets/style/views/pages.module.css";
import educationData from "../../../data/pages/educationData.js";
import educationStyle from "../../../assets/style/views/section/education.module.css";

const Education = () => {
  return (
    <section id='education' className={pagesStyle.education}>
      <div className='Container'>
        <div className={educationStyle.educationcontent}>
          <div className={educationStyle.header}>
            <h5>Education</h5>
          </div>

          <div className={educationStyle.body}>
            {educationData.map((education, educationData) => (
              <div key={educationData} className={educationStyle.information}>
                <div className={educationStyle.years}>
                  <h5>{education.year}</h5>
                </div>
                <div className={educationStyle.heading}>
                  <div className={educationStyle.name}>
                    <h5>{education.name}</h5>
                    <h6>{education.location}</h6>
                  </div>
                  <div className={educationStyle.description}>
                    <p dangerouslySetInnerHTML={{ __html: education.description }} />
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

export default Education;
