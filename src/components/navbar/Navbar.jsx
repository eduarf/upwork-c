import { useReducer } from "react";
import "./Navbar.scss";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { navItems } from "../../../data";
import FindTalentNav from "../findtalent-nav/FindTalentNav";
import FindWorkNav from "../findwork-nav/FindWorkNav";
import WhyUpworkNav from "../whyupwork-nav/WhyUpworkNav";

function reducer(state, action) {
  console.log(action.type);
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

  return (
    <div className="nav-container">
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
                  {item.name}
                  {state[item.type] ? (
                    <IoIosArrowUp className="nav-icon" />
                  ) : (
                    <IoIosArrowDown className="nav-icon" />
                  )}{" "}
                </li>
              );
            })}
            <li>Enterprise </li>
          </ul>
        </div>
      </div>
      {/* Right Container */}
      <div className=""></div>
      {state.FIND_TALENT && <FindTalentNav />}
      {state.FIND_WORK && <FindWorkNav />}
      {state.WHY_UPWORK && <WhyUpworkNav />}
    </div>
  );
};

export default Navbar;
