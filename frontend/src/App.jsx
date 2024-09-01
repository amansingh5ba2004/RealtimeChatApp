import { useState } from "react";

import "./App.css";

import AuthPage from "./AuthPage";
import ChatsPage from "./ChatsPage";

function App() {
  const [user, setUser] = useState(null); // Initialize with null instead of undefined

  // If there's no user, render the AuthPage component
  if (!user) {
    return <AuthPage onAuth={setUser} />; // Simplified onAuth callback
  }

  // If there's a user, render the ChatsPage component
  return <ChatsPage user={user} />;
}

export default App;
