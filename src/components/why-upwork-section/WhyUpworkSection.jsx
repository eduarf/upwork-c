import "./WhyUpworkSection.scss";
// import WhyUpworkPng from  '../../assets/why-upwork-png.png';
import { whyUpworkSecLeftItems, whyUpWorkSecRightItems } from "../../../data";

const WhyUpworkSection = () => {
  return (
    <div className="whyUpworkSec">
      <div className="whyUpworkSec__left">
        <div className="whyUpworkSec__left--header">
          Why businesses turn to Upwork
        </div>
        <div className="whyUpworkSec__left--lists">
          <ul>
            {whyUpworkSecLeftItems.map((item) => {
              return (
                <li key={item.id}>
                  <span>{item.icon}</span>
                  <div>
                    <h1>{item.header}</h1>
                    <p>{item.description}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="whyUpworkSec__right">
        <h1 className="whyUpworkSec__right--header">{`We're the world's work marketplace`}</h1>
        <ul>
          {whyUpWorkSecRightItems.map((item) => {
            return (
              <li key={item.id}>
                <span>{item.icon}</span>
                <div>
                  <h1>{item.header}</h1>
                  <p>{item.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default WhyUpworkSection;