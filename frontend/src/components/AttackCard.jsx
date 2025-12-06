import { Link } from "react-router-dom";

function AttackCard({ attack }) {
  return (
    <div className="attack-card">
      <h3>{attack.type}</h3>
      <p>Source: {attack.sourceIP}</p>
      <p>Target: {attack.targetIP}</p>
      <p>Severity: {attack.severity}</p>

      <Link to={`/attacks/${attack._id}`}>View Details</Link>
    </div>
  );
}

export default AttackCard;
