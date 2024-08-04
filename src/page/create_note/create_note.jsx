import React from "react"
import ButtonComp from "../../components/button/button"
import string from "../../utils/string"
import Input from "../../components"

const CreateNote = () =>{
    const {save} = string
    return(
        <>
        <Input/>
                    <ButtonComp name={save}/>
        </>
    )
}

export default CreateNote