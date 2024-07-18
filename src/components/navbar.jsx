
import { Link } from 'react-router-dom'; 


import SkinIcon from '../assets/images/tab-icons/skinIcon.png'
import EyeIcon from '../assets/images/tab-icons/eyeIcon.png'
import EyeshadowIcon from '../assets/images/tab-icons/eyeshadowIcon.png'
import LipsIcon from '../assets/images/tab-icons/lipsIcon.png'
import HairIcon from '../assets/images/tab-icons/hairIcon.png'

import BlushIcon from '../assets/images/tab-icons/blush.png'
import EyebrowIcon from '../assets/images/tab-icons/eyebrows.png'
import AccessoriesIcon from '../assets/images/tab-icons/accessories.png'
import ClothesIcon from '../assets/images/tab-icons/clothes.png'
import Background from '../assets/images/tab-icons/background.png'



export default function Navbar() {
  return (
    <>
       <nav>
      <ul className='nav-container'>
      <li >
        <button className='nav-button'><Link to="/selection"><img className="nav-logo"src={SkinIcon} alt="nav-logo" /></Link></button>
          
        </li>
        <li>
            <button className='nav-button'> <Link to="/eyes"><img className="nav-logo"src={EyeIcon} alt="nav-logo" /></Link></button>
         
        </li>
        <li>
            <button className='nav-button'> <Link to="/eyeshadows"><img className="nav-logo"src={EyeshadowIcon} alt="nav-logo" /></Link></button>
         
        </li>
        <li>
            <button className='nav-button'> <Link to="/lips"><img className="nav-logo"src={LipsIcon} alt="nav-logo" /></Link></button>
         
        </li>
       
        <li>
            <button className='nav-button'> <Link to="/hair"><img className="nav-logo"src={HairIcon} alt="nav-logo" /></Link></button>
         
        </li>
        <li>
            <button className='nav-button'> <Link to="/eyebrows"><img className="nav-logo"src={EyebrowIcon} alt="nav-logo" /></Link></button>
         
        </li>
        <li>
            <button className='nav-button'> <Link to="/blush"><img className="nav-logo"src={BlushIcon} alt="nav-logo" /></Link></button>
         
        </li>
        <li>
            <button className='nav-button'> <Link to="/clothes"><img className="nav-logo"src={ClothesIcon} alt="nav-logo" /></Link></button>
         
        </li>
        <li>
            <button className='nav-button'> <Link to="/accessories"><img className="nav-logo"src={AccessoriesIcon} alt="nav-logo" /></Link></button>
         
        </li>

        <li>
            <button className='nav-button'> <Link to="/background"><img className="nav-logo"src={Background} alt="nav-logo" /></Link></button>
         
        </li>

      </ul>
    </nav>
    </>
  );
}
