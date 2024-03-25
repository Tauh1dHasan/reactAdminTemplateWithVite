import React, { useState, useEffect } from "react";
import axios from "axios";

import Layout from "../components/Layout";

function TaskIndex() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/tasks")
      .then((response) => {
        const formatedTasks = response.data.data.map((task) => ({
          ...task,
          created_at: new Date(task.created_at).toLocaleString(),
        }));
        setTasks(formatedTasks);
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
      });
  }, []);

  return (
    <Layout>
      <div
        className="modal fade"
        id="centeredModalPrimary"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Centered modal</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body m-3">
              <p className="mb-0">
                Use Bootstrap’s JavaScript modal plugin to add dialogs to your
                site for lightboxes, user notifications, or completely custom
                content.
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid p-0">
        <h1 className="h3 mb-3">Manage Task</h1>

        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h5 className="card-title mb-0">Task Index</h5>
                {/* <button className="btn btn-pill btn-primary">
                  Add new task
                </button> */}
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#centeredModalPrimary"
                >
                  Add new task
                </button>
              </div>
              <div className="card-body">
                <div className="col-12">
                  <div className="card">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th style={{ width: "40%" }}>Title</th>
                          <th style={{ width: "20%" }}>Status</th>
                          <th style={{ width: "25%" }}>Created At</th>
                          <th style={{ width: "25%" }}>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tasks.map((task) => (
                          <tr key={task.id}>
                            <td>{task.title}</td>
                            <td>{task.status}</td>
                            <td>{task.created_at}</td>
                            <td className="table-action">
                              <a href="#">
                                <i
                                  className="fa fa-pencil"
                                  aria-hidden="true"
                                ></i>
                              </a>
                              <a href="#" style={{ marginLeft: "8px" }}>
                                <i
                                  className="fa fa-trash"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default TaskIndex;
