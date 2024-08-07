import React from "react";

const Textarea = ({ value, onchange, maxLength }) => {
  return (
    <textarea
      cols="25"
      rows="15"
      value={value}
      onChange={onchange}
      maxLength={maxLength}
    ></textarea>
  );
};

export default Textarea;
