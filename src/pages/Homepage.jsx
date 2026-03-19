import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";

const HomePage = () => {
  return (
    <div style={{display: "flex", flexDirection: "column", minHeight: "100vh",width:"100%" }}>
      <Navbar title="My Job Portal" />

      <main style={{
        flex: 1,
        display: "flex",
        gap: "2rem",
        padding: "2rem",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        background: "linear-gradient(to right, #f0f9ff, #e0f2fe)"
      }}>
        <Card
          title="Frontend Developer"
          description="Build modern UI with React."
          image="/images/frontend.jpg"
          buttonLabel="Apply Now"
        />
        <Card
          title="Backend Developer"
          description="Work with Node.js and databases."
          image="/images/backend.jpg"
          buttonLabel="Apply Now"
        />
      </main>

      <Footer description="© 2026 My Job Portal. All rights reserved." />
    </div>
  );
};

export default HomePage;