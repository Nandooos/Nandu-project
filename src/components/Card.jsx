import Button from "./Button";

const Card = ({ title, description,image, buttonLabel }) => {
  return (
    <div style={{
      border: "1px solid #e2e8f0",
      borderRadius: "8px",
      width: "250px",
      padding: "1rem",
      textAlign: "center",
      backgroundColor: "#f8fafc",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
    }}>
       <img src={image} alt={title} style={{height: "180px", width: "100%", borderRadius: "6px" }} />
      <h3 style={{ margin: "1rem 0 0.5rem" }}>{title}</h3>
      <p style={{ fontSize: "0.9rem", color: "#475569" }}>{description}</p>
      <Button label={buttonLabel} onClick={() => alert(`Applying for ${title}`)} />
    </div>
  );
};

export default Card;

