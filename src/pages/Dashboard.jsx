import usePolling from "../hooks/usePolling";
import { getAllAttacks } from "../api/attackService";

function Dashboard() {
  const attacks = usePolling(getAllAttacks, 5000);

  return (
    <div className="page">
      <h1>Dashboard</h1>

      <div className="stats-box">
        <h2>Total Attacks: {attacks.length}</h2>
      </div>
    </div>
  );
}

export default Dashboard;
