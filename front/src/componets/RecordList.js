import React, { useState, useEffect } from "react";
import axios from "axios";

function RecordList() {
  const [records, setRecords] = useState("");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_ENDPOIN}/api/record/`)
      .then((response) => {
        setRecords(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1 className="">Record List</h1>
      {records.length !== 0 &&
        records.map((record) => (
          <p key={record.id}>
            {record.id} - {record.text}
          </p>
        ))}
    </div>
  );
}

export default RecordList;
