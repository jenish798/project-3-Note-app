
const Input = (value,onChange,placeholder) =>{
    return(
        <>
<textarea cols='25' 
rows='15' 
maxLength='100'
placeholder={placeholder}
value={value}
onChange={onChange}/>
        </>
    )
}

export default Input