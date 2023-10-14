import './SiteTitle.css';

const SiteTitle = ({ route, isSignedIn }) => {
  return (
    <>
      <h1 className="title animate__animated animate__fadeInDown">
        Smart<span>Brain</span>
      </h1>
      {isSignedIn ? (
        <>
          <div className="title__rank">
            <h2>Welcome back, [user]</h2>
            <p>
              Your current rank is <span>#5</span>
            </p>
          </div>
          <div className="title__subtitle">
            <p>
              Paste an image link below, the app will detect all human faces
              automatically.
            </p>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default SiteTitle;
