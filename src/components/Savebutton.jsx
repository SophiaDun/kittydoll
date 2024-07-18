import { useRef } from 'react';
import html2canvas from 'html2canvas';
import { DownloadOutlined, HeartFilled } from '@ant-design/icons';

export default function SaveButton() {
  const handleSaveClick = () => {
    const dollFrame = document.querySelector('.doll-frame');

    html2canvas(dollFrame, { useCORS: true }) 
      .then((canvas) => {
        canvas.toBlob((blob) => {
          const url = URL.createObjectURL(blob);
          const downloadLink = document.createElement('a');
          downloadLink.href = url;
          downloadLink.download = 'doll_creation.jpg';
          
          document.body.appendChild(downloadLink);
          downloadLink.click();
          document.body.removeChild(downloadLink);
          URL.revokeObjectURL(url); 
        }, 'image/jpeg');
      })
      .catch((error) => {
        console.error('Error while saving doll:', error);
      });
  };

  return (
    <div>
      <br />
      <button className='save-button' onClick={handleSaveClick}>
        <div style={{ display: 'inline-block', position: 'relative' }}>
          <HeartFilled style={{ fontSize: '5vh', color: '#e5e5e5' }} />
          <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white' }}>
            <DownloadOutlined className='save' />
          </span>
        </div>
      </button>
    </div>
  );
}
