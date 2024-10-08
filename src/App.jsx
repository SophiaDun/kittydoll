import './App.css';
import { useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Use HashRouter
import Navbar from './components/navbar';
import Eyes from './components/Eyes';
import EyeShadows from './components/EyeShadows';
import Selection from './components/selection';
import Lips from './components/Lips';
import Hair from './components/Hair';
import Eyebrows from './components/Eyebrows.jsx';
import Blush from './components/Blush.jsx';
import SaveButton from './components/Savebutton';
import Background from './components/Background.jsx';
import Accessories from './components/Accessories.jsx';
import Clothes from './components/Clothes.jsx';
import kittysophie_watermark from './assets/images/tab-icons/watermark.png';

import { skins, eyesMap, eyeIconsMap, eyeshadows, eyeshadowIcons, lips, lipIcons, hairMap, blushes, 
blushesIcons, eyebrows, eyebrowIcons, clothes, accessories, background } from './Images.jsx';

function App() {

  
  const [selectedSkin, setSelectedSkin] = useState(skins[4]);
  const [selectedEye, setSelectedEye] = useState(eyesMap.darkBrownEyes[0]);
  const [selectedEyeshadow, setSelectedEyeshadow] = useState(eyeshadows[0]);
  const [selectedLip, setSelectedLip] = useState(lips[0]);
  const [selectedHair, setSelectedHair] = useState(hairMap.black[0]);
  const [selectedEyebrow, setSelectedEyebrow] = useState(eyebrows[6]);
  const [selectedBlush, setSelectedBlush] = useState(blushes[8]);
  const [selectedCloth, setSelectedCloth] = useState(clothes[11]);
  const [selectedAcc, setSelectedAcc] = useState(accessories[20]);
  const [selectedBg, setSelectedBg] = useState(background[0]);


  
  return (
    
    <Router>
      <div className="container">
        
        <div className="gradient-border">
          
          <h1 className='kittydoll-logo'>K I T T Y D O L L</h1>

          <div className="bg">
            
            <div className='doll-frame'>
              <img className="background" src={selectedBg} alt="background" crossOrigin="anonymous"/>
              <img className="skin-image" src={selectedSkin} alt="base" crossOrigin="anonymous"/>
              <img className="eyeshadow" src={selectedEyeshadow} alt="eyeshadow" crossOrigin="anonymous"/>
              <img className="eye-image" src={selectedEye} alt="eyes" crossOrigin="anonymous"/>
              <img className="lips" src={selectedLip} alt="lip" crossOrigin="anonymous"/>
              <img className="eyebrow" src={selectedEyebrow} alt="eyebrow" crossOrigin="anonymous"/>
              <img className="blush" src={selectedBlush} alt="blush" crossOrigin="anonymous"/>
              <img className="clothes" src={selectedCloth} alt="clothes" crossOrigin="anonymous"/>
              <img className="hair" src={selectedHair} alt="hair" crossOrigin="anonymous"/>
              <img className="accessories" src={selectedAcc} alt="accessories" crossOrigin="anonymous"/>
              <img className="accessories" src={kittysophie_watermark} alt="watermark"  crossOrigin="anonymous"/>
            </div>

            <Navbar />
            
            <Routes>
              <Route path="/" element={<Navigate to="/selection" />} />
              <Route path="/selection" element={<Selection skins={skins} onSkinSelected={setSelectedSkin} />} />
              <Route path="/eyeshadows" element={<EyeShadows eyeshadows={eyeshadows} onEyeShadowSelected={setSelectedEyeshadow} eyeshadowIcons={eyeshadowIcons} eyeIconsMap={eyeIconsMap.darkbrown[0]} />} />
              <Route path="/lips" element={<Lips lips={lips} onLipSelected={setSelectedLip} lipIcons={lipIcons} />} />
              <Route path="/eyes" element={<Eyes onEyeSelected={setSelectedEye} eyeIconsMap={eyeIconsMap} eyesMap={eyesMap} />} />
              <Route path="/hair" element={<Hair onHairSelected={setSelectedHair} hairMap={hairMap} />} />
              <Route path="/eyebrows" element={<Eyebrows onEyebrowSelected={setSelectedEyebrow} eyebrowIcons={eyebrowIcons} eyebrows={eyebrows} />} />
              <Route path="/blush" element={<Blush onBlushSelected={setSelectedBlush} blushesIcons={blushesIcons} blushes={blushes} />} />
              <Route path="/clothes" element={<Clothes onClothSelected={setSelectedCloth} clothes={clothes} />} />
              <Route path="/accessories" element={<Accessories onAccSelected={setSelectedAcc} accessories={accessories} />} />
              <Route path="/background" element={<Background onBgSelected={setSelectedBg} background={background} />} />
            </Routes>
          </div>
        </div>
        
        <SaveButton />

        <footer className="footer">
          <p className='kittydoll-logo-footer'>kittysophie.art 2024</p>
        </footer>
        </div>
      
    </Router>
  );
}

export default App;

