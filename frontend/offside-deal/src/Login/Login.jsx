import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "./logo.png";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", form)
      .then((res) => {
        alert(res.data.message);
        // Optionally store token to localStorage
        localStorage.setItem("token", res.data.token);
        navigate("/Home");
      })
      .catch((err) => {
        alert(err.response.data.error);
      });
  };

  return (
    <div style={styles.container}>
      <img src={logo} alt="Offside  Deals  Logo" style={styles.topLogo} />
      <img src={logo} alt="background logo" style={styles.backgroundLogo} />

      <div style={styles.card}>
        <h3 style={styles.title}>Offside Deals Login</h3>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            style={styles.input}
            required
          />
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            style={styles.input}
            required
          />

          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>

        <p style={styles.signupText}>
          Don't have an account?{" "}
          <Link to="/signup" style={{ color: "#0a0f1c" }}>
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
    backgroundColor: "#0a0f1c",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "1rem",
    marginBottom: "0.5rem",
  },
  signupText: {
    fontSize: "0.9rem",
    color: "#555",
    marginTop: "1rem",
  },
};

export default Login;
