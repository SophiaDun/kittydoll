import React, { useState, useEffect, useRef } from 'react';
import html2canvas from 'html2canvas';
import { DownloadOutlined, HeartFilled } from '@ant-design/icons';

export default function SaveButton() {
  const [imageUrl, setImageUrl] = useState(null);
  const previewRef = useRef(null);

  const handleSaveClick = () => {
    const dollFrame = document.querySelector('.doll-frame');

    html2canvas(dollFrame, { useCORS: true }) // Handle cross-origin images
      .then((canvas) => {
        canvas.toBlob((blob) => {
          const url = URL.createObjectURL(blob);
          setImageUrl(url);
        }, 'image/jpeg');
      })
      .catch((error) => {
        console.error('Error while saving doll:', error);
      });
  };

  const handleClickOutside = (event) => {
    if (previewRef.current && !previewRef.current.contains(event.target)) {
      setImageUrl(null); // Hide the preview
    }
  };

  useEffect(() => {
    // Attach event listener for clicks outside the preview
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
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
            <p>Long-press/right-click the image to save to your doll.</p>
          </div>
        </div>
      )}
    </div>
  );
}
