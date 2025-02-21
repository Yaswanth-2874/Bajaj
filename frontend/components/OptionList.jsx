import React, { useState } from "react";

const options = [
  { key: "alphabets", label: "Alphabets" },
  { key: "numbers", label: "Numbers" },
  { key: "highestAlphabet", label: "Highest Alphabet" },
];

const OptionList = ({ jsonData }) => {
  const [selected, setSelected] = useState(
    options.reduce((acc, option) => ({ ...acc, [option.key]: true }), {})
  );

  return (
    <div>
      <h2>Select Options</h2>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {options.map((option) => (
          <label key={option.key}>
            <input
              type="checkbox"
              checked={selected[option.key]}
              onChange={() =>
                setSelected({
                  ...selected,
                  [option.key]: !selected[option.key],
                })
              }
            />
            {option.label}
          </label>
        ))}
      </div>

      <h2>Selected Options</h2>
      <ul>
        {options.map(
          (option) =>
            selected[option.key] &&
            jsonData[option.key] && (
              <li key={option.key}>
                {option.label}:{" "}
                {Array.isArray(jsonData[option.key])
                  ? jsonData[option.key].join(", ")
                  : jsonData[option.key]}
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export default OptionList;
