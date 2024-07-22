import React, { useState, useEffect, useRef } from 'react';
import html2canvas from 'html2canvas';
import { DownloadOutlined, HeartFilled } from '@ant-design/icons';
import '../App.css'; 

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
    document.addEventListener('pointerdown', handleClickOutside);

    return () => {
      document.removeEventListener('pointerdown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <br />
      <button className="save-button" onClick={handleSaveClick}>
       <h1>test</h1>
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
