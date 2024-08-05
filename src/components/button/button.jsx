import React from "react"

const ButtonComp = ({name,onClick}) =>{
    return(
        <>
        <button onClick={onClick}>{name}</button>
        </>
    )
}

export default ButtonComp