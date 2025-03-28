import ChatList from "./chatList/chatList";
import "./list.css";
import Userinfo from "./userinfo/Userinfo";

const List = (props) => {
  return (
    <div className="list">
       <Userinfo />
       <ChatList />
    </div>
  );
}

export default List;
