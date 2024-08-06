import pagesStyle from "../../../assets/style/views/pages.module.css";
import profileStyle from "../../../assets/style/views/section/profile.module.css";
import profileData from "../../../data/pages/profileData.js";

const Profile = () => {
  return (
    <section id='profile' className={pagesStyle.profile}>
      <div className='Container'>
        <div className={profileStyle.profilecontent}>
          <div className={profileStyle.header}>
            <figure className={profileStyle.avatar}>
              <img src={profileData.avatar}></img>
            </figure>
            <div className={profileStyle.information}>
              <h5>{profileData.name}</h5>
              <h6>{profileData.title}</h6>
              <code>
                <a href={profileData.to}>{profileData.website}</a>
              </code>
            </div>
          </div>

          <div className={profileStyle.body}>
            <h5>About</h5>
            <p>{profileData.about}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
