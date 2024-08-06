import { useEffect } from "react";
import notfoundStyle from "../../assets/style/views/notfoundview.module.css";
import Star3DAnimation from "../../lib/star3DAnimation.jsx";
import TypingEffect from "../../lib/TypingEffect.tsx";

const NotFound = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "/";
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={notfoundStyle.notfound}>
      <Star3DAnimation className={notfoundStyle.star} />
      <div className='Container'>
        <div className={notfoundStyle.contentnotfound}>
          <div className={notfoundStyle.heading}>
            <h5>404</h5>
            <h5>|</h5>
            <span>
              <TypingEffect className={notfoundStyle.description} text='Sorry, the page you are looking for could not be found.' speed={100} />
            </span>
          </div>
        </div>
      </div>
      <div className={notfoundStyle.footer}>
        <h5>Fakhrialfi9_ Studio © 2021 – 2024. All rights reserved.</h5>
      </div>
    </section>
  );
};

export default NotFound;
