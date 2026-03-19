const Button = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "#2563eb",
        color: "#fff",
        border: "none",
        padding: "0.75rem 1.5rem",
        borderRadius: "6px",
        cursor: "pointer",
        fontSize: "1rem",
        transition: "background 0.3s ease"
      }}
    >
      {label}
    </button>
  );
};

export default Button;