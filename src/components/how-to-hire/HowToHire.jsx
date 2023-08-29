/* eslint-disable react-hooks/exhaustive-deps */
import "./HowToHire.scss";
import { howToHireItems } from "../../../data";
import check from "../../assets/check.json";
import joinUs from "../../assets/join-us.json";
import search from "../../assets/search.json";
import searchProfile from "../../assets/searchProfile.json";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import CustomBtn from "../buttons/customize-btns/CustomBtn";

const HowToHire = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const lottieAnimations = [check, joinUs, search, searchProfile];
  const [currentLottieIndex, setCurrentLottieIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLottieIndex(
        (prevIndex) => (prevIndex + 1) % lottieAnimations.length
      );
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="how-to-hire">
      <div className="left-side">
        {lottieAnimations.map((animationData, index) => (
          <div
            key={index}
            className={`lottie-container ${
              index === currentLottieIndex ? "" : "hidden"
            }`}
          >
            <Lottie className="lottie" animationData={animationData} />
          </div>
        ))}
      </div>
      <div className="right-side">
        <h1>Up your work game, it’s free</h1>
        <ul>
          {howToHireItems.map((item) => (
            <li key={item.id}>
              <div className="icon-container">{item.icon}</div>
              <div className="content-container">
                <h3>{item.header}</h3>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="button-container">
          <CustomBtn name="Sign up for free" type="primary" />
          <CustomBtn name="Learn how to hire" type="secondary" />
        </div>
      </div>
    </div>
  );
};

export default HowToHire;
