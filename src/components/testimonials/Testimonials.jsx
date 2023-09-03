import { nanoid } from "nanoid";
import "./Testimonials.scss";
import { testimonialsItems } from "../../../data";
import nasdaqLightSmSvg from "../../assets/nasdaq-light-sm.svg";
import bisselSvg from "../../assets/bissell-light.svg";
import automatticSvg from "../../assets/automattic-light.svg";
import cotySvg from "../../assets/coty-light.svg";
import rancherSvg from "../../assets/rancher-v2-light.svg";
import { useEffect, useState } from "react";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

const svgItems = [
  nasdaqLightSmSvg,
  automatticSvg,
  bisselSvg,
  cotySvg,
  rancherSvg,
];

const Testimonials = () => {
  const [currentSlider, setCurrentSlider] = useState(false);
  const [isScreenWidth768, setIsScreenWidth768] = useState(false);
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        console.log('true');
        setIsScreenWidth768(true);
      } else {
        setIsScreenWidth768(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const nextBtn = (event) => {
    if(isScreenWidth768) return;
    event.stopPropagation();
    setCurrentSlider(true);
  };
  const prevBtn = (event) => {
    if(isScreenWidth768) return;
    event.stopPropagation(); // Event olayının yayılmasını engeller
    setCurrentSlider(false);
  };

  useEffect(() => {

  }, []);

  return (
    <section className="testimonials-sec">
      <h1 className="testimonials-sec__header">
        Trusted by leading brands and startups
      </h1>
      <div className="testimonials-sec__slider" onClick={nextBtn}>
        {!currentSlider ? (
          <div className="next-btn">
            <GrLinkNext className="next-btn__icon" />
          </div>
        ) : null}
        {currentSlider ? (
          <div className="prev-btn" onClick={prevBtn}>
            <GrLinkPrevious className="prev-btn__icon" />
          </div>
        ) : null}

        {testimonialsItems.map((item, index) => {
          return (
            <div
              key={item.id}
              className="testimonials-sec__slider--item"
              style={{
                backgroundColor: item.color,
                transform: currentSlider ? `translateX(-80%)` : "",
                opacity: index === 0 && currentSlider === true ? ".4" : "1",
              }}
            >
              <div className="testimonials-sec__slider--item__top">
                <figure>
                  <img src={item.svg} alt="image" />
                </figure>
                <h4 className="testimonials-sec__slider--item__top--h4">
                  {item.statement}
                </h4>
                <div>{item.author}</div>
              </div>
              <div className="testimonials-sec__slider--item__bottom">
                <div className="testimonials-sec__slider--item__bottom--result">
                  Results
                </div>
                <div className="testimonials-sec__slider--item__bottom--containers">
                  <div className="testimonials-sec__slider--item__bottom--containers__container">
                    <h4>{item.firstTitle}</h4>
                    <div>{item.firstSubTitle}</div>
                  </div>
                  <div className="testimonials-sec__slider--item__bottom--containers__container">
                    <h4>{item.secondTitle}</h4>
                    <div>{item.secondSubTitle}</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div
          className="testimonials-sec__sliderWImg"
          style={{
            transform: currentSlider ? `translateX(-80%)` : "",
            opacity: (!currentSlider && !isScreenWidth768) ? ".4" : 1,
          }}
        >
          <div className="testimonials-sec__sliderWImg--left"></div>
          <div className="testimonials-sec__sliderWImg--right">
            <div>Andy many more</div>
            <div className="testimonials-sec__sliderWImg--right__svg-container">
              {svgItems.map((item) => {
                return (
                  <figure key={nanoid()}>
                    <img src={item} alt="svg" />
                  </figure>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
