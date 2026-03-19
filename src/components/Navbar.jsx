const Navbar = ({ title }) => {
  return (
    <nav style={{
      backgroundColor: "#1e293b",
      color: "#fff",
      padding: "1rem 2rem",
      textAlign: "center",
      fontSize: "1.5rem",
      fontWeight: "bold"
    }}>
      {title}
    </nav>
  );
};

export default Navbar;