import { useRef } from 'react';
import html2canvas from 'html2canvas';
import { DownloadOutlined ,HeartFilled } from '@ant-design/icons';

export default function SaveButton() {
  const canvasRef = useRef(null);

  const handleSaveClick = () => {
    const dollFrame = document.querySelector('.doll-frame');

    html2canvas(dollFrame)
      .then((canvas) => {
        // Convert canvas to data URL representing JPG image
        const dataURL = canvas.toDataURL('image/jpeg');

        // Create a link element for downloading
        const downloadLink = document.createElement('a');
        downloadLink.href = dataURL;
        downloadLink.download = 'doll_creation.jpg';

        // Trigger a click on the link to download the JPG image
        downloadLink.click();
      })
      .catch((error) => {
        console.error('Error while saving doll:', error);
      });
  };

  return (
    <div>
      <br />
   
      <button className='save-button' onClick={handleSaveClick}>   <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
      <div style={{ display: 'inline-block', position: 'relative' }}>
      <HeartFilled style={{ fontSize: '5vh', color: '#e5e5e5' }} />
      <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white' }}>< DownloadOutlined className='save' /></span>
    </div></button>
      
  
    </div>
   
  );
}
