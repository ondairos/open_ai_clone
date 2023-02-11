import React from "react";

export default function OptionSelection({ arrayItems }) {
  return (
    <>
      <h1 className="heading">React AI app</h1>

      {/* array items */}
      <div className="grid-main">
        {arrayItems.map((element) => {
          return (
            <div className="grid-child">
              <h3>{element.name}</h3>
              <p>{element.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
