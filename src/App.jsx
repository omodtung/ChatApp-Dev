import List from "./components/list/List";
import Detail from "./components/detail/Detail";
import Chat from "./components/chat/Chat";
import { useEffect } from "react";
import Login from "./components/Login/Login";
import Notification from "./components/notification/Notification";
import { useUserStore } from "./lib/userStore.js";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase";
const App = () => {
  // const user = false;
  const { currentUser, isLoading, fetchUserInfo } = useUserStore();



  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      fetchUserInfo(user?.uid);
    });

    return () => {
      unSub();
    };
  }, [fetchUserInfo]);



  console.log(currentUser)
  if (isLoading) return <div className="loading"> Loading .. .</div>;
  return (
    <div className="container">
      {currentUser ? (
        <>
          <List></List>
          <Chat></Chat>
          <Detail></Detail>_
        </>
      ) : (
        <Login></Login>
      )}
      <Notification></Notification>
    </div>
  );
};

export default App;
