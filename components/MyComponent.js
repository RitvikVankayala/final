import { useState } from "react";

function MyComponent() {
  const [message, setMessage] = useState("");

  async function getMessage() {
    const response = await fetch(" http://127.0.0.1:5000/api/message");
    const data = await response.text();
    setMessage(data);
  }

  return (
    <div>
      <button onClick={getMessage}>Get Message</button>
      <p>{message}</p>
    </div>
  );
}

export default MyComponent;
