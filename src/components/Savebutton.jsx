import React, { useState, useEffect, useRef } from 'react';
import html2canvas from 'html2canvas';
import { DownloadOutlined, HeartFilled } from '@ant-design/icons';

export default function SaveButton() {
  const [imageUrl, setImageUrl] = useState(null);
  const previewRef = useRef(null);

  const handleSaveClick = async () => {
    const dollFrame = document.querySelector('.doll-frame');

    if (!dollFrame) {
      console.error('Doll frame not found!');
      return;
    }

    try {
      const canvas = await html2canvas(dollFrame, { useCORS: true, scale: window.devicePixelRatio });
      const dataUrl = canvas.toDataURL('image/jpeg');
      setImageUrl(dataUrl);
    } catch (error) {
      console.error('Error while saving doll:', error);
    }
  };

  const handleClickOutside = (event) => {
    if (previewRef.current && !previewRef.current.contains(event.target)) {
      setImageUrl(null); 
    }
  };

  useEffect(() => {

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

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

      {imageUrl && (
        <div className="fullscreen-preview" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.8)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div ref={previewRef} className="preview-content" style={{ position: 'relative', maxWidth: '90%', maxHeight: '90%' }}>
            <img src={imageUrl} alt="Doll Preview" style={{ maxWidth: '100%', maxHeight: '100%' }} />
            <p style={{ color: 'white', textAlign: 'center' }}>Long-press/right-click the image to save to your gallery.</p>
          </div>
        </div>
      )}
    </div>
  );
}
