import "./CustomBtn.scss";

// eslint-disable-next-line react/prop-types
const CustomBtn = ({ name, type, extraClass }) => {
  return <button className={`${type} ${extraClass}`}> {name} </button>;
};

export default CustomBtn;
