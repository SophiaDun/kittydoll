import { useState } from 'react';

export default function Eyes({ eyeIconsMap, eyesMap, onEyeSelected }) {
  const [selectedColor, setSelectedColor] = useState('darkbrown'); // Set default color to dark brown
  const [selectedEyeIndex, setSelectedEyeIndex] = useState(null); // Track the index of the selected eye

  const handleEyeClick = (eye, index) => {
    setSelectedEyeIndex(index); // Update the selected eye index
    onEyeSelected(eye);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    // Update the selected eye to match the new color
    const newEyes = getSelectedEyes(color);
    if (selectedEyeIndex !== null && selectedEyeIndex < newEyes.length) {
      // Maintain selected eye index if it's within the range of available eyes for the new color
      onEyeSelected(newEyes[selectedEyeIndex]);
    } else {
      // If selected eye index is out of range, select the first eye of the new color
      setSelectedEyeIndex(0);
      onEyeSelected(newEyes[0]);
    }
  };

  const getSelectedEyes = (color) => {
    switch (color) {
      case 'darkbrown':
        return eyesMap.darkBrownEyes;
      case 'lightbrown':
        return eyesMap.lightBrownEyes;
      case 'hazel':
        return eyesMap.hazelEyes;
      case 'green':
        return eyesMap.greenEyes;
      case 'blue':
        return eyesMap.blueEyes;
      case 'lightblue':
        return eyesMap.lightBlueEyes;
      case 'lilac':
        return eyesMap.lilacEyes;
      case 'pink':
        return eyesMap.pinkEyes;
      case 'red':
        return eyesMap.redEyes;
      default:
        return eyesMap.darkBrownEyes; // Default to dark brown eyes
    }
  };

  const eyes = getSelectedEyes(selectedColor);

  // Chunk the eyes array into arrays of three items each
  const rows = [];
  for (let i = 0; i < eyes.length; i += 3) {
    rows.push(eyes.slice(i, i + 3));
  }

  return (
    <div className='selection-grid'>
      <nav>
        <ul className='eye-nav-frame'>
          {['darkbrown','lightbrown','hazel','green','blue','lightblue','lilac','pink', 'red'].map((color) => (
            <li key={color}>
              <button className={color} onClick={() => handleColorClick(color)}></button>
            </li>
          ))}
        </ul>
      </nav>
      {rows.map((row, rowIndex) => (
        <div className="eye-ul-container" key={`row-${rowIndex}`}>
          <ul className='selection-row'>
            {row.map((eye, index) => (
              <li key={eye.id || `eye-${rowIndex * 3 + index}`}>
                <button className='selection-icon' onClick={() => handleEyeClick(eye, rowIndex * 3 + index)}>
                  <img
                    className="icon"
                    src={eyeIconsMap[selectedColor][rowIndex * 3 + index]} 
                    alt={`eye-${rowIndex * 3 + index + 1}`} 
                    loading="lazy"
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
