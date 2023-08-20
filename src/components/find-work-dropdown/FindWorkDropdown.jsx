import "./FindWorkDropdown.scss";
import { findWorkDropdownItems } from "../../../data";
const FindWorkDropdown = () => {
  return (
    <div className="findwork-dropdown">
      {findWorkDropdownItems.map((item) => {
        return (
          <div key={item.id} className="findwork-dropdown__item">
            <h4>{item.header}</h4>
            <p>{item.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default FindWorkDropdown;
