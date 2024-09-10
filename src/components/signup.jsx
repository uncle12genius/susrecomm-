import React, { useState } from "react";
import styled from "styled-components"; // It's imported, but no styled components are used

const Signup = () => {
  const [isSignUp, setIsSignUp] = useState(false); // Define state for toggling

  const styles = {
    body: {
      background: "url('background.jpg') center/cover no-repeat",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      color: "whitesmoke",
    },
    card: {
      width: "350px",
      height: "430px",
      perspective: "1500px",
    },
    chk: {
      display: "none",
    },
    content: {
      width: "100%",
      height: "100%",
      display: "flex",
      transformStyle: "preserve-3d",
      boxShadow: "0 0 15px rgba(0, 0, 0, 0.5)",
      borderRadius: "8px",
      transition: "transform 1s cubic-bezier(0.75, 0, 0.85, 1)",
      position: "relative",
    },
    front: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backdropFilter: "blur(2px)",
      backfaceVisibility: "hidden",
      borderRadius: "8px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    back: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backdropFilter: "blur(2px)",
      backfaceVisibility: "hidden",
      borderRadius: "8px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transform: "rotateY(180deg)",
    },
    inner: {
      height: "100%",
      padding: "1.5em",
      transform: "translateZ(80px) scale(1)",
    },
    h2: {
      fontSize: "28px",
      fontWeight: "bold",
      color: "black",
    },
    input: {
      width: "95%",
      height: "40px",
      padding: "10px",
      margin: "10px 0",
      background: "#f5f0f0",
      border: "none",
      borderRadius: "4px",
    },
    label: {
      fontSize: "16px",
      cursor: "pointer",
      display: "block",
      marginTop: "10px",
      textAlign: "right",
    },
    submit: {
      width: "100%",
      padding: "10px",
      backgroundColor: "purple",
      color: "#fff",
      fontSize: "18px",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
    submitHover: {
      backgroundColor: "red",
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.card}>
        <input
          type="checkbox"
          id="chk"
          aria-hidden="true"
          checked={isSignUp}
          onChange={() => setIsSignUp(!isSignUp)}
          style={styles.chk}
        />
        <div
          style={{
            ...styles.content,
            transform: isSignUp ? "rotateY(180deg)" : "rotateY(0)",
          }}
        >
          {/* Front Side (Login) */}
          <div style={{ ...styles.front, display: isSignUp ? "none" : "flex" }}>
            <div style={styles.inner}>
              <h2 style={styles.h2}>LOG IN</h2>
              <form action="connect.php" method="post">
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  aria-label="Username"
                  required
                  style={styles.input}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  aria-label="Password"
                  required
                  style={styles.input}
                />
                <label onClick={() => setIsSignUp(true)} style={styles.label}>
                  Don't have an account?
                </label>
                <input
                  type="submit"
                  name="submit"
                  id="submit"
                  style={styles.submit}
                />
              </form>
            </div>
          </div>

          {/* Back Side (Sign Up) */}
          <div style={{ ...styles.back, display: isSignUp ? "flex" : "none" }}>
            <div style={styles.inner}>
              <h2 style={styles.h2}>Create an account</h2>
              <p>Please enter your details below to create an account</p>
              <form action="signup.php" method="post">
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  aria-label="Username"
                  required
                  style={styles.input}
                />
                <input
                  type="number"
                  name="phone_number"
                  placeholder="Phone Number"
                  aria-label="Phone Number"
                  required
                  style={styles.input}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Create a password"
                  aria-label="Create a password"
                  required
                  style={styles.input}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  aria-label="Email"
                  required
                  style={styles.input}
                />
                <input
                  type="submit"
                  name="submit"
                  id="submit"
                  style={styles.submit}
                />
                <label onClick={() => setIsSignUp(false)} style={styles.label}>
                  Back to log in page
                </label>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
