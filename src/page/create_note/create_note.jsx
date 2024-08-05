import React from "react"
import string from "../../utils/string"
import ButtonComp from "../../components";
import Input from "../../components/input/input";

const CreateNote = ({inputText,textHandler,saveHandler}) =>{
    const {save,left,placeholder} = string
    const charLimit = 100;
    const charLeft = charLimit - inputText.length
    
    return(
        <>
       <textarea 
       cols='25'
       rows='15'
       value={inputText}
       onChange={textHandler}
       maxLength='100'
       ></textarea>
 
       <span>{charLeft} {left}</span>
        <ButtonComp onClick={saveHandler} name={save}/>
        </>
    )
}

export default CreateNote