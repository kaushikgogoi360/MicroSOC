import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("analyst");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, role }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data?.message || "Signup failed");
        return;
      }

      alert("Signup Successful!");
      navigate("/"); // Go to login page
    } catch (err) {
      alert("Something went wrong!");
      console.error(err);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Sign Up</h2>

        <form onSubmit={handleSignup} style={styles.form}>
          <label style={styles.label}>Name</label>
          <input
            type="text"
            required
            value={name}
            style={styles.input}
            onChange={(e) => setName(e.target.value)}
          />

          <label style={styles.label}>Email</label>
          <input
            type="email"
            required
            value={email}
            style={styles.input}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label style={styles.label}>Password</label>
          <input
            type="password"
            required
            value={password}
            style={styles.input}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label style={styles.label}>Role</label>
          <select
            style={styles.input}
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            
            <option value="analyst">Analyst</option>
            <option value="admin">Admin</option>
          </select>

          <button type="submit" style={styles.button}>
            Sign Up
          </button>

          <button
            type="button"
            style={{ ...styles.button, background: "#777" }}
            onClick={() => navigate("/")}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f0f2f5",
  },

  card: {
    width: "350px",
    padding: "30px",
    borderRadius: "12px",
    background: "#fff",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },

  title: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "28px",
    fontWeight: "600",
    color: "#333",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },

  label: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#444",
  },

  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    outline: "none",
    fontSize: "15px",
    transition: "0.2s",
  },

  button: {
    marginTop: "10px",
    padding: "12px",
    background: "#4A80F0",
    color: "white",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "600",
    transition: "0.2s",
  },
};

export default SignUp;
