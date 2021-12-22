export const ReadOnlyRow = ({ issue, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{issue.id}</td>
      <td>{issue.title}</td>
      <td>{issue.status}</td>
      <td>{issue.url}</td>
      <td>{issue.created}</td>
      <td>{issue.updated}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, issue)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(issue.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};
