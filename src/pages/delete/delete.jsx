import ButtonComp from "../../components/button/button";
import string from "../../utils/string/string";

const Note = ({ id, text, deleteNote }) => {
  const { deleteText } = string;
  return (
    <>
      <div>{text} </div>
      <ButtonComp
        onClick={() => deleteNote(id)}
        className="delete-button"
        name={deleteText}
      />
    </>
  );
};

export default Note;
