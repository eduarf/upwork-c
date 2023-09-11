import './Footer.scss';
import { footerItems } from '../../../data';
import FooterSubtitles from './FooterSubtitles/FooterSubtitles';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer__menu">
         {footerItems.map((item) => {
          return <div key={item.id} className='footer__menu--item'>
            <div className='footer__menu--item__heading'>
              {item.title}
            </div>
            <FooterSubtitles subtitles={item.subtitles} />
          </div>
         })}
      </div>
    </div>
  )
}

export default Footer
