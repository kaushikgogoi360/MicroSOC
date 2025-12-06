const API_BASE = "http://localhost:5000/api/attacks";

// Helper: Get token from localStorage
function getAuthHeader() {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
}

// 1️⃣ Get all attacks
export async function getAllAttacks() {
  try {
    const res = await fetch(API_BASE, {
      headers: {
        "Content-Type": "application/json",
        ...getAuthHeader(),
      },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch attacks");
    }

    return await res.json();
  } catch (err) {
    console.error("Error fetching attacks:", err);
    return { error: err.message };
  }
}

// 2️⃣ Get attack by ID
export async function getAttackById(id) {
  try {
    const res = await fetch(`${API_BASE}/${id}`, {
      headers: {
        "Content-Type": "application/json",
        ...getAuthHeader(),
      },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch attack details");
    }

    return await res.json();
  } catch (err) {
    console.error("Error fetching attack:", err);
    return { error: err.message };
  }
}

// 3️⃣ Create a new attack (optional if needed)
export async function createAttack(data) {
  try {
    const res = await fetch(API_BASE, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...getAuthHeader(),
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error("Failed to create attack");
    }

    return await res.json();
  } catch (err) {
    console.error("Error creating attack:", err);
    return { error: err.message };
  }
}
