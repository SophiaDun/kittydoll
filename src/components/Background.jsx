

export default function Background({ background, onBgSelected }) {
  const handleBgClick = (bg) => {
    onBgSelected(bg);
  };


  const rows = [];
  for (let i = 0; i < background.length; i += 3) {
    rows.push(background.slice(i, i + 3));
  }

  return (
    <div className='selection-grid'>
      {rows.map((row, rowIndex) => (
        <ul className='selection-row' key={rowIndex}>
          {row.map((bg, index) => (
            <li key={index}>
              <button className='selection-icon' onClick={() => handleBgClick(bg)}>
                <img className="icon" src={background[rowIndex * 3 + index]} alt={`icon-${rowIndex * 3 + index + 1}`} loading="lazy" />
              
              </button>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}
