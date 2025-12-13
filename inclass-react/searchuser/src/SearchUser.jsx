import { useState, useEffect } from "react";
import UserCard from "./UserCard.jsx";

export default function SearchUser() {
  const [username, setUsername] = useState("zeyadmh"); // default for demo
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!username) return;

    const controller = new AbortController();
    const signal = controller.signal;

    setLoading(true);
    setError("");

    fetch(`https://api.github.com/users/${username}`, { signal })
      .then((res) => {
        if (!res.ok) throw new Error("User not found");
        return res.json();
      })
      .then((user) => setData(user))
      .catch((err) => {
        if (err.name !== "AbortError") setError(err.message);
      })
      .finally(() => setLoading(false));

    // Cleanup to cancel old request
    return () => controller.abort();
  }, [username]);

  return (
    <>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value.trim())}
        style={{ padding: "8px", marginBottom: "15px" }}
      />

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {data && !loading && <UserCard user={data} />}
    </>
  );
}
