import React, { useState } from "react";
import "./App.css"; // Import the CSS file

function App() {
  const [arraySize, setArraySize] = useState("");

  const handleChange = (e) => {
    setArraySize(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://192.168.1.15:5000/sort", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ n: parseInt(arraySize, 10) }),
    });

    const result = await response.json();
    console.log("Sorted Data:", result.sorted_data);

    alert(`Execution Time: ${result.execution_time.toFixed(4)} seconds`);
  };

  return (
    <div className="app-container">
      <h1 className="title">
        <span>Fog Computing Sorting</span>
      </h1>

      <span className="run run-left" style={{ animationDelay: "0s" }}></span>
      <span className="run run-right" style={{ animationDelay: "0.2s" }}></span>
      <span className="run run-left" style={{ animationDelay: "0.4s" }}></span>
      <span className="run run-right" style={{ animationDelay: "0.6s" }}></span>
      <span className="run run-left" style={{ animationDelay: "0.8s" }}></span>
      <span className="run run-right" style={{ animationDelay: "1s" }}></span>
      <span className="run run-left" style={{ animationDelay: "1.2s" }}></span>
      <span className="run run-right" style={{ animationDelay: "1.4s" }}></span>
      <span className="run run-left" style={{ animationDelay: "1.6s" }}></span>
      <span className="run run-right" style={{ animationDelay: "1.8s" }}></span>
      <span className="run run-left" style={{ animationDelay: "2s" }}></span>
      <span className="run run-right" style={{ animationDelay: "2.2s" }}></span>
      <span className="run run-left" style={{ animationDelay: "2.4s" }}></span>
      <span className="run run-right" style={{ animationDelay: "2.6s" }}></span>
      <span className="run run-left" style={{ animationDelay: "2.8s" }}></span>
      <span className="run run-right" style={{ animationDelay: "3s" }}></span>
      <span className="run run-left" style={{ animationDelay: "3.2s" }}></span>
      <span className="run run-right" style={{ animationDelay: "3.4s" }}></span>
      <span className="run run-left" style={{ animationDelay: "3.6s" }}></span>
      <span className="run run-right" style={{ animationDelay: "3.8s" }}></span>
      <span className="run run-left" style={{ animationDelay: "4s" }}></span>
      <span className="run run-right" style={{ animationDelay: "4.2s" }}></span>

      <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            Enter array size:
            <input
              type="number"
              name="arraySize"
              value={arraySize}
              onChange={handleChange}
              placeholder="Taille du tableau"
              required
            />
          </label>
        </div>
        <button type="submit">Sort</button>
      </form>
    </div>
    </div>
  );
}

export default App;
