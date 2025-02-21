import React, { useState } from "react";
import axios from "axios";
import OptionList from "../components/OptionList";

const App = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const options = [
    { key: "alphabets", label: "Alphabets" },
    { key: "numbers", label: "Numbers" },
    { key: "highestAlphabet", label: "Highest Alphabet" },
  ];

  const handleSubmit = async () => {
    try {
      console.log(input);
      const res = await axios.post("https://bajaj-8ugh.onrender.com/bfhl", {
        data: JSON.parse(input),
      });
      setResponse(res.data);
      setError("");
    } catch (err) {
      console.log(err);
      setError("Invalid JSON format or request error.");
      setResponse(null);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}>
      <h2>Bajaj Challenge</h2>
      <textarea
        rows="4"
        cols="50"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {response && (
        <div>
          <OptionList jsonData={response} />
        </div>
      )}
    </div>
  );
};

export default App;
