import { useRef } from 'react';
import html2canvas from 'html2canvas';
import 'canvas-toBlob';
import { DownloadOutlined, HeartFilled } from '@ant-design/icons';

export default function SaveButton() {
  const canvasRef = useRef(null);

  const handleSaveClick = () => {
    const dollFrame = document.querySelector('.doll-frame');

    html2canvas(dollFrame)
      .then((canvas) => {
        canvas.toBlob((blob) => {
          const url = URL.createObjectURL(blob);
          const downloadLink = document.createElement('a');
          downloadLink.href = url;
          downloadLink.download = 'doll_creation.jpg';
          document.body.appendChild(downloadLink);
          downloadLink.click();
          document.body.removeChild(downloadLink);
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
        <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
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
