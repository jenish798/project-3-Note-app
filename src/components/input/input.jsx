import React from "react";

const Textarea = ({ value, onchange, maxLength,placeholder }) => {
  return (
    <textarea
      cols="25"
      rows="15"
      value={value}
      placeholder={placeholder}
      onChange={onchange}
      maxLength={maxLength}
    ></textarea>
  );
};

export default Textarea;
