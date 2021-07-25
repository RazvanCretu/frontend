const LogIn = () => {
  return (
    <div>
      Log In page{" "}
      <button
        onClick={() => {
          window.location = "http://localhost:1337/connect/google";
        }}
      >
        Log In
      </button>
    </div>
  );
};

export default LogIn;
