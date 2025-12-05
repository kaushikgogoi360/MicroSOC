import usePolling from "../hooks/usePolling";
import { getAllAttacks } from "../api/attackService";
import AttackCard from "../components/AttackCard";

function AttackList() {
  const attacks = usePolling(getAllAttacks, 3000);

  return (
    <div className="page">
      <h1>Attack Logs</h1>

      {attacks.map((a) => (
        <AttackCard key={a._id} attack={a} />
      ))}
    </div>
  );
}

export default AttackList;
