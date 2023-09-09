import { useDispatch, useSelector } from "react-redux";
import "./RebrandSkills.scss";
import { nanoid } from "nanoid";
import { isHidden } from "../../features/rebrandItems/rebrandSlice";

const RebrandSkills = () => {
  const rebrandItems = useSelector((state) => state.rebrandItems.rebrandItems);
  const visibleItems = rebrandItems.filter((item) => item.visibility === true);
  const dispatch = useDispatch();
  return (
    <section className="rebrand-skills">
      <div className="rebrand-skills__left">
        <ul>
          {rebrandItems.map((item) => {
            return (
              <li
                key={item.id}
                style={{
                  color: item.visibility ? "rgb(20, 168, 0)" : "#d5e0d5",
                }}
                onClick={() => dispatch(isHidden(item.category))}
              >
                {item.category}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="rebrand-skills__right">
        <ul>
          {visibleItems.map((item) => (
            <li key={item.id}>
              <ul className="rebrand-skills__right--list">
                {item.names.map((name) => (
                  <li key={nanoid()} className="rebrand-skills__right--item">
                    {name.length > 25 ? name.substring(0, 25) + '...' : name}
                  </li>
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
