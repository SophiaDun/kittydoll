
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
        <button className='nav-button'><Link to="/selection"><img src={SkinIcon} alt="nav-button" /></Link></button>
          
        </li>
        <li>
            <button className='nav-button'> <Link to="/eyes"><img src={EyeIcon} alt="nav-button" /></Link></button>
         
        </li>
        <li>
            <button className='nav-button'> <Link to="/eyeshadows"><img src={EyeshadowIcon} alt="nav-button" /></Link></button>
         
        </li>
        <li>
            <button className='nav-button'> <Link to="/lips"><img src={LipsIcon} alt="nav-button" /></Link></button>
         
        </li>
       
        <li>
            <button className='nav-button'> <Link to="/hair"><img src={HairIcon} alt="nav-button" /></Link></button>
         
        </li>
        <li>
            <button className='nav-button'> <Link to="/eyebrows"><img src={EyebrowIcon} alt="nav-button" /></Link></button>
         
        </li>
        <li>
            <button className='nav-button'> <Link to="/blush"><img src={BlushIcon} alt="nav-button" /></Link></button>
         
        </li>
        <li>
            <button className='nav-button'> <Link to="/clothes"><img src={ClothesIcon} alt="nav-button" /></Link></button>
         
        </li>
        <li>
            <button className='nav-button'> <Link to="/accessories"><img src={AccessoriesIcon} alt="nav-button" /></Link></button>
         
        </li>

        <li>
            <button className='nav-button'> <Link to="/background"><img src={Background} alt="nav-button" /></Link></button>
         
        </li>

      </ul>
    </nav>
    </>
  );
}
