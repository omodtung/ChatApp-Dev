import './userInfo.css'
const UserInfo = () => {
  return (
    <div className="userInfo">
      <div className="user">
        <img src="./avatar.png"></img>
        <h2> The Tung</h2>
      </div>
      <div className="icons">
<img src="./more.png"></img>
<img src="./video.png"></img>
<img src="./edit.png"></img>
      </div>
    </div>
  );
};
export default UserInfo;
