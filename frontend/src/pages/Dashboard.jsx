import { useState } from "react";

const Dashboard = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleQuerySubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost:5001/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });

      const data = await res.json();
      if (res.ok) {
        setResponse(data.response);
      } else {
        setError(data.message || "Error fetching response");
      }
    } catch (err) {
      setError("Server error: " + err.message);
    }

    setLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-4 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4">AI Query Dashboard</h2>
      <form onSubmit={handleQuerySubmit} className="mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter your query"
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-2">
          Generate
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {response && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <h3 className="font-bold">Response:</h3>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
