import "./FindGreatWork.scss";
import { findGreatWorkSectionItems } from "../../../data";
import CustomBtn from '../buttons/customize-btns/CustomBtn';

const FindGreatWork = () => {
  return (
    <section className="great-work">
      <div className="great-work__left"></div>
      <div className="great-work__right">
        <div className="great-work__right--top">
          <h2>For talent</h2>
          <h1>
            Find great <br /> work
          </h1>
          <p>
            Meet clients {`you're`} excited to work with and take your career or
            business to new heights.
          </p>
        </div>
        <div className="great-work__right--bottom">
          <div className="great-work__right--bottom__lists">
            {findGreatWorkSectionItems.map((item) => {
              return <div key={item.id}>{item.text}</div>;
            })}
          </div>
          <CustomBtn name='Find opportunities' type='primary primary-white primary--royalblue' />
        </div>
      </div>
    </section>
  );
};

export default FindGreatWork;
