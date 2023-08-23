import "./RightArrowComp.scss";
import { AiOutlineArrowRight } from "react-icons/ai";

// eslint-disable-next-line react/prop-types
const RightArrowComp = ({ content }) => {
  return (
    <a href="#">
      {content}
      <AiOutlineArrowRight className="icon" />
    </a>
  );
};

export default RightArrowComp;
