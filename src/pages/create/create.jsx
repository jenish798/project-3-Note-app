import React from "react";
import string from "../../utils/string/string";
import { ButtonComp, Textarea } from "../../components";

const CreateNote = ({ inputText, textHandler, saveHandler }) => {
  const { save, left, placeholder } = string;
  const charLimit = 100;
  const charLeft = charLimit - inputText.length;

  return (
    <div className="note">
      <Textarea
        value={inputText}
        onchange={textHandler}
        maxLength={charLimit}
        placeholder={placeholder}
      />
<div className="note_create">
      <span className="label">
        {charLeft} {left}
      </span>
      <ButtonComp className='note__save' onClick={saveHandler} name={save} />
      </div>
    </div>
  );
};

export default CreateNote;
