import "./DropdownMore.scss";
import { moreDropDownItems } from "../../../data";

const DropdownMore = () => {
  return (
    <div className="dropdown-more">
      {moreDropDownItems.map((item) => {
        return <div className="dropdown-more__item" key={item.id}>{item.name}</div>;
      })}
    </div>
  );
};

export default DropdownMore;
