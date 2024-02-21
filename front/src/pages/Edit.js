import React from "react";
import CreateForm from "../componets/CreateForm";
import { useParams } from 'react-router-dom';

function Edit() {
  const { id } = useParams();
  // const [item, setItem] = useState(null);
  console.log("id ", id )
  return (
    <>
      <div className="my-5">
        <CreateForm title="Edit Record" />
      </div>
    </>
  );
}

export default Edit;
