import React, { useState, useEffect } from "react";
import axios from "axios";

function CreateForm({title}) {
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
          // value={values.username}
          required
        // onChange={handleChange}
        ></textarea>
        <button type="button" className="btn btn-info my-3">Save</button>
      </form>  </div>
  );
}

export default CreateForm;
