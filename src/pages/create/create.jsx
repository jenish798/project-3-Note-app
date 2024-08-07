import React from "react";
import string from "../../utils/string/string";
import { ButtonComp, Textarea } from "../../components";

const CreateNote = ({ inputText, textHandler, saveHandler }) => {
  const { save, left, placeholder } = string;
  const charLimit = 100;
  const charLeft = charLimit - inputText.length;

  return (
    <>
      <Textarea
        value={inputText}
        onchange={textHandler}
        maxLength={charLimit}
        placeholder={placeholder}
      />

      <span>
        {charLeft} {left}
      </span>
      <ButtonComp onClick={saveHandler} name={save} />
    </>
  );
};

export default CreateNote;
