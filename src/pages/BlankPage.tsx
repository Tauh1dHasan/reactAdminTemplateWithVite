import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import { useState } from "react";

function BlankPage() {
  const [sidebarStatus, setSidebarStatus] = useState(false);

  const toggleSidebar = () => {
    setSidebarStatus(!sidebarStatus);
  };

  return (
    <div className="wrapper">
      <Sidebar isOpen={sidebarStatus} />

      <div className="main">
        <Topbar onToggleSidebar={toggleSidebar} />

        <main className="content">
          <div className="container-fluid p-0">
            <h1 className="h3 mb-3">Blank Page</h1>

            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title mb-0">Empty card</h5>
                  </div>
                  <div className="card-body"></div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default BlankPage;
