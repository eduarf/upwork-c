import './Footer.scss';
import {  followUsIcons, footerBottomItems } from '../../../data';
import FooterSubtitles from './FooterSubtitles/FooterSubtitles';
import { AiOutlineApple, AiOutlineAndroid } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { footerToggleFalse, footerToggleTrue, footerToggle } from '../../features/footer/footer';
const Footer = () => {
  const footerItems = useSelector((state) => state.footer).footerItems;
  const [is700, setIs700] = useState(false);
 const dispatch = useDispatch();
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 700) {
        dispatch(footerToggleFalse());
        setIs700(true);
      }
      else if(window.innerWidth > 700) {
        dispatch(footerToggleTrue());
        setIs700(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className='footer'>
      <div className="footer__menu">
         {footerItems.map((item) => {
          return <div key={item.id} className='footer__menu--item' onClick={() => dispatch(footerToggle(item.title))}>
            <div className='footer__menu--item__heading'>
              {item.title}
             {is700 && item.isOpen  ?  <IoIosArrowUp />  : <IoIosArrowDown />}
            </div>
            { item.isOpen ?  <FooterSubtitles subtitles={item.subtitles} /> : null}
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
        <div className="footer__bottom--copyright">
          <p>© 2015 - 2023 Upwork® Global Inc.</p>
          <ul className='footer__bottom--copyright__list'>
            {footerBottomItems.map((item) => {
              return <li key={item.id}>
                {item.name}
              </li>
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
