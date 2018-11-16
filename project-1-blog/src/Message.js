import React from "react";

const Message = ({ message }) => (
  <div className="message" style={{ color: "green" }}>
    <p>
      <strong>{message}</strong>
    </p>
  </div>
);
export default Message;
