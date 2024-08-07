import string from "../../utils/string/string";

const Header = () => {
  const { heading } = string;
  return (
    <div className="header">
      <h1 className="notes__title">{heading}</h1>
    </div>
  );
};

export default Header;
