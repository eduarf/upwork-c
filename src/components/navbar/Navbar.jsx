import { useReducer, useState } from "react";
import "./Navbar.scss";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import { navItems, navBottomItems } from "../../../data";
import CustomBtn from "../buttons/customize-btns/CustomBtn";
import DropdownTalent from "../dropdown-talent/DropdownTalent";
import DropdownMore from "../dropdownMore/dropdownMore";

function reducer(state, action) {
  switch (action.type) {
    case "FIND_TALENT":
      return {
        FIND_TALENT: !state.FIND_TALENT,
        FIND_WORK: false,
        WHY_UPWORK: false,
      };
    case "FIND_WORK":
      return {
        FIND_TALENT: false,
        FIND_WORK: !state.FIND_WORK,
        WHY_UPWORK: false,
      };
    case "WHY_UPWORK":
      return {
        FIND_TALENT: false,
        FIND_WORK: false,
        WHY_UPWORK: !state.WHY_UPWORK,
      };
    default:
      return { state };
  }
}

const Navbar = () => {
  const [state, dispatch] = useReducer(reducer, {
    FIND_TALENT: false,
    FIND_WORK: false,
    WHY_UPWORK: false,
  });
  const [showTalent, setShowTalent] = useState(false);
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="nav-container">
      <div className="nav-top">
        {/* Left Container */}
        <div className="nav-left">
          <div className="logo">
            <h3>upwork</h3>
          </div>
          <div className="nav-menu">
            <ul>
              {navItems.map((item) => {
                return (
                  <li
                    key={item.id}
                    onMouseEnter={() => dispatch({ type: item.type })}
                    onMouseLeave={() => dispatch({ type: item.type })}
                  >
                    <span> {item.name}</span>
                    {state[item.type] ? (
                      <IoIosArrowUp className="nav-icon" />
                    ) : (
                      <IoIosArrowDown className="nav-icon" />
                    )}{" "}
                    {state[item.type] && item.component}
                  </li>
                );
              })}
              <li> <span>Enterprise</span> </li>
            </ul>
          </div>
        </div>
        {/* Right Container */}
        <div className="nav-right">
          <div className="nav-right__search">
            <BiSearch className="search-icon" />
            <input type="text" placeholder="Search" />
            <div
              className="search-talent"
              onClick={() => setShowTalent(!showTalent)}
            >
              Talent <IoIosArrowDown /> {showTalent && <DropdownTalent />}{" "}
            </div>
          </div>
          <CustomBtn name="Log in" type="basic" />
          <CustomBtn name="Sign up" type="primary" />
        </div>
      </div>
      <div className="nav-bottom">
        <ul>
          {navBottomItems.map((item) => {
            return <li key={item.id}> {item.name} </li>;
          })}
          <li
            className="more"
            onMouseEnter={() => setShowMore(!showMore)}
            onMouseLeave={() => setShowMore(!showMore)}
          >
            {" "}
            More <IoIosArrowDown /> {showMore && <DropdownMore />}{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
