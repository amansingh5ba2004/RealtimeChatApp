import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from "react-chat-engine-advanced";

const ChatsPage = ({ user }) => {
  // Extract chat logic with the provided project ID, username, and secret
  const chatProps = useMultiChatLogic(
    "418df62e-7289-43f8-82e8-d41554637c8e", 
    user.username, 
    user.secret
  );

  return (
    <div style={{ height: '100vh' }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{ height: '100%' }} />
    </div>
  );
};

export default ChatsPage;
