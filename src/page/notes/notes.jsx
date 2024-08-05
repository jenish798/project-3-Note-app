import React, { useState,useEffect } from "react"
import string from "../../utils/string"
import CreateNote from "../create_note/create_note"
import Note from "../note/note"
import {v4 as uuid} from 'uuid'

const Notes = () =>{
    const {save} = string
    const [notes,setNotes]= useState([])
    const [inputText, setInputText] = useState("");

    const textHandler = (e) => {
        setInputText(e.target.value);
      };

      const saveHandler = () => {
        setNotes((prevState) => [
          ...prevState,
          {
            id: uuid(),
            text: inputText
          }
        ]);
     
        setInputText("");
      };

      const deleteNote = (id) => {
        const filteredNotes = notes.filter((note) => note.id !== id);
        setNotes(filteredNotes);
      };

      useEffect(() => {
        const data = JSON.parse(localStorage.getItem("Notes"));
        if (data) {
          setNotes(data);
        }
      }, []);
    
    
      useEffect(() => {
        localStorage.setItem("Notes", JSON.stringify(notes));
      }, [notes]);
       
    return(
        <>

{notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          text={note.text}
          deleteNote={deleteNote}
        />
    ))}
        <CreateNote
         textHandler={textHandler}
         saveHandler={saveHandler}
        inputText={inputText}
        />
        </>
    )
}

export default Notes