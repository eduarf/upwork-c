import "./ResponsNav.scss";
import { useDispatch, useSelector } from "react-redux";
import { hamburgerToggle } from "../../../features/hamburger/hamburgerSlice";
import { searchToggle } from "../../../features/search/searchSlice";
import CustomBtn from "../../buttons/customize-btns/CustomBtn";
import { FiSearch } from "react-icons/fi";

const ResponsNav = () => {
  const isOpen = useSelector((state) => state.hamburger.isOpen);
  const dispatch = useDispatch();
  return (
    <div className="respons-nav">
      <div className="logo-hamburger">
        <div className="hamburger" onClick={() => dispatch(hamburgerToggle())}>
          <div className={isOpen ? "open" : null}></div>
          <div className={isOpen ? "open" : null}></div>
          <div className={isOpen ? "open" : null}></div>
        </div>
        <h3>upwork</h3>
      </div>
      <div className="right-side">
        {!isOpen && <CustomBtn name="Sign up" type="basic" />}
        <FiSearch
          className="search-icon"
          onClick={() => dispatch(searchToggle())}
        />
      </div>
    </div>
  );
};

export default ResponsNav;
