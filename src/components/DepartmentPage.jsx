import React, { useState, useEffect } from 'react';
import '@inovua/reactdatagrid-enterprise/index.css';
import ReactDataGrid from '@inovua/reactdatagrid-enterprise';

const gridStyle = { minHeight: 550 };

const DepartmentPage = () => {
  const [departments, setDepartments] = useState([]);
  const [editedDepartment, setEditedDepartment] = useState(null);

  useEffect(() => {
    // Fetch data 
    fetch('http://127.0.0.1:8000/api/departments/')
      .then(response => response.json())
      .then(data => setDepartments(data.departments))
      .catch(error => console.error('Error fetching data:', error));
  }, []); // The empty dependency array ensures this effect runs only once on component mount

  const handleEditClick = (departmentId) => {
    // Set the department to be edited
    setEditedDepartment(departmentId);
  };

  const handleSaveClick = () => {
    // Implement the logic to save the changes made to the edited department
    // For simplicity, let's assume you have an API endpoint to update the department
    // You would send a request to update the department data
    // After successfully updating, reset the editedDepartment state
    console.log(`Save button clicked for department with ID: ${editedDepartment}`);
    setEditedDepartment(null);
  };

  const handleCancelClick = () => {
    // Cancel the editing by resetting the editedDepartment state
    setEditedDepartment(null);
  };

  const columns = [
    { name: 'id', header: 'Id', defaultWidth: 80, defaultVisible: false },
    { name: 'Name', header: 'Name', defaultFlex: 1, editor: 'text' },
    { name: 'Diagnostics', header: 'Diagnostics', defaultFlex: 1, editor: 'text' },
    { name: 'Location', header: 'Location', defaultFlex: 1, editor: 'text' },
    { name: 'Specialization', header: 'Specialization', defaultFlex: 1, editor: 'text' },
    {
      name: 'Edit',
      header: 'Edit',
      defaultFlex: 1,
      render: ({ data, dataIndex }) => (
        editedDepartment === data.id ? (
          <>
            <button onClick={handleSaveClick}>Save</button>
            <button onClick={handleCancelClick}>Cancel</button>
          </>
        ) : (
          <button onClick={() => handleEditClick(data.id)}>Edit</button>
        )
      ),
    },
  ];

  return (
    <ReactDataGrid
      idProperty="id"
      style={gridStyle}
      columns={columns}
      dataSource={departments}
      editable={editedDepartment !== null}
    />
  );
}

export default DepartmentPage;
