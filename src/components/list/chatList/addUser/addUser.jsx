import "./addUser.css";
const AddUser = () => {
  return (
    <div className="addUser">
      <form>
        <input type = "text" placeholder="Username" name ="username"/>
        <button> search</button>
      </form>
      <div className="user">
        <div className="detail">
          <img src="./avatar.png"></img>
          <span>Jane Done</span>
        </div>

        <button> Add user</button>
      </div>
    </div>
  );
};
export default AddUser;
