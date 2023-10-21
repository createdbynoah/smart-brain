import { useState, useEffect } from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, boxes }) => {
  const [orientation, setOrientation] = useState(null);

  useEffect(() => {
    const image = document.getElementById('inputImage');
    if (image) {
      image.addEventListener('load', () => {
        const width = image.naturalWidth;
        const height = image.naturalHeight;
        if (width > height) {
          setOrientation('landscape');
        } else {
          setOrientation('portrait');
        }
      });
    }
  }, [imageUrl]);

  return (
    <div className="image-container2">
      <div className="image-container">
        <img id="inputImage" src={imageUrl} alt="" />
        {boxes.map((box) => (
          <div
            key={box.id}
            className="bounding-box"
            style={{
              top: box.topRow,
              right: box.rightCol,
              bottom: box.bottomRow,
              left: box.leftCol,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default FaceRecognition;
