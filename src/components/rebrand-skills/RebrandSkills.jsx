import { useSelector } from "react-redux";
import "./RebrandSkills.scss";
import { nanoid } from "nanoid";

const RebrandSkills = () => {
  const rebrandItems = useSelector((state) => state.rebrandItems.rebrandItems);
  const visibleItems = rebrandItems.filter((item) => item.visibility === true);
  return (
    <section className="rebrand-skills">
      <div className="rebrand-skills__left">
        <ul>
          {rebrandItems.map((item) => {
            return <li key={item.id}>{item.category}</li>;
          })}
        </ul>
      </div>
      <div className="rebrand-skills__right">
        <ul>
          {visibleItems.map((item) => (
            <li key={item.id}>
              <ul>
                {item.names.map((name) => (
                  <li key={nanoid()} className="rebrand-skills__right--item">{name}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default RebrandSkills;
