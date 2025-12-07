import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toast, setToast] = useState({ message: "", type: "" });
  const navigate = useNavigate();

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast({ message: "", type: "" }), 3000);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        showToast(data.message || "Invalid email or password", "error");
        return;
      }

      localStorage.setItem("token", data.token);
      showToast("Login Successful!", "success");
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      showToast("Server error. Check your backend.", "error");
    }
  };

  return (
    <div style={styles.container}>
      {/* Top Center Title */}
      <div style={styles.topText}>SOC by CODESPARK</div>

      {/* Login Card */}
      <div style={styles.card}>
        <h2 style={styles.title}>Login</h2>
        <form onSubmit={handleLogin} style={styles.form}>
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
          <button type="submit" style={styles.button}>
            Login
          </button>
          <button
            type="button"
            style={{ ...styles.button, background: "#777" }}
            onClick={() => navigate("/signup")}
          >
            Go to Signup
          </button>
        </form>
      </div>

      {/* Bottom Left Footer */}
      <div style={styles.bottomText}>CODESPARK 2025</div>

      {/* Toast Notification */}
      {toast.message && (
        <div
          style={{
            ...styles.toast,
            ...(toast.type === "success"
              ? styles.toastSuccess
              : styles.toastError),
          }}
        >
          {toast.message}
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
    position: "relative",
    flexDirection: "column",
  },

  topText: {
    position: "absolute",
    top: "20px",
    textAlign: "center",
    width: "100%",
    fontSize: "24px",
    fontWeight: "700",
    color: "#fff",
  },

  bottomText: {
    position: "absolute",
    bottom: "20px",
    left: "20px",
    fontSize: "14px",
    fontWeight: "600",
    color: "#fff",
  },

  card: {
    width: "350px",
    padding: "30px",
    borderRadius: "12px",
    background: "#fff",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    zIndex: 1,
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

  // Toast Styles
  toast: {
    position: "fixed",
    top: "20px",
    right: "20px",
    padding: "15px 25px",
    borderRadius: "8px",
    color: "#fff",
    fontWeight: "600",
    fontSize: "14px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    animation: "slideIn 0.3s ease, fadeOut 0.3s ease 2.7s forwards",
    zIndex: 999,
  },

  toastSuccess: { background: "#4BB543" },
  toastError: { background: "#FF4C4C" },
};

// Keyframe animations
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(
  `@keyframes slideIn { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }`,
  styleSheet.cssRules.length
);
styleSheet.insertRule(
  `@keyframes fadeOut { to { transform: translateX(100%); opacity: 0; } }`,
  styleSheet.cssRules.length
);

export default LoginPage;
