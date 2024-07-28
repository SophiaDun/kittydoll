import React, { useState, useEffect, useRef } from 'react';
import html2canvas from 'html2canvas';
import { DownloadOutlined, HeartFilled } from '@ant-design/icons';
import '../App.css';

export default function SaveButton() {
  const [imageUrl, setImageUrl] = useState(null);
  const previewRef = useRef(null);

  const getElementImage = async (sourceElement) => {
    //Makes all lazy-loaded images are loaded eagerly
    Array.from(sourceElement.querySelectorAll('img')).forEach((img) => {
      if (img.getAttribute('loading') === 'lazy') img.setAttribute('loading', 'eager');
    });

    const canvas = await html2canvas(sourceElement, {
      useCORS: true,
      allowTaint: true,
      logging: true,
      height: sourceElement.clientHeight || window.innerHeight,
      width: sourceElement.clientWidth || window.innerWidth,
      ignoreElements: (el) =>
        el.nodeName.toLowerCase() === 'canvas' ||
        el.getAttribute('loading') === 'lazy'
    });

    const base64 = canvas.toDataURL('image/jpeg', 1.0);

  
    const image = new Image();
    image.width = sourceElement.offsetWidth || sourceElement.clientWidth;
    image.height = sourceElement.offsetHeight || sourceElement.clientHeight;
    image.src = base64;
    return image;
  };

  const handleSaveClick = async () => {
    console.log('Button clicked');

    const dollFrame = document.querySelector('.doll-frame');
    if (!dollFrame) {
      console.error('Doll frame not found!');
      return;
    }

    try {
      // Ensures that rendering is complete
      await new Promise((resolve) => requestAnimationFrame(() => setTimeout(resolve, 100)));

   
      const image = await getElementImage(dollFrame);
      const dataUrl = image.src;
      console.log('Image URL:', dataUrl);
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
        <div style={{ display: 'inline-block', position: 'relative' }}>
          <HeartFilled style={{ fontSize: '3em', color: '#e5e5e5' }} />
          <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white' }}>
            <DownloadOutlined className="save" />
          </span>
        </div>
      </button>

      {imageUrl && (
        <div className="fullscreen-preview">
          <div ref={previewRef} className="preview-content">
            <img src={imageUrl} alt="Doll Preview" />
            <p>Long-press/right-click this image to download creation</p>
          </div>
        </div>
      )}
    </div>
  );
}
