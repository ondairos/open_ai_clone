import React from "react";

export default function Translation({ doStuffProp, setInputProp }) {
  return (
    <div>
      <p>Translation</p>
      <textarea
        className="text-area"
        cols={50}
        rows={10}
        onChange={(event) => setInputProp(event.target.value)}
      ></textarea>
      <button className="actionBtn">Chat GPT</button>
    </div>
  );
}
