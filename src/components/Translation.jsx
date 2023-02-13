import React from "react";

export default function Translation({ doStuffProp, setInputProp, resultProp }) {
  return (
    <div>
      <p>Your query: </p>
      <textarea
        className="text-area"
        cols={50}
        rows={10}
        onChange={(event) => setInputProp(event.target.value)}
      ></textarea>
      <button className="actionBtn" onClick={doStuffProp}>
        Chat GPT
      </button>

      <h3 className="result-text">{resultProp.length > 0 ? resultProp : ""}</h3>
    </div>
  );
}
