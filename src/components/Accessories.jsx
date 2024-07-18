
import Base from '../assets/images/Base/base.png'

export default function Accessories({ accessories, onAccSelected }) {
    const handleAccClick = (acc) => {
        onAccSelected(acc);
      };
    
     
      const rows = [];
      for (let i = 0; i < accessories.length; i += 3) {
        rows.push(accessories.slice(i, i + 3));
      }
    
      return (
        <div className='selection-grid'>
          {rows.map((row, rowIndex) => (
            <ul className='selection-row' key={rowIndex}>
              {row.map((acc, index) => (
                <li key={index}>
                  <button className='selection-icon' onClick={() => handleAccClick(acc)}>
                    <img className="cloth-icon" src={accessories[rowIndex * 3 + index]} alt={`cloth-icon-${rowIndex * 3 + index + 1}`} />
                    <img className="base-icon" src={Base} alt={`base-icon-${rowIndex}`} loading="lazy"/>
                  
                  </button>
                </li>
              ))}
            </ul>
          ))}
        </div>
      );
    }