import { Link, useLocation } from "react-router-dom";

function Sidebar({ isOpen }: { isOpen: any }) {
  const location = useLocation();

  return (
    <>
      <nav
        id="sidebar"
        className={`sidebar js-sidebar ${isOpen ? "collapsed" : ""}`}
      >
        <div className="sidebar-content js-simplebar">
          <Link className="sidebar-brand" to="/">
            <span className="sidebar-brand-text align-middle">
              ReactJS Admin
            </span>
          </Link>

          <div className="sidebar-user">
            <div className="d-flex justify-content-center">
              <div className="flex-shrink-0">
                <img
                  src="../../assets/img/avatars/avatar.jpg"
                  className="avatar img-fluid rounded me-1"
                  alt="User Profile"
                />
              </div>
              <div className="flex-grow-1 ps-2">
                <span className="sidebar-user-title">User Name</span>

                <div className="sidebar-user-subtitle">Designer</div>
              </div>
            </div>
          </div>

          <ul className="sidebar-nav">
            {/* <li className="sidebar-header">Pages</li> */}

            <li
              className={`sidebar-item ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              <Link className="sidebar-link" to="/">
                <i className="fa-solid fa-chalkboard-user"></i>
                <span className="align-middle">Dashboard</span>
              </Link>
            </li>

            <li
              className={`sidebar-item ${
                location.pathname === "/blankPage" ? "active" : ""
              }`}
            >
              <Link className="sidebar-link" to="/blankPage">
                <i className="fa-regular fa-file"></i>
                <span className="align-middle">Blank Page</span>
              </Link>
            </li>

            <li className="sidebar-item">
              <a
                data-bs-target="#multi"
                data-bs-toggle="collapse"
                className="sidebar-link collapsed"
              >
                <i className="fa-solid fa-arrow-turn-down"></i>
                <span className="align-middle">Multi Level</span>
              </a>
              <ul
                id="multi"
                className="sidebar-dropdown list-unstyled collapse"
                data-bs-parent="#sidebar"
              >
                <li className="sidebar-item">
                  <a
                    data-bs-target="#multi-2"
                    data-bs-toggle="collapse"
                    className="sidebar-link collapsed"
                  >
                    Two Levels
                  </a>
                  <ul
                    id="multi-2"
                    className="sidebar-dropdown list-unstyled collapse"
                  >
                    <li className="sidebar-item">
                      <a className="sidebar-link" href="#">
                        Item 1
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a className="sidebar-link" href="#">
                        Item 2
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sidebar-item">
                  <a
                    data-bs-target="#multi-3"
                    data-bs-toggle="collapse"
                    className="sidebar-link collapsed"
                  >
                    Three Levels
                  </a>
                  <ul
                    id="multi-3"
                    className="sidebar-dropdown list-unstyled collapse"
                  >
                    <li className="sidebar-item">
                      <a
                        data-bs-target="#multi-3-1"
                        data-bs-toggle="collapse"
                        className="sidebar-link collapsed"
                      >
                        Item 1
                      </a>
                      <ul
                        id="multi-3-1"
                        className="sidebar-dropdown list-unstyled collapse"
                      >
                        <li className="sidebar-item">
                          <a className="sidebar-link" href="#">
                            Item 1
                          </a>
                        </li>
                        <li className="sidebar-item">
                          <a className="sidebar-link" href="#">
                            Item 2
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="sidebar-item">
                      <a className="sidebar-link" href="#">
                        Item 2
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Sidebar;
