import { Outlet } from "react-router-dom";
import layoutStyle from "../style/layout.module.css";
import Sidebar from "../../ui/components/sidebar.jsx";
import Dock from "../../ui/components/dock.jsx";
import Footer from "../../ui/components/footer.jsx";
import ScrollToTop from "../../lib/scrollToTop.tsx";

const Layout = () => {
  return (
    <div className={layoutStyle.layout}>
      {/* Sidebar Layout */}
      <header className={layoutStyle.header}>
        <Sidebar />
      </header>
      {/* Sidebar Layout */}

      {/* Dock Layout */}
      <header className={layoutStyle.dock}>
        <Dock />
      </header>
      {/* Dock Layout */}

      <main className={layoutStyle.main}>
        {/* Pages Layout */}
        <aside className={layoutStyle.pages}>
          <ScrollToTop />
          <Outlet />
        </aside>
        {/* Pages Layout */}

        {/* Footer Layout */}
        <footer className={layoutStyle.footer}>
          <Footer />
        </footer>
        {/* Footer Layout */}
      </main>
    </div>
  );
};

export default Layout;
