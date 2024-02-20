import React from "react";
import RecordList from "../componets/RecordList";
import CreateForm from "../componets/CreateForm";

function homepage() {
  return (
    <>
      <div className="my-5">
        <CreateForm />
      </div>
      <div className="mt-5">
        <RecordList />
      </div>
    </>
  );
}

export default homepage;
