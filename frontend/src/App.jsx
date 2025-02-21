import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    console.log("Submit button clicked!"); // Debugging log
    console.log("Current input value:", input); // Debugging log

    try {
      const parsedData = JSON.parse(input);
      console.log("Parsed JSON:", parsedData); // Debugging log

      const res = await axios.post("http://localhost:3000/bfhl", {
        data: parsedData,
      });

      setResponse(res.data);
      setError("");
    } catch (err) {
      console.error("Error:", err);
      setError("Invalid JSON format or request error.");
      setResponse(null);
    }
  };

  return (
    <div>
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
          <h3>Response</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default App;
