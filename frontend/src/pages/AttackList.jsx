import usePolling from "../hooks/usePolling";
import { getAllAttacks } from "../api/attackService";
import AttackCard from "../components/AttackCard";

function AttackList() {
  const attacks = usePolling(getAllAttacks, 3000);

  return (
    <div className="page">
      <h1>Attack Logs</h1>

      {attacks.length === 0 && <p>No attacks found.</p>}

      {attacks.map((attack) => (
        <AttackCard key={attack._id} attack={attack} />
      ))}
    </div>
  );
}

export default AttackList;
