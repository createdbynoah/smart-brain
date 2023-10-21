import './UserStats.css';

const UserStats = ({ user, numFaces }) => {
  return (
    <div>
      <h2 className="headline">{`Welcome back, ${user.name}`}</h2>
      <div className="user-stats">
        <div className="stat stat__entries">
          <p className="stat__label">Images</p>
          <p className="stat__number">{`${user.entries}`}</p>
        </div>
        <div className="stat stat__faces">
          <p className="stat__label">Faces</p>
          <p className="stat__number">{`${numFaces}`}</p>
        </div>
        {/* <div className="stat stat__history">
          <p className="stat__label">{'View History'}</p>
          <p className="stat__icon">
            <i className="fa-solid fa-clock-rotate-left"></i>
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default UserStats;
