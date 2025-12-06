import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAttackById } from "../api/attackService";

function AttackDetails() {
  const { id } = useParams();
  const [attack, setAttack] = useState(null);

  useEffect(() => {
    async function load() {
      const data = await getAttackById(id);
      setAttack(data);
    }
    load();
  }, [id]);

  if (!attack) return <p>Loading attack details...</p>;

  return (
    <div className="page">
      <h1>Attack Details</h1>

      <p><strong>Type:</strong> {attack.type}</p>
      <p><strong>Source IP:</strong> {attack.sourceIP}</p>
      <p><strong>Target IP:</strong> {attack.targetIP}</p>
      <p><strong>Severity:</strong> {attack.severity}</p>
      <p><strong>Timestamp:</strong> {attack.timestamp}</p>
    </div>
  );
}

export default AttackDetails;
