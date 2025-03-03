import { useState } from "react";
import { add } from "../utils/stringCalculator";

export default function StringCalculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleCalculate = () => {
    try {
      const sum = add(input);
      setResult(sum);
      setError(""); // Clear errors if successful
    } catch (err) {
      setError(err.message);
      setResult(null); // Reset result on error
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>String Calculator</h2>
      <input
        type="text"
        placeholder="Enter numbers (e.g. 1,2,3)"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{
          padding: "8px",
          width: "300px",
          marginRight: "10px",
          borderRadius: "5px",
        }}
      />
      <button
        onClick={handleCalculate}
        style={{
          padding: "8px 15px",
          cursor: "pointer",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Calculate
      </button>

      {result !== null && <h3>Result: {result}</h3>}
      {error && <h3 style={{ color: "red" }}>{error}</h3>}
    </div>
  );
}
