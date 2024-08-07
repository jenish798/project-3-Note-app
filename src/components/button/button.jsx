import React from "react";

const ButtonComp = ({ name, onClick }) => {
  return (
    <div className="note__save">
      <button onClick={onClick}>{name}</button>
    </div>
  );
};

export default ButtonComp;
