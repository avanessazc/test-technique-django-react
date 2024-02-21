import React, { useState } from "react";
import axios from "axios";
import CreateForm from "../componets/CreateForm";
import { useNavigate } from "react-router-dom";

function Create() {
  const navigate = useNavigate();
  const [error, setError] = useState([]);
  const createFn = (text) => {
    axios
      .post(
        `${process.env.REACT_APP_SERVER_ENDPOINT}/api/record/`,
        { text },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log("response:", response);
        navigate(`/`);
      })
      .catch((error) => {
        if (error?.response?.data?.text.length > 0) {
          setError(error?.response?.data?.text);
        }
        console.log("Error:", error);
      });
  };
  return (
    <>
      <div className="my-5">
        <CreateForm title="Create Record" saveFn={createFn} error={error} />
      </div>
    </>
  );
}

export default Create;
