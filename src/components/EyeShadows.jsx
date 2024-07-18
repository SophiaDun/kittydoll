import React from 'react';

export default function EyeShadows({ eyeshadows, onEyeShadowSelected, eyeshadowIcons, eyeIconsMap }) {
  const handleEyeShadowClick = (eyeshadow) => {
    onEyeShadowSelected(eyeshadow);
  };

  
  const rows = [];
  for (let i = 0; i < eyeshadows.length; i += 3) {
    rows.push(eyeshadows.slice(i, i + 3));
  }

  return (
    <div className='selection-grid'>
      {rows.map((row, rowIndex) => (
        <ul className='selection-row' key={rowIndex}>
          {row.map((eyeshadow, index) => {
            const eyeshadowIndex = rowIndex * 3 + index; 
            const isLastEyeshadow = eyeshadowIndex === eyeshadows.length - 1; 

            return (
              <li key={eyeshadowIndex}>
                <button className='selection-icon' onClick={() => handleEyeShadowClick(eyeshadow)}>
                  <img
                    className="eyeshadow-icon"
                    src={eyeshadowIcons[eyeshadowIndex]}
                    alt={`eyeshadow-icon-${eyeshadowIndex + 1}`}
                  />
                
                  { !isLastEyeshadow &&
                    <img
                      className="eye-icon"
                      src={eyeIconsMap}
                      alt={`eye-icon-${eyeshadowIndex}`}
                      loading="lazy"
                    />
                  }
                </button>
              </li>
            );
          })}
        </ul>
      ))}
    </div>
  );
}
