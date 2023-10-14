import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, boxes }) => {
  return (
    <div className="image-container2">
      <div className="image-container">
        <img
          id="inputImage"
          src={imageUrl}
          alt=""
          width="600px"
          height="auto"
        />
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
