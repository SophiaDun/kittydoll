import  { useState } from 'react';


export default function Hair({ hairMap, onHairSelected }) {
  const [selectedColor, setSelectedHairColor] = useState('blackHair'); //default color to black hair
  const [selectedHairIndex, setSelectedHairIndex] = useState(null); // Track the index of the selected hair

  const handleHairClick = (hair, index) => {
    setSelectedHairIndex(index); // Update the selected hair index
    onHairSelected(hair);
  };

  const handleHairColorClick = (color) => {
    setSelectedHairColor(color);
    // Update the selected hair to match the new color
    const newHair = getSelectedHair(color);
    if (selectedHairIndex !== null && selectedHairIndex < newHair.length) {
      // Maintain selected hair index if it's within the range of available hair for the new color
      onHairSelected(newHair[selectedHairIndex]);
    } else {
      // If selected hair index is out of range, select the first hair of the new color
      setSelectedHairIndex(0);
      onHairSelected(newHair[0]);
    }
  };

  const getSelectedHair = (color) => {
    switch (color) {
      case 'blackHair':
        return hairMap.black;
      case 'brownHair':
        return hairMap.brown;
      case 'orangeHair':
        return hairMap.orange;
      case 'blondeHair':
        return hairMap.blonde;
      case 'whiteHair':
        return hairMap.white;
      case 'redHair':
        return hairMap.red;
      case 'pinkHair':
        return hairMap.pink;
      case 'greenHair':
        return hairMap.green;
      case 'blueHair':
        return hairMap.blue;
      case 'lightblueHair':
        return hairMap.lightblue;
      case 'lilacHair':
        return hairMap.lilac;
      default:
        return hairMap.black; // Default to black hair
    }
  };

  const hairs = getSelectedHair(selectedColor);

  // Chunk the hairs array into arrays of three items each
  const rows = [];
  for (let i = 0; i < hairs.length; i += 3) {
    rows.push(hairs.slice(i, i + 3));
  }

  return (
    <div className='selection-grid'>
      <nav>
        <ul className='hair-nav-frame'>
          {['blackHair', 'brownHair','orangeHair','blondeHair','whiteHair','redHair','pinkHair','greenHair','blueHair','lightblueHair','lilacHair'].map((color) => (
            <li key={color}>
              <button className={color} onClick={() => handleHairColorClick(color)}></button>
            </li>
          ))}
        </ul>
      </nav>
      {rows.map((row, rowIndex) => (
        <ul className='selection-row' key={rowIndex}>
          {row.map((hair, index) => (
            <li key={index}>
              <button className='selection-icon' onClick={() => handleHairClick(hair, rowIndex * 3 + index)}>
              
                <img
                  className="icon"
                  src={hair}
                  alt={`hair-${rowIndex * 3 + index + 1}`} 
                  loading="lazy"
                />
  
              </button>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}
