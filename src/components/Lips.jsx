

export default function Lips({ lips, onLipSelected, lipIcons }) {
  const handleLipClick = (lip) => {
    onLipSelected(lip);
  };


  const rows = [];
  for (let i = 0; i < lips.length; i += 3) {
    rows.push(lips.slice(i, i + 3));
  }

  return (
    <div className='selection-grid'>
      {rows.map((row, rowIndex) => (
        <ul className='selection-row' key={rowIndex}>
          {row.map((lip, index) => (
            <li key={index}>
              <button className='selection-icon' onClick={() => handleLipClick(lip)}>
                <img className="icon" src={lipIcons[rowIndex * 3 + index]} alt={`lip-icon-${index + 1}`} loading="lazy" />
              </button>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}
