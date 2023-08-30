import "./CategoryPills.scss";
import { categoryPillsItems } from "../../../data";
import { FaStar } from 'react-icons/fa';

const CategoryPills = () => {
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
        {categoryPillsItems.map((item) => {
            return <div key={item.id} className="category-card">
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
        })}
      </div>
    </div>
  );
};

export default CategoryPills;
