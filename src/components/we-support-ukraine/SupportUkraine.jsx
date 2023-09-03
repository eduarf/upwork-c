import "./SupportUkraine.scss";
import ukraineSvg from "../../assets/ukraine-help.svg";
import CustomBtn from "../buttons/customize-btns/CustomBtn";

const SupportUkraine = () => {
  return (
    <section className="support-ukraine">
      <div className="support-ukraine__container">
        <div className="support-ukraine__container--left">
          <h2>We support Ukraine</h2>
          <h6>
            We are taking action to help our freelancers, our clients, and the
            people of Ukraine—and so can you.
          </h6>
          <CustomBtn name="Learn more" type="secondary" />
        </div>
        <div className="support-ukraine__container--right">
            <figure>
                <img src={ukraineSvg} alt="svg" />
            </figure>
        </div>
      </div>
    </section>
  );
};

export default SupportUkraine;
