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
      const canvas = await html2canvas(dollFrame, { useCORS: true });
      const dataUrl = canvas.toDataURL('image/jpeg');
      setImageUrl(dataUrl);
    } catch (error) {
      console.error('Error while saving doll:', error);
    }
  };

  const handleClickOutside = (event) => {
    if (previewRef.current && !previewRef.current.contains(event.target)) {
      setImageUrl(null); // Hide the preview
    }
  };

  useEffect(() => {
    const handleTouchOutside = (event) => {
      if (previewRef.current && !previewRef.current.contains(event.target)) {
        setImageUrl(null); // Hide the preview
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleTouchOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleTouchOutside);
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
        <div className="fullscreen-preview">
          <div ref={previewRef} className="preview-content">
            <img src={imageUrl} alt="Doll Preview" />
            <p>Long-press/right-click the image to save to your gallery.</p>
          </div>
        </div>
      )}
    </div>
  );
}
