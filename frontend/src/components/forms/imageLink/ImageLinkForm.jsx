import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div className="form-container">
      <div className="group">
        <input
          type="text"
          className="search__input"
          placeholder="Paste Image URL"
          onChange={onInputChange}
        />
        <button className="btn btn-orange btn__input" onClick={onButtonSubmit}>
          Detect
        </button>
      </div>
    </div>
  );
};

export default ImageLinkForm;
