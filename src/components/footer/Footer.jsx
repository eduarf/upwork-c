import './Footer.scss';
import { footerItems, followUsIcons } from '../../../data';
import FooterSubtitles from './FooterSubtitles/FooterSubtitles';
import { AiOutlineApple, AiOutlineAndroid } from 'react-icons/ai';

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
      <div className="footer__bottom">
        <div className="footer__bottom--icons">
          <div className="footer__bottom--icons__left">
            <div className='footer__bottom--icons__left--header'>Follow Us</div>
            {followUsIcons.map((item) => {
              return <div key={item.id} className='footer__bottom--icons__left--icon'>
                {item.icon}
              </div>
            })}
          </div>
          <div className="footer__bottom--icons__right">
            <div className='footer__bottom--icons__right--header'>Mobile App</div>
            <div className='footer__bottom--icons__right--container'>
              <AiOutlineApple className='footer__bottom--icons__right--container__icon' />
              <AiOutlineAndroid className='footer__bottom--icons__right--container__icon' />
            </div>
          </div>
        </div>
        <div className="footer__bottom--copyright"></div>
      </div>
    </div>
  )
}

export default Footer
