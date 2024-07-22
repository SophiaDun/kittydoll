import React from 'react';
import html2canvas from 'html2canvas';
import { DownloadOutlined, HeartFilled } from '@ant-design/icons';
import '../App.css'; // Ensure you have corresponding CSS for the styles used

export default function SaveButton() {
  const handleSaveClick = async () => {
    const dollFrame = document.querySelector('.doll-frame');

    if (!dollFrame) {
      console.error('Doll frame not found!');
      return;
    }

    try {
      const canvas = await html2canvas(dollFrame, { useCORS: true, scale: window.devicePixelRatio });
      const dataUrl = canvas.toDataURL('image/jpeg');
      
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = 'doll.png';
      link.click();
    } catch (error) {
      console.error('Error while saving doll:', error);
    }
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
