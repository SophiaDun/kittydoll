

export default function Eyebrows({ eyebrows, onEyebrowSelected, eyebrowIcons }) {
  const handleEyebrowClick = (eyebrow) => {
    onEyebrowSelected(eyebrow);
  };


  const rows = [];
  for (let i = 0; i < eyebrows.length; i += 3) {
    rows.push(eyebrows.slice(i, i + 3));
  }

  return (
    <div className='selection-grid'>
      {rows.map((row, rowIndex) => (
        <ul className='selection-row' key={rowIndex}>
          {row.map((eyebrow, index) => (
            <li key={index}>
              <button className='selection-icon' onClick={() => handleEyebrowClick(eyebrow)}>
                <img className="icon" src={eyebrowIcons[rowIndex * 3 + index]} alt={`eyebrown-icon-${rowIndex * 3 + index + 1}`}loading="lazy"  />
             
              </button>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}
