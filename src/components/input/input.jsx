import React from 'react';
import string from '../../utils/string';
import ButtonComp from '../button/button';
// import '../input.css'

const Input = ({save}) => {

    const {placeholder} = string
    // const textareaStyle = {
    //     height: '200px',
    //     width: '300px'
    // };

    return(
        <>
    <textarea name="note" cols='30' rows='15' id="" placeholder={placeholder}></textarea>
    <ButtonComp name={save}/>
    </>
    )
}

export default Input