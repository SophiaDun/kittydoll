import React, { useState, useEffect, useRef } from 'react';
import html2canvas from 'html2canvas';
import { DownloadOutlined, HeartFilled } from '@ant-design/icons';
import '../App.css'; 

export default function SaveButton() {
  const [imageUrl, setImageUrl] = useState(null);
  const previewRef = useRef(null);

  const handleSaveClick = async () => {
    console.log('Button clicked'); 
  
    const dollFrame = document.querySelector('.doll-frame');
    if (!dollFrame) {
      console.error('Doll frame not found!');
      return;
    }
  
    try {
      requestAnimationFrame(async () => {
        const canvas = await html2canvas(dollFrame, { useCORS: true, scale: window.devicePixelRatio });
        const dataUrl = canvas.toDataURL('image/jpeg');
        console.log('Image URL:', dataUrl); 
        setImageUrl(dataUrl);
      });
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
    document.addEventListener('pointerdown', handleClickOutside);

    return () => {
      document.removeEventListener('pointerdown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <br />
      <button className="save-button" onClick={handleSaveClick}>
        <div style={{ display: 'inline-block', position: 'relative' }}>
          <HeartFilled style={{ fontSize: '5vh', color: '#e5e5e5' }} />
          <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white' }}>
            <DownloadOutlined className="save" />
          </span>
        </div>
      </button>

      {imageUrl && (
        <div className="fullscreen-preview">
          <div ref={previewRef} className="preview-content">
          <img src={imageUrl} alt="Doll Preview" style={{ maxWidth: '100%', maxHeight: '100%' }} />

            <p>Long-press/right-click the image to save to your gallery.</p>
          </div>
        </div>
      )}
    </div>
  );
}
