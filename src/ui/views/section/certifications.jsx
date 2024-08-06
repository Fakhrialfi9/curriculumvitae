import pagesStyle from "../../../assets/style/views/pages.module.css";
import certificationsData from "../../../data/pages/certificationsData.js";
import certificationsStyle from "../../../assets/style/views/section/certifications.module.css";

const Certifications = () => {
  return (
    <section id='certifications' className={pagesStyle.certifications}>
      <div className='Container'>
        <div className={certificationsStyle.certificationscontent}>
          <div className={certificationsStyle.header}>
            <h5>Certifications</h5>
          </div>

          <div className={certificationsStyle.body}>
            {certificationsData.map((certifications, certificationsData) => (
              <div key={certificationsData} className={certificationsStyle.information}>
                <div className={certificationsStyle.years}>
                  <h5>{certifications.year}</h5>
                </div>
                <div className={certificationsStyle.heading}>
                  <div className={certificationsStyle.name}>
                    <h5>{certifications.name}</h5>
                    <h6>{certifications.CertificateID}</h6>
                  </div>
                  <div className={certificationsStyle.description}>
                    <p dangerouslySetInnerHTML={{ __html: certifications.description }} />
                  </div>
                  <figure className={certificationsStyle.image}>
                    <img src={certifications.image} alt={certifications.name}></img>
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

export default Certifications;
