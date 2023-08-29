import './Header.scss';
import CustomBtn from '../buttons/customize-btns/CustomBtn';
import headerImg from '../../assets/header-image.jpg';
import { trustedByItems } from '../../../data';

const Header = () => {
  return (
    <div className='header'>
      <div className='left-side'>
        <h1>How work <br /> should work</h1>
        <h3>Forget the old rules. You can have the best people. Right now. Right here.</h3>
        <CustomBtn name='Get started' type='primary' />
        <div className='trusted-by'>
            <h4>Trusted by</h4>
            <div>
                {trustedByItems.map((item) => {
                    return <figure key={item.id}>
                        <img src={item.svg} alt='image' />
                    </figure>
                })}
            </div>
        </div>
      </div>
      <div className="right-side">
        <img src={headerImg} alt="image" />
      </div>
    </div>
  )
}

export default Header
