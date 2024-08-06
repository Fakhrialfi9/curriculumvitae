import pagesStyle from "../../../assets/style/views/pages.module.css";
import projectStyle from "../../../assets/style/views/section/project.module.css";
import projectData from "../../../data/pages/projectData.js";

const Project = () => {
  return (
    <section id='project' className={pagesStyle.project}>
      <div className='Container'>
        <div className={projectStyle.projectcontent}>
          <div className={projectStyle.header}>
            <h5>Project</h5>
          </div>

          <div className={projectStyle.body}>
            {projectData.map((project, projectData) => (
              <div key={projectData} className={projectStyle.information}>
                <div className={projectStyle.years}>
                  <h5>{project.year}</h5>
                </div>
                <div className={projectStyle.heading}>
                  <div className={projectStyle.name}>
                    <h5>{project.name}</h5>
                  </div>
                  <div className={projectStyle.description}>
                    <p dangerouslySetInnerHTML={{ __html: project.description }} />
                  </div>
                  <figure className={projectStyle.image}>
                    <img src={project.image} alt={project.name}></img>
                  </figure>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
