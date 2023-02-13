import React from "react";

export default function OptionSelection({ arrayItems, selectOptionProp }) {
  return (
    <>
      <div className="heading-div">
        <h1 className="heading">React AI app</h1>
      </div>
      {/* array items */}
      <div className="grid-main">
        {arrayItems.map((element) => {
          return (
            <div
              className="grid-child"
              onClick={() => selectOptionProp(element.option)}
              key={element.id}
            >
              <h3>{element.name}</h3>
              <p>{element.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
