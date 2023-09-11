import { nanoid } from "nanoid";
import "./FooterSubtitles.scss";
import PropTypes from 'prop-types';


const FooterSubtitles = ({ subtitles }) => {
  return <ul className="footer-subtitles">
    {subtitles.map((item) => {
        return <li key={nanoid()}> {item} </li>
    })}
  </ul>;
};

FooterSubtitles.propTypes = {
    subtitles: PropTypes.array.isRequired,
  };


export default FooterSubtitles;
