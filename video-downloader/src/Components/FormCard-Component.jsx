import React, { useState } from "react";

function FormCard() {
  const [inputData, setInputData] = useState("");

  function downloadFunc() {
    console.log(inputData);
  }

  return (
    <>
      <div className="titleContainer">
        <img
          src="/src/assets/rb_860.png"
          alt="Lightning Logo"
          className="logo"
        />
      </div>
      <div className="container">
        <h2 className="title">Vision Video Downloader</h2>

        <div className="inputContainer">
          <input
            onChange={(e) => {
              setInputData(e.target.value);
            }}
            type="text"
            placeholder="Paste video URL here..."
            className="input"
          />

          <select name="dropdown" id="options">
            <option value="Option">Instagram</option>
            <option value="YouTube">YouTube</option>
          </select>
        </div>

        <button className="button" onClick={downloadFunc}>
          DOWNLOAD
        </button>
      </div>

      <div className="footerContainer">
        <h3>Link Download</h3>
        <p>
          To Download A Video From YouTube Or Instagram,
          <br /> Just Copy The Link And Paste In this Input Box.
        </p>
      </div>
    </>
  );
}

export default FormCard;
