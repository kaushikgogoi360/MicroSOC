const API_URL = "http://localhost:5000/api/attacks";

export async function getAllAttacks() {
  const res = await fetch(API_URL);
  return res.json();
}

export async function getAttackById(id) {
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
}
