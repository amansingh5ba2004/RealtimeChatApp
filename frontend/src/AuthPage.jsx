import axios from "axios";

const AuthPage = ({ onAuth }) => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.username.value; // Get the value directly by name

    try {
      const response = await axios.post("http://localhost:3001/authenticate", {
        username,
      });
      onAuth({ ...response.data, secret: username });
    } catch (error) {
      console.error("Authentication error:", error);
      alert("Failed to authenticate. Please try again.");
    }
  };

  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">Welcome 👋</div>
        <div className="form-subtitle">Set a username to get started</div>
        <div className="auth">
          <div className="auth-label">Username</div>
          <input className="auth-input" name="username" required />
          <button className="auth-button" type="submit">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthPage;
