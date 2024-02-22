import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import { useState } from "react";

function Home() {
  const [sidebarStatus, setSidebarStatus] = useState(false);

  const toggleSidebar = () => {
    setSidebarStatus(!sidebarStatus);
  };

  return (
    <>
      <div className="wrapper">
        <Sidebar isOpen={sidebarStatus} />

        <div className="main">
          <Topbar onToggleSidebar={toggleSidebar} />

          <main className="content">
            <div className="container-fluid p-0">
              <div className="row">
                <div className="col-12 d-flex">
                  <div className="w-100">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="card">
                          <div className="card-body">
                            <div className="row">
                              <div className="col mt-0">
                                <h5 className="card-title">Sales</h5>
                              </div>

                              <div className="col-auto">
                                <div className="stat text-primary">
                                  <i
                                    className="align-middle"
                                    data-feather="truck"
                                  ></i>
                                </div>
                              </div>
                            </div>
                            <h1 className="mt-1 mb-3">2.382</h1>
                            <div className="mb-0">
                              <span className="badge badge-primary-light">
                                {" "}
                                <i className="mdi mdi-arrow-bottom-right"></i>{" "}
                                -3.65%{" "}
                              </span>
                              <span className="text-muted">
                                Since last week
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-body">
                            <div className="row">
                              <div className="col mt-0">
                                <h5 className="card-title">Visitors</h5>
                              </div>

                              <div className="col-auto">
                                <div className="stat text-primary">
                                  <i
                                    className="align-middle"
                                    data-feather="users"
                                  ></i>
                                </div>
                              </div>
                            </div>
                            <h1 className="mt-1 mb-3">14.212</h1>
                            <div className="mb-0">
                              <span className="badge badge-success-light">
                                {" "}
                                <i className="mdi mdi-arrow-bottom-right"></i>{" "}
                                5.25%{" "}
                              </span>
                              <span className="text-muted">
                                Since last week
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="card">
                          <div className="card-body">
                            <div className="row">
                              <div className="col mt-0">
                                <h5 className="card-title">Earnings</h5>
                              </div>

                              <div className="col-auto">
                                <div className="stat text-primary">
                                  <i
                                    className="align-middle"
                                    data-feather="dollar-sign"
                                  ></i>
                                </div>
                              </div>
                            </div>
                            <h1 className="mt-1 mb-3">$21.300</h1>
                            <div className="mb-0">
                              <span className="badge badge-success-light">
                                {" "}
                                <i className="mdi mdi-arrow-bottom-right"></i>{" "}
                                6.65%{" "}
                              </span>
                              <span className="text-muted">
                                Since last week
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-body">
                            <div className="row">
                              <div className="col mt-0">
                                <h5 className="card-title">Orders</h5>
                              </div>

                              <div className="col-auto">
                                <div className="stat text-primary">
                                  <i
                                    className="align-middle"
                                    data-feather="shopping-cart"
                                  ></i>
                                </div>
                              </div>
                            </div>
                            <h1 className="mt-1 mb-3">64</h1>
                            <div className="mb-0">
                              <span className="badge badge-danger-light">
                                {" "}
                                <i className="mdi mdi-arrow-bottom-right"></i>{" "}
                                -2.25%{" "}
                              </span>
                              <span className="text-muted">
                                Since last week
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12 d-flex">
                  <div className="card flex-fill">
                    <div className="card-header">
                      <div className="card-actions float-end">
                        <div className="dropdown position-relative">
                          <a
                            href="#"
                            data-bs-toggle="dropdown"
                            data-bs-display="static"
                          >
                            <i
                              className="align-middle"
                              data-feather="more-horizontal"
                            ></i>
                          </a>

                          <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" href="#">
                              Action
                            </a>
                            <a className="dropdown-item" href="#">
                              Another action
                            </a>
                            <a className="dropdown-item" href="#">
                              Something else here
                            </a>
                          </div>
                        </div>
                      </div>
                      <h5 className="card-title mb-0">Latest Projects</h5>
                    </div>
                    <table className="table table-borderless my-0">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th className="d-none d-xxl-table-cell">Company</th>
                          <th className="d-none d-xl-table-cell">Author</th>
                          <th>Status</th>
                          <th className="d-none d-xl-table-cell">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="d-flex">
                              <div className="flex-shrink-0">
                                <div className="bg-light rounded-2">
                                  <img
                                    className="p-2"
                                    src="../../assets/img/icons/brand-1.svg"
                                  />
                                </div>
                              </div>
                              <div className="flex-grow-1 ms-3">
                                <strong>Project Apollo</strong>
                                <div className="text-muted">
                                  Web, UI/UX Design
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="d-none d-xxl-table-cell">
                            <strong>Lechters</strong>
                            <div className="text-muted">Real Estate</div>
                          </td>
                          <td className="d-none d-xl-table-cell">
                            <strong>Vanessa Tucker</strong>
                            <div className="text-muted">HTML, JS, React</div>
                          </td>
                          <td>
                            <div className="d-flex flex-column w-100">
                              <span className="me-2 mb-1 text-muted">65%</span>
                              <div className="progress progress-sm bg-success-light w-100">
                                <div
                                  className="progress-bar bg-success"
                                  role="progressbar"
                                  style={{ width: "65%" }}
                                ></div>
                              </div>
                            </div>
                          </td>
                          <td className="d-none d-xl-table-cell">
                            <a href="#" className="btn btn-light">
                              View
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex">
                              <div className="flex-shrink-0">
                                <div className="bg-light rounded-2">
                                  <img
                                    className="p-2"
                                    src="../../assets/img/icons/brand-2.svg"
                                  />
                                </div>
                              </div>
                              <div className="flex-grow-1 ms-3">
                                <strong>Project Bongo</strong>
                                <div className="text-muted">Web</div>
                              </div>
                            </div>
                          </td>
                          <td className="d-none d-xxl-table-cell">
                            <strong>Cellophane Transportation</strong>
                            <div className="text-muted">Transportation</div>
                          </td>
                          <td className="d-none d-xl-table-cell">
                            <strong>William Harris</strong>
                            <div className="text-muted">HTML, JS, Vue</div>
                          </td>
                          <td>
                            <div className="d-flex flex-column w-100">
                              <span className="me-2 mb-1 text-muted">33%</span>
                              <div className="progress progress-sm bg-danger-light w-100">
                                <div
                                  className="progress-bar bg-danger"
                                  role="progressbar"
                                  style={{ width: "33%" }}
                                ></div>
                              </div>
                            </div>
                          </td>
                          <td className="d-none d-xl-table-cell">
                            <a href="#" className="btn btn-light">
                              View
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex">
                              <div className="flex-shrink-0">
                                <div className="bg-light rounded-2">
                                  <img
                                    className="p-2"
                                    src="../../assets/img/icons/brand-3.svg"
                                  />
                                </div>
                              </div>
                              <div className="flex-grow-1 ms-3">
                                <strong>Project Canary</strong>
                                <div className="text-muted">
                                  Web, UI/UX Design
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="d-none d-xxl-table-cell">
                            <strong>Clemens</strong>
                            <div className="text-muted">Insurance</div>
                          </td>
                          <td className="d-none d-xl-table-cell">
                            <strong>Sharon Lessman</strong>
                            <div className="text-muted">HTML, JS, Laravel</div>
                          </td>
                          <td>
                            <div className="d-flex flex-column w-100">
                              <span className="me-2 mb-1 text-muted">50%</span>
                              <div className="progress progress-sm bg-warning-light w-100">
                                <div
                                  className="progress-bar bg-warning"
                                  role="progressbar"
                                  style={{ width: "50%" }}
                                ></div>
                              </div>
                            </div>
                          </td>
                          <td className="d-none d-xl-table-cell">
                            <a href="#" className="btn btn-light">
                              View
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex">
                              <div className="flex-shrink-0">
                                <div className="bg-light rounded-2">
                                  <img
                                    className="p-2"
                                    src="../../assets/img/icons/brand-4.svg"
                                  />
                                </div>
                              </div>
                              <div className="flex-grow-1 ms-3">
                                <strong>Project Edison</strong>
                                <div className="text-muted">UI/UX Design</div>
                              </div>
                            </div>
                          </td>
                          <td className="d-none d-xxl-table-cell">
                            <strong>Affinity Investment Group</strong>
                            <div className="text-muted">Finance</div>
                          </td>
                          <td className="d-none d-xl-table-cell">
                            <strong>Vanessa Tucker</strong>
                            <div className="text-muted">HTML, JS, React</div>
                          </td>
                          <td>
                            <div className="d-flex flex-column w-100">
                              <span className="me-2 mb-1 text-muted">80%</span>
                              <div className="progress progress-sm bg-success-light w-100">
                                <div
                                  className="progress-bar bg-success"
                                  role="progressbar"
                                  style={{ width: "80%" }}
                                ></div>
                              </div>
                            </div>
                          </td>
                          <td className="d-none d-xl-table-cell">
                            <a href="#" className="btn btn-light">
                              View
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex">
                              <div className="flex-shrink-0">
                                <div className="bg-light rounded-2">
                                  <img
                                    className="p-2"
                                    src="../../assets/img/icons/brand-5.svg"
                                  />
                                </div>
                              </div>
                              <div className="flex-grow-1 ms-3">
                                <strong>Project Indigo</strong>
                                <div className="text-muted">
                                  Web, UI/UX Design
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="d-none d-xxl-table-cell">
                            <strong>Konsili</strong>
                            <div className="text-muted">Retail</div>
                          </td>
                          <td className="d-none d-xl-table-cell">
                            <strong>Christina Mason</strong>
                            <div className="text-muted">HTML, JS, Vue</div>
                          </td>
                          <td>
                            <div className="d-flex flex-column w-100">
                              <span className="me-2 mb-1 text-muted">78%</span>
                              <div className="progress progress-sm bg-primary-light w-100">
                                <div
                                  className="progress-bar bg-primary"
                                  role="progressbar"
                                  style={{ width: "78%" }}
                                ></div>
                              </div>
                            </div>
                          </td>
                          <td className="d-none d-xl-table-cell">
                            <a href="#" className="btn btn-light">
                              View
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
