
import Base from '../assets/images/Base/base.png'

export default function Clothes({ clothes, onClothSelected }) {
    const handleClothClick = (cloth) => {
        onClothSelected(cloth);
      };
    

      const rows = [];
      for (let i = 0; i < clothes.length; i += 3) {
        rows.push(clothes.slice(i, i + 3));
      }
    
      return (
        <div className='selection-grid'>
          {rows.map((row, rowIndex) => (
            <ul className='selection-row' key={rowIndex}>
              {row.map((cloth, index) => (
                <li key={index}>
                  <button className='selection-icon' onClick={() => handleClothClick(cloth)}>
                    <img className="cloth-icon" src={clothes[rowIndex * 3 + index]} alt={`icon-${rowIndex * 3 + index + 1}`}  />
                    <img className="base-icon" src={Base} alt={`base-${rowIndex}`} loading="lazy"/>
                  
                  </button>
                </li>
              ))}
            </ul>
          ))}
        </div>
      );
    }
