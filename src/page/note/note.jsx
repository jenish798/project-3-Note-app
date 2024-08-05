function Note({ id, text, deleteNote }){
    return(
        <>
         <div>{text} </div>
         <button onClick={() => deleteNote(id)} className="delete-button">
    Delete
</button>
        </>
    )
}

export default Note