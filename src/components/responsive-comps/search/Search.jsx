import { useSelector, useDispatch } from "react-redux";
import "./Search.scss";
import { MdKeyboardBackspace } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { searchToggle } from "../../../features/search/searchSlice";
import { useState } from "react";

const Search = () => {
  const isOpen = useSelector((state) => state.search.isOpen);
  const dispatch = useDispatch();
  const [selectedItem, setSelectedItem] = useState('talent');
  return (
    <div className="search-resp" style={{ right: isOpen ? "0" : "-100rem" }}>
      <div className="nav">
        <div className="top">
          <MdKeyboardBackspace
            onClick={() => dispatch(searchToggle())}
            className="icon"
          />
          <div className="search-container">
            <CiSearch className="search-icon" />
            <input type="search" placeholder="Search" />
          </div>
        </div>
        <div className="bottom">
          <ul>
            <li onClick={() => setSelectedItem('talent')} className={selectedItem === 'talent' ? 'underline' : null}>Talent</li>
            <li onClick={() => setSelectedItem('projects')} className={selectedItem === 'projects' ? 'underline' : null}>Projects</li>
            <li onClick={() => setSelectedItem('jobs')} className={selectedItem === 'jobs' ? 'underline' : null}>Jobs</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Search;
