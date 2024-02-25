import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Footer from "./Footer";

import { useState } from "react";

function Layout({ children }: { children: any }) {
  const [sidebarStatus, setSidebarStatus] = useState(false);

  const toggleSidebar = () => {
    setSidebarStatus(!sidebarStatus);
  };

  return (
    <div className="wrapper">
      <Sidebar isOpen={sidebarStatus} />

      <div className="main">
        <Topbar onToggleSidebar={toggleSidebar} />

        <main className="content">{children}</main>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
