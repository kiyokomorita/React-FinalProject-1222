import styled from "styled-components";
import { useState, Fragment } from "react";
// import "./App.css";
import { EditableRow } from "./components/EditableRow";
import { ReadOnlyRow } from "./components/ReadOnlyRow";
import data from "./mock-data.json";

export default function App() {
  const [issues, setIssues] = useState(data);
  const [addFormData, setAddFormData] = useState({
    id: "",
    title: "",
    status: "",
    url: "",
    created: "",
    updated: ""
  });

  const [editFormData, setEditFormData] = useState({
    id: "",
    title: "",
    status: "",
    url: "",
    created: "",
    updated: ""
  });

  const [editIssueId, setEditIssueId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    const newIssue = {
      id: addFormData.id,
      title: addFormData.title,
      status: addFormData.status,
      url: addFormData.url,
      created: addFormData.created,
      updated: addFormData.updated
    };

    const newIssues = [...issues, newIssue];
    setIssues(newIssues);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedIssue = {
      id: editFormData.id,
      title: editFormData.title,
      status: editFormData.status,
      url: editFormData.url,
      created: editFormData.created,
      updated: editFormData.updated
    };
    const newIssues = [...issues];

    const index = issues.findIndex((issue) => issue.id === editIssueId);

    newIssues[index] = editedIssue;

    setIssues(newIssues);
    setEditIssueId(null);
  };

  const handleEditClick = (event, issue) => {
    event.preventDefault();
    setEditIssueId(issue.id);

    const formValues = {
      id: issue.id,
      title: issue.title,
      status: issue.status,
      url: issue.url,
      created: issue.created,
      updated: issue.updated
    };
    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditIssueId(null);
  };

  const handleDeleteClick = (issueId) => {
    const newIssues = [...issues];

    const index = issues.findIndex((issue) => issue.id === issueId);

    newIssues.splice(index, 1);

    setIssues(newIssues);
  };

  return (
    <div className="App">
      {/* <div className="form-Container"> */}
      <SFormcontainer>
        <form onSubmit={handleEditFormSubmit}>
          {/* <STable> */}

          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Title</th>
                <th>State</th>
                <th>Url</th>
                <th>Created at</th>
                <th>Updated at</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {issues.map((issue) => (
                <Fragment>
                  {editIssueId === issue.id ? (
                    <EditableRow
                      editFormData={editFormData}
                      handleEditFormChange={handleEditFormChange}
                      handleCancelClick={handleCancelClick}
                    />
                  ) : (
                    <ReadOnlyRow
                      issue={issue}
                      handleEditClick={handleEditClick}
                      handleDeleteClick={handleDeleteClick}
                    />
                  )}
                </Fragment>
              ))}
            </tbody>
            {/* </STable> */}
          </table>
        </form>
        {/* </div> */}
        {/* </SFormcontainer> */}

        <h2>Add a issue</h2>
        <form onSubmit={handleAddFormSubmit}>
          <input
            type="text"
            name="id"
            required="required"
            placeholder="Enter id.."
            onChange={handleAddFormChange}
          />
          <input
            type="text"
            name="title"
            required="required"
            placeholder="Enter a title.."
            onChange={handleAddFormChange}
          />
          <input
            type="status"
            name="status"
            required="required"
            placeholder="Enter a status.."
            onChange={handleAddFormChange}
          />
          <input
            type="text"
            name="url"
            required="required"
            placeholder="Enter a url"
            onChange={handleAddFormChange}
          />
          <input
            type="text"
            name="created"
            required="required"
            placeholder="Enter a name.."
            onChange={handleAddFormChange}
          />
          <input
            type="text"
            name="updated"
            required="required"
            placeholder="Enter a name.."
            onChange={handleAddFormChange}
          />
          <button type="submit">Add</button>
        </form>
      </SFormcontainer>
    </div>
  );
}

const SFormcontainer = styled.div`
  table {
    border-collapse: collapse;
    width: 100%;
  }

  th,
  td {
    border: 1px solid #ffffff;
    text-align: left;
    padding: 8px;
    font-size: 32px;
  }

  th {
    background-color: #fc46aa;
  }

  td {
    background-color: rgb(255, 192, 203);
  }

  form {
    display: flex;
    gap: 5px;
  }

  form td:last-child {
    display: flex;
    justify-content: space-evenly;
  }

  form * {
    font-size: 28px;
  }
`;
