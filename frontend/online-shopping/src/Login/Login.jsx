import React from "react";
import { Link } from "react-router-dom"; 
import logo from "./logo.png";
import { color } from "framer-motion";

const Login = () => {
  return (
    <div style={styles.container}>
      <img src={logo} alt="Offside  Deals  Logo" style={styles.topLogo} />
      <img src={logo} alt="background logo" style={styles.backgroundLogo} />

      <div style={styles.card}>
        <h3 style={styles.title}>Offside Deals Login</h3>

        <input type="email" placeholder="Email" style={styles.input} />
        <input type="password" placeholder="Password" style={styles.input} />

        <Link to="/Home"><button style={{ backgroundColor: "#0a0f1c", padding: "10px 20px", borderRadius: "8px" ,color:"white"}}
          >Login</button></Link>

        <p style={styles.signupText}>
          Don't have an account?{" "}
          <Link to="/signup" style={{color:"#0a0f1c"}}>
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#0A0F1C",
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
  },
  topLogo: {
    width: "120px",
    marginBottom: "1rem",
    zIndex: 2,
  },
  backgroundLogo: {
    position: "absolute",
    opacity: 0.05,
    width: "450px",
    height: "auto",
    zIndex: 0,
    pointerEvents: "none",
  },
  card: {
    backgroundColor: "#fff",
    padding: "2.5rem",
    borderRadius: "10px",
    width: "350px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
    textAlign: "center",
    zIndex: 1,
  },
    title: {
    marginBottom: "1.5rem",
    fontSize: "1.5rem",
    color: "#0A0F1C",
    
    letterSpacing: "1px",
    textTransform: "uppercase",
  },
  input: {
    width: "100%",
    padding: "0.75rem",
    marginBottom: "1rem",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#2a2a2a",
    color: "#fff",
    fontSize: "1rem",
  },
  button: {
    backgroundColor: "#1E48FF",
    color: "#fff",
    border: "none",
    padding: "0.4rem 0",
    fontSize: "1rem",
    borderRadius: "5px",
    width: "35%",
    cursor: "pointer",
    marginTop: "1rem",
  },
  signupText: {
    fontSize: "0.9rem",
    color: "#555",
    marginTop: "1rem",
  },
  signupLink: {
    color: "#1E4CFF",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default Login;