import "./WhyUpworkDropdown.scss";
import {
  whyUpworkDropdownItemsLeft,
  whyUpworkDropdownItemsRight,
} from "../../../data";
import { BsArrowRight } from 'react-icons/bs';


const WhyUpworkDropdown = () => {
  return (
    <div className="whyupwork-dropdown">
      <div className="left-container">
        {whyUpworkDropdownItemsLeft.map((item) => {
          return (
            <div key={item.id}>
              <h4>{item.header}</h4>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
      <div className="right-container">
        <h3 className="header">Where work gets done</h3>
        <div className="items">
          {whyUpworkDropdownItemsRight.map((item) => {
            return <div key={item.id}>
              <h5>{item.header}</h5>
              <p>{item.description}</p>
            </div>;
          })}
        </div>
        <a href="#">See Resources <BsArrowRight className="icon" /> </a>
      </div>
    </div>
  );
};

export default WhyUpworkDropdown;
