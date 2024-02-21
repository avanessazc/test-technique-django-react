import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function RecordList({ records }) {
  const navigate = useNavigate();
  const handleEditClick = (id) => {
    navigate(`/edit/${id}`)
  }
  const handleDeleteClick = () => {
    console.log("Delete...")
  }
  const handleAddClick = () => {
    console.log("Add new record...")
  }
  return (
    <div className="d-flex flex-column align-items-center w-100">
      <div className="d-flex ">
        <h1 className="">Record List</h1><button type="button" className="btn btn-light ms-2" onClick={() => handleAddClick()}>
          ➕ New
        </button>
      </div>
      <div className="w-100">
        <div className="d-flex align-items-center justify-content-center fs-5">
          <div className="p-3 text-center ">ID</div>
          <div className="p-2 text-center w-100">TEXT</div>
          <div className="p-2 text-center">ACTIONS</div>
        </div>
        {records.length !== 0 &&
          records.map((record) => (
            <div key={record.id} className="d-flex align-items-center">
              <div className="p-3">{record.id}</div>
              <div className="p-2 w-100">{record.text}</div>
              <div className="d-flex p-2">
                <button type="button" className="btn btn-light ms-2" onClick={() => handleDeleteClick()}>
                  🗑️
                </button>
                <button type="button" className="btn btn-light ms-2" onClick={() => handleEditClick(record.id)}>
                  ✎
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default RecordList;
