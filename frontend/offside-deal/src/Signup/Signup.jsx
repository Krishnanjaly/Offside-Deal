import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../Login/logo.png";

const Signup = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (!strongPassword.test(form.password)) {
      alert(
        "Password must be at least 8 characters and include uppercase, lowercase, number, and symbol."
      );
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Call API to register
    axios
      .post("http://localhost:5000/api/register", {
        name: form.name,
        email: form.email,
        password: form.password,
      })
      .then((res) => {
        alert(res.data.message);
        navigate("/Login"); // move to login after success
      })
      .catch((err) => {
        alert(err.response.data.error);
      });
  };

  return (
    <div style={styles.container}>
      <Link to="/Login">
        <button onClick={() => navigate("/")} style={styles.backButton}>
          ← Back
        </button>
      </Link>

      <img src={logo} alt="Top Logo" style={styles.topLogo} />
      <img src={logo} alt="Background Logo" style={styles.backgroundLogo} />

      <div style={styles.card}>
        <h3 style={styles.title}>Create Account</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
            style={styles.input}
            required
          />

          <button
            type="submit"
            style={{
              backgroundColor: "#0a0f1c",
              padding: "10px 20px",
              borderRadius: "8px",
              color: "white",
              marginBottom: "5px",
            }}
          >
            Sign Up
          </button>
        </form>
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
    padding: "2.7rem",
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
  backButton: {
    position: "absolute",
    top: "1rem",
    left: "1rem",
    background: "transparent",
    border: "none",
    color: "#1E90FF",
    fontWeight: "bold",
    fontSize: "1rem",
    cursor: "pointer",
    zIndex: 3,
  },
};

export default Signup;
