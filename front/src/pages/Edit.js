import React, { useState, useEffect } from "react";
import axios from "axios";
import CreateForm from "../componets/CreateForm";
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [record, setRecord] = useState({ id: null, text: null });

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_ENDPOINT}/api/record/${id}/`)
      .then((response) => {
        setRecord({ id: response.data.id, text: response.data.text })
      })
      .catch((error) => {
        console.log("Error:", error?.response?.data?.error ? error?.response?.data?.error : error);
        navigate(`/`)
      });
  }, [id, navigate]);

  const editFn = (id, text) => {
    axios
      .put(`${process.env.REACT_APP_SERVER_ENDPOINT}/api/record/${id}/`, { text: text })
      .then((response) => {
        // console.log("response:", response);
        navigate(`/`)
      })
      .catch((error) => {
        console.log("Error:", error?.response?.data?.error ? error?.response?.data?.error : error);
      });
  }
  return (
    <>
      <div className="my-5">
        <CreateForm title="Edit Record" record={record} saveFn={editFn} />
      </div>
    </>
  );
}

export default Edit;
