import './SiteTitle.css';

import UserStats from '../stats/UserStats';

const SiteTitle = ({ route, isSignedIn, user, numFaces }) => {
  return (
    <>
      <h1 className="title animate__animated animate__fadeInDown">
        Smart<span>Brain</span>
      </h1>
      {isSignedIn ? <UserStats user={user} numFaces={numFaces} /> : <></>}
    </>
  );
};

export default SiteTitle;
