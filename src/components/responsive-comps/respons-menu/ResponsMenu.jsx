import "./ResponsMenu.scss";
import CustomBtn from "../../buttons/customize-btns/CustomBtn";

const ResponsMenu = () => {
  return (
    <div className="respons-menu">
      <div className="menu">
        <ul>
          <li>
            <div></div>
          </li> 
          <li>Find Work</li>  {/* I'm developing later */}
          <li>Why Upwork</li> {/* I'm developing later */}
          <li>Enterprise</li> {/* I'm developing later */}
          <li>
            {" "}
            <CustomBtn name="Log in" type="basic" />{" "}
          </li>
        </ul>
      </div>

      <div className="bottom">
        <CustomBtn name="Sign up" type="primary" extraClass="full" />
      </div>
    </div>
  );
};

export default ResponsMenu;
