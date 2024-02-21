import React, { useState, useEffect } from "react";

function CreateForm({ title, record, saveFn }) {
  const [text, setText] = useState("");
  useEffect(() => {
    setText(record?.text ? record.text : "")
  }, [record]);

  const handleTextChange = event => {
    setText(event.target.value);
  };
  return (
    <div className="d-flex flex-column align-items-center">
      <h1 className="">{title}</h1>
      <form className="d-flex flex-column align-items-start justify-content-center w-75">
        <label htmlFor="text">Text:</label>
        <textarea
          id="text"
          type="text"
          name="text"
          placeholder="Type a text..."
          className="w-100 my-2"
          rows="7"
          value={text}
          onChange={handleTextChange}
          required
        ></textarea>
        {record?.id && <button type="button" className="btn btn-info my-3" onClick={() => saveFn(record?.id, text)}>Save</button>}
        {!record?.id && <button type="button" className="btn btn-info my-3" onClick={() => saveFn(text)}>Save</button>}
      </form>
    </div>
  );
}

export default CreateForm;
