import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");

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
