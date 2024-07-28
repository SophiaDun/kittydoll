import  { useState } from 'react';


export default function Hair({ hairMap, onHairSelected }) {
  const [selectedColor, setSelectedHairColor] = useState('blackHair'); 
  const [selectedHairIndex, setSelectedHairIndex] = useState(null); 

  const handleHairClick = (hair, index) => {
    setSelectedHairIndex(index); 
    onHairSelected(hair);
  };

  const handleHairColorClick = (color) => {
    setSelectedHairColor(color);

    const newHair = getSelectedHair(color);
    if (selectedHairIndex !== null && selectedHairIndex < newHair.length) {

      onHairSelected(newHair[selectedHairIndex]);
    } else {
     
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
        return hairMap.black; 
    }
  };

  const hairs = getSelectedHair(selectedColor);


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
