const Footer = ({ description }) => {
  return (
    <footer style={{
      backgroundColor: "#1e293b",
      color: "#fff",
      padding: "1rem",
      textAlign: "center",
      marginTop: "auto"
    }}>
      {description}
    </footer>
  );
};

export default Footer;