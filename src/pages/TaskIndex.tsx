import React, { useState, useEffect } from "react";
import axios from "axios";

import Layout from "../components/Layout";

function TaskIndex() {
  const [tasks, setTasks] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    is_done: false,
  });

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

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/tasks", formData)
      .then((response) => {
        // alert("Task added successfully:", response.data);
        setFormData({ title: "", is_done: false });
      })
      .catch((error) => {
        console.error("Error adding task:", error);
      });
  };

  return (
    <Layout>
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
                            <td>
                              <span
                                className={`badge ${
                                  task.status == "Open"
                                    ? "bg-success"
                                    : "bg-danger"
                                }`}
                              >
                                {task.status}
                              </span>
                            </td>
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

      {/* Add new task Modal Start */}
      <div
        className="modal fade"
        id="centeredModalPrimary"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <div className="modal-header">
                <h5 className="modal-title" id="centeredModalPrimaryLabel">
                  Add new task
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body m-3">
                <div className="mb-3">
                  <label htmlFor="taskTitle" className="form-label">
                    Task Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="taskTitle"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="is_done"
                    name="is_done"
                    checked={formData.is_done}
                    onChange={handleInputChange}
                  />
                  <label className="form-check-label" htmlFor="is_done">
                    check if done
                  </label>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Add new task Modal End */}
    </Layout>
  );
}

export default TaskIndex;
