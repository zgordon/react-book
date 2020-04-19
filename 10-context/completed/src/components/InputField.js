import React from "react";

const InputField = ({ id, onChange, value, type = "input" }) => (
  <p>
    <label
      htmlFor="{id}"
      style={{ textTransform: `capitalize`, marginRight: `5px` }}
    >
      {id}
    </label>
    <input
      onChange={onChange}
      type={type}
      id={id}
      name={id}
      value={value}
      required
    />
  </p>
);

export default InputField;
