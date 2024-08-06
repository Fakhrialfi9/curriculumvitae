import { useState, useEffect } from "react";
import { SquareArrowOutUpRight, Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";
import { bottomData } from "../../../../data/sidebar/bottomData.js";
import sidebarStyle from "../../../../assets/style/components/sidebar.module.css";

const Bottom = () => {
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

  return (
    <section className={sidebarStyle.bottom}>
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
    </section>
  );
};

export default Bottom;
