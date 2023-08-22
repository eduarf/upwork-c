import "./TalentMarketplace.scss";
import { AiOutlineArrowRight } from 'react-icons/ai';
import { talentMarketplaceItems } from "../../../data";

const TalentMarketplace = () => {
  return (
    <div className="talent-marketplace">
      <div className="left-side">
        <h2>Talent Marketplace&#8482;</h2>
        <p>
          Learn about working with talent or explore your specific hiring needs.
        </p>
        <a href="#">
          Hire on Talent Marketplace
          <AiOutlineArrowRight className="icon" />
        </a>
      </div>

      <div className="right-side">
        {talentMarketplaceItems.map((item) => {
          return <div key={item.id}>
            <h3>{item.header}</h3>
          </div>
        })}
      </div>
    </div>
  );
};

export default TalentMarketplace;
