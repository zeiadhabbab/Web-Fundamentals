import { useState } from "react";
import Message from "./Message";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p style={{ fontSize: "20px" }}>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>

      {/* pass count to the child */}
      <Message count={count} />
    </div>
  );
}

export default Counter;