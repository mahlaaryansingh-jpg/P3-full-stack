function Header() {
  return (
    <header className="header">

      <div className="logo">
        DEV@Deakin
      </div>

      <input
        className="search-box"
        type="text"
        placeholder="Search..."
      />

      <button className="post-button">
        Post
      </button>

      <button className="login-button">
        Login
      </button>

    </header>
  );
}

export default Header;