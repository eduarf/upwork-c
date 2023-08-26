import "./Consultations.scss";
import { consultationsItems } from "../../../data";
import RightArrowComp from "../right-arrow-comp/RightArrowComp";

const Consultations = () => {
  return (
    <div className="consultations">
      <div className="left-side">
        <h2>Consultations</h2>
        <p>
          Explore what is possible with an industry expert. See their
          availability and book a time that works for you.
        </p>
        <RightArrowComp content="explore all categories" />
      </div>
      <div className="right-side">
        {consultationsItems.map((item) => {
          return (
            <div key={item.id} className="container">
              <img src={item.image} alt="image" />
              <div>
                <h3>{item.header}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Consultations;
