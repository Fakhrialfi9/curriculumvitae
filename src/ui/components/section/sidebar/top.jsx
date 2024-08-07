import { Link } from "react-scroll";
import sidebarStyle from "../../../../assets/style/components/sidebar.module.css";
import Logo from "../../../../../public/FavIcon.svg";

const Top = () => {
  return (
    <section className={sidebarStyle.top}>
      <figure className={sidebarStyle.logo}>
        <Link to='profile' smooth={true} duration={350} spy={true} exact='true' offset={-100}>
          <img src={Logo}></img>
        </Link>
      </figure>
    </section>
  );
};

export default Top;
