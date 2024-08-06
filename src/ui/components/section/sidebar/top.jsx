import sidebarStyle from "../../../../assets/style/components/sidebar.module.css";
import Logo from "../../../../../public/FavIcon.svg";

const Top = () => {
  return (
    <section className={sidebarStyle.top}>
      <figure className={sidebarStyle.logo}>
        <img src={Logo}></img>
      </figure>
    </section>
  );
};

export default Top;
