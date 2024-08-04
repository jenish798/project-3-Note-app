import React, { useState } from "react"
import string from "../../utils/string"
import CreateNote from "../create_note/create_note"

const Notes = () =>{
    const {save} = string
    const [notes,setNotes]= useState([])
    const [inputText,setInputText]= useState('')
    return(
        <>
        <CreateNote/>
        </>
    )
}

export default Notes