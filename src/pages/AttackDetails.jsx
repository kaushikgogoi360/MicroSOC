import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAttackById } from "../api/attackService";

function AttackDetails() {
  const { id } = useParams();
  const [attack, setAttack] = useState(null);

  useEffect(() => {
    async function fetchAttack() {
      const data = await getAttackById(id);
      setAttack(data);
    }
    fetchAttack();
  }, [id]);

  if (!attack) return <p>Loading...</p>;

  return (
    <div className="page">
      <h1>Attack Details</h1>
      <p>Type: {attack.type}</p>
      <p>Source IP: {attack.sourceIP}</p>
      <p>Target IP: {attack.targetIP}</p>
      <p>Timestamp: {attack.timestamp}</p>
    </div>
  );
}

export default AttackDetails;
