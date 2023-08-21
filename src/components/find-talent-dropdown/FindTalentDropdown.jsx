import "./FindTalentDropdown.scss";
import { findTalentDropdownItemsLeft } from "../../../data";
import { IoIosArrowForward } from "react-icons/io";
import { useReducer } from "react";
import TalentMarketplace from '../talent-marketplace/TalentMarketplace';
import Consultations from '../consultations/Consultations';
import ProjetCatalog from '../project-catalog/ProjectCatalog';


function reducer(state, action) {
  switch (action.type) {
    case "TALENT_MARKETPLACE":
      return {
        TALENT_MARKETPLACE: true,
        PROJECT_CATALOG: false,
        CONSULTATIONS: false,
      };
    case "PROJECT_CATALOG":
      return {
        TALENT_MARKETPLACE: false,
        PROJECT_CATALOG: true,
        CONSULTATIONS: false,
      };
    case "CONSULTATIONS":
      return {
        TALENT_MARKETPLACE: false,
        PROJECT_CATALOG: false,
        CONSULTATIONS: true,
      };
    default:
      return { state };
  }
}

const FindTalentDropdown = () => {
  const [state, dispatch] = useReducer(reducer, {
    TALENT_MARKETPLACE: true,
    PROJECT_CATALOG: false,
    CONSULTATIONS: false,
  });
  return (
    <div className="talent-dropdown">
      <div className="talent-dropdown__left">
        {findTalentDropdownItemsLeft.map((item) => {
          return (
            <div key={item.id} className="item" onMouseOver={() => dispatch({type: item.identity})}>
              <div>
                <h3>{item.header}</h3>
                <h4>{item.subtitle}</h4>
              </div>
              <IoIosArrowForward className="icon" />
            </div>
          );
        })}
      </div>
      <div className="talent-dropdown__right">
        { state.TALENT_MARKETPLACE && <TalentMarketplace /> }
        { state.PROJECT_CATALOG && <ProjetCatalog /> }
        { state.CONSULTATIONS && <Consultations /> }
      </div>
    </div>
  );
};

export default FindTalentDropdown;
