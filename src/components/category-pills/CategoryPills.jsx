import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { categoryPillsItems } from "../../../data";
import "./CategoryPills.scss";

const CategoryPills = () => {
  const [isScreenWidth680, setIsScreenWidth680] = useState(false);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 680) {
        setIsScreenWidth680(true);
      } else {
        setIsScreenWidth680(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const lastThreeItems = categoryPillsItems.slice(-3);
  return (
    <div className="category-pills">
      <div className="category-pills__top-side">
        <h1 className="category-pills__header">Browse talent by category</h1>
        <div className="category-pills__looking-for">
          <span>Looking for work?</span>
          <a href="#">Browse Jobs</a>
        </div>
      </div>
      <div className="category-pills__bottom-side">
        {categoryPillsItems.map((item) => (
          <div
            key={item.id}
            className={`category-card ${
              isScreenWidth680 && lastThreeItems.includes(item) && !showMore
                ? "category-card-hidden"
                : ""
            }`}
          >
            <h1>{item.header}</h1>
            <div className="star-skills">
              <div className="star">
                <FaStar className="icon" />
                <span>{item.star}</span>
              </div>
              <div className="skills">
                <span>{item.skills} skills</span>
              </div>
            </div>
          </div>
        ))}
        {isScreenWidth680 && !showMore && (
          <span className="show-less" onClick={() => setShowMore(true)}>Show more (3)</span>
        )}
        {isScreenWidth680 && showMore && (
          <span className="show-less" onClick={() => setShowMore(false)}>Show less</span>
        )}
      </div>
    </div>
  );
};

export default CategoryPills;
