import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { centerData } from "../../../../data/sidebar/centerData.js";
import sidebarStyle from "../../../../assets/style/components/sidebar.module.css";

const Center = () => {
  useEffect(() => {
    const sections = centerData.map((dock) => ({
      name: dock.name.toLowerCase(),
      element: document.getElementById(dock.name.toLowerCase()),
    }));

    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const { element, name } = section;

        if (element) {
          const { offsetTop, offsetHeight } = element;
          const isActive = scrollPosition >= offsetTop - 350 && scrollPosition < offsetTop + offsetHeight - 350;

          if (isActive) {
            setActiveLink(name);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [activeLink, setActiveLink] = useState(centerData[0].name.toLowerCase());

  const handleLinkClick = (link) => {
    setActiveLink(link);
    document.documentElement.style.overflow = "auto";
    document.body.style.overflow = "auto";
  };

  return (
    <section className={sidebarStyle.center}>
      <ul>
        {centerData.map((centerData) => (
          <li key={centerData.index}>
            <Link
              className={activeLink === centerData.name.toLowerCase() ? sidebarStyle.active : ""}
              onClick={() => handleLinkClick(centerData.name.toLowerCase())}
              to={centerData.name.toLowerCase()}
              smooth={true}
              duration={350}
              spy={true}
              exact='true'
              offset={-50}>
              <centerData.icon size={18} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Center;
