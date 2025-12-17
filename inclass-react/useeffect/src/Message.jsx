import { useEffect } from "react";

function Message({ count }) {
  // useEffect to log when count changes
  useEffect(() => {
    console.log(`Count changed to: ${count}`);
    
    // Update document title
    document.title = `Count: ${count}`;
    
    // Cleanup function (runs before next effect or unmount)
    return () => {
      console.log(`Cleaning up for count: ${count}`);
    };
  }, [count]); // Dependency array: effect runs when count changes

  return (
    <div style={{ marginTop: "20px", padding: "10px", border: "1px solid #646cff", borderRadius: "8px" }}>
      <p>Current count: {count}</p>
      <p style={{ fontSize: "14px", color: "#888" }}>Check console and document title to see useEffect in action!</p>
    </div>
  );
}

export default Message;
