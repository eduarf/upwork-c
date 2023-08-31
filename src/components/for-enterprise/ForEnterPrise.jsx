import "./ForEnterPrise.scss";
import { enterpriseListItems } from "../../../data";
import enterpriseImage from '../../assets/enterprise-image.jpg';
import CustomBtn from '../buttons/customize-btns/CustomBtn';

const ForEnterPrise = () => {
  return (
    <div className="enterprise">
      <div className="enterprise__left">
        <h1 className="enterprise__left--header">Enterprise Suite</h1>
        <h1 className="enterprise__left--header-big">
          This is how <br /> <span>good companies <br /> find good company.</span>
        </h1>
        <p className="enterprise__left--para">
          Access the top 1% of talent on Upwork, and a full suite of hybrid
          workforce management tools. This is how innovation works now.
        </p>
        <div className="enterprise__left--list">
          <ul>
            {enterpriseListItems.map((item) => {
              return (
                <li key={item.id}>
                  <span>{item.icon}</span>
                  <p>{item.text}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <CustomBtn name='Learn more'  type='primary primary-white' />
      </div>
      <div className="enterprise__right">
        <img src={enterpriseImage} alt="image" />
      </div>
    </div>
  );
};

export default ForEnterPrise;
