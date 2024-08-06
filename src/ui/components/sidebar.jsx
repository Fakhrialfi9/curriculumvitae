import sidebarStyle from "../../assets/style/components/sidebar.module.css";
import Top from "./section/sidebar/top.jsx";
import Center from "./section/sidebar/center.jsx";
import Bottom from "./section/sidebar/bottom.jsx";

const Sidebar = () => {
  return (
    <nav className={sidebarStyle.main}>
      <div className={sidebarStyle.sidebar}>
        <div className={sidebarStyle.content}>
          <Top />
          <Center />
          <Bottom />
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
