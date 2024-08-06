import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { centerData } from "../../data/sidebar/centerData.js";
import { bottomData } from "../../data/sidebar/bottomData.js";
import { Link } from "react-scroll";
import { SquareArrowOutUpRight, Sun, Moon } from "lucide-react";
import dockStyle from "../../assets/style/components/dock.module.css";
import Logo from "../../../public/FavIcon.svg";

const Dock = () => {
  const [SidebarActive, setSidebarActive] = useState(false);

  const handleSidebarMenu = () => {
    setSidebarActive(!SidebarActive);
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
  };

  const handleCloseSidebar = () => {
    setSidebarActive(false);
    document.documentElement.style.overflow = "auto";
    document.body.style.overflow = "auto";
  };

  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const handleSchemaColor = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
    document.body.classList.toggle("dark", newMode);
    document.body.classList.toggle("light", !newMode);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      const isDark = savedTheme === "dark";
      setIsDarkMode(isDark);
      document.body.classList.toggle("dark", isDark);
      document.body.classList.toggle("light", !isDark);
    }
  }, []);

  const handleCopyLink = (url) => {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        alert("Link copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  // Handle Scroll to Set Active Link
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
    setSidebarActive(false);
    document.documentElement.style.overflow = "auto";
    document.body.style.overflow = "auto";
  };

  return (
    <div className={dockStyle.main}>
      <div className={dockStyle.dock}>
        <div className={dockStyle.content}>
          <div onClick={handleSidebarMenu} className={dockStyle.hamburger}>
            <div className={dockStyle.bar}></div>
            <div className={dockStyle.bar}></div>
            <div className={dockStyle.bar}></div>
          </div>
        </div>
      </div>

      <div className={`${dockStyle.sidebar} ${SidebarActive ? dockStyle.active : ""}`}>
        <div className={dockStyle.card}>
          {/* Header Content */}
          <div className={dockStyle.header}>
            <div className={dockStyle.logo}>
              <img src={Logo}></img>
            </div>
            <div onClick={handleCloseSidebar} className={dockStyle.iconclose}>
              <X size={20} />
            </div>
          </div>
          {/* Header Content */}

          {/* Menu Conten */}
          <div className={dockStyle.menu}>
            <ul>
              {centerData.map((centerData) => (
                <li key={centerData.index}>
                  <Link
                    className={activeLink === centerData.name.toLowerCase() ? dockStyle.active : ""}
                    onClick={() => handleLinkClick(centerData.name.toLowerCase())}
                    to={centerData.name.toLowerCase()}
                    smooth={true}
                    duration={350}
                    spy={true}
                    exact='true'
                    offset={-50}>
                    <centerData.icon size={18} /> {centerData.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Menu Conten */}

          {/* Setting Mode */}
          <div className={dockStyle.setting}>
            <ul>
              {bottomData.map((bottomData) => (
                <li key={bottomData.index}>
                  {bottomData.name === "Light" ? (
                    <span onClick={handleSchemaColor}>{isDarkMode ? <Moon size={18} /> : <Sun size={18} />}</span>
                  ) : bottomData.name === "Share" ? (
                    <span onClick={() => handleCopyLink(bottomData.to)}>
                      <SquareArrowOutUpRight size={18} />
                    </span>
                  ) : (
                    <Link to={bottomData.to}>
                      <bottomData.icon size={18} />
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          {/* Setting Mode */}
        </div>
      </div>

      <div onClick={handleCloseSidebar} className={`${dockStyle.backgroundblur} ${SidebarActive ? dockStyle.active : ""}`}></div>
    </div>
  );
};

export default Dock;
