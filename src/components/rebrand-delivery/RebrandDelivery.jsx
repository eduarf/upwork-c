import "./RebrandDelivery.scss";
import { rebrandDeliveryItems } from "../../../data";
import { AiOutlineArrowRight } from "react-icons/ai";

const RebrandDelivery = () => {
  return (
    <div className="rebrand">
      <div className="rebrand__container">
        <h2>For clients</h2>
        <h1 className="rebrand__container--big-title">
          Find talent <br /> your way
        </h1>
        <p>
          Work with the largest network of independent professionals and get
          things done—from quick turnarounds to big transformations.
        </p>
        <div className="rebrand__cards">
          {rebrandDeliveryItems.map((item, index) => {
            return (
              <div key={item.id} className="rebrand__cards--card">
                <h1 className="rebrand__cards--card__header">{item.header}</h1>
                <div>
                  <span>
                    {item.tag} { index < 2 && <span> &#8482;</span>}
                  </span>
                  <AiOutlineArrowRight className="icon" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RebrandDelivery;
