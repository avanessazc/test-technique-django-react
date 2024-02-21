import React, { useState, useEffect } from "react";
import axios from "axios";
import RecordList from "../componets/RecordList";

function Home() {
  const [records, setRecords] = useState("");
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_ENDPOINT}/api/record/`)
      .then((response) => {
        setRecords(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="mt-5">
        <RecordList records={records} />
      </div>
    </>
  );
}

export default Home;
