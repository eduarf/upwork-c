import "./DropdownTalent.scss";
import { dropDownTalentItems } from "../../../data";

const DropdownTalent = () => {
  return (
    <div className="dropdown-talent">
      {dropDownTalentItems.map((item) => {
        return <div key={item.id} className="dropdown-talent__container">
          <div className="dropdown-talent__icon">{item.icon}</div>
          <div className="dropdown-talent__desc">
            <h4>{item.name}</h4>
            <p>{item.description}</p>
          </div>
          </div>;
      })}
    </div>
  );
};

export default DropdownTalent;
