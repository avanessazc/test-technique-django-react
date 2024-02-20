import React, { useState, useEffect } from "react";
import axios from "axios";

function CreateForm() {
  return (
    <div>
      <h1 className="">Create Record</h1>
      <form className="d-flex align-items-center justify-content-center">
        <label for="text">Text:</label>
        <textarea
          id="text"
          type="text"
          name="text"
          placeholder="Type a text..."
          className="w-75"
          rows="4" 
          // value={values.username}
          required
          // onChange={handleChange}
        ></textarea>
        <button type="button" class="btn btn-light ms-2">Save</button>
      </form>
    </div>
  );
}

export default CreateForm;
