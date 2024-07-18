

export default function Selection({ skins, onSkinSelected }) {
  const handleSkinClick = (skin) => {
    onSkinSelected(skin);
  };


  const rows = [];
  for (let i = 0; i < skins.length; i += 3) {
    rows.push(skins.slice(i, i + 3));
  }

  return (
    <div className='selection-grid'>
      {rows.map((row, rowIndex) => (
        <ul className='selection-row' key={rowIndex}>
          {row.map((skin, index) => (
            <li key={index}>
              <button className='selection-icon' onClick={() => handleSkinClick(skin)}>
                <img className="icon" src={skin} alt="skin" loading="lazy" />
              </button>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}