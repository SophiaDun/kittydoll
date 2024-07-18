

export default function Blush({ blushes, onBlushSelected, blushesIcons }) {
  const handleBlushClick = (blush) => {
    onBlushSelected(blush);
  };


  const rows = [];
  for (let i = 0; i < blushes.length; i += 3) {
    rows.push(blushes.slice(i, i + 3));
  }

  return (
    <div className='selection-grid'>
      {rows.map((row, rowIndex) => (
        <ul className='selection-row' key={rowIndex}>
          {row.map((blush, index) => (
            <li key={index}>
              <button className='selection-icon' onClick={() => handleBlushClick(blush)}>
                <img className="icon" src={blushesIcons[rowIndex * 3 + index]} alt={`blush-icon-${rowIndex * 3 + index + 1}`} loading="lazy" />
             
              </button>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}
