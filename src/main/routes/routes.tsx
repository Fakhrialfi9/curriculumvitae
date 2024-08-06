import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../layout/layout.jsx";
import PagesViews from "../../ui/views/pages.jsx";
import NotFoundView from "../../ui/views/notfoundview.jsx";

const routes: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Routes 404 */}
        <Route path='*' element={<NotFoundView />} />
        {/* Routes 404 */}
        <Route path='/' element={<Layout />}>
          <Route index path='/' element={<PagesViews />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default routes;
