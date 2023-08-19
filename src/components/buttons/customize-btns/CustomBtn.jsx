import "./CustomBtn.scss";

// eslint-disable-next-line react/prop-types
const CustomBtn = ({ name, type }) => {
  return <button className={type}> {name} </button>;
};

export default CustomBtn;
