import { createContext, useState } from "react";

export const AttackContext = createContext();

export default function AttackProvider({ children }) {
  const [attacks, setAttacks] = useState([]);

  return (
    <AttackContext.Provider value={{ attacks, setAttacks }}>
      {children}
    </AttackContext.Provider>
  );
}
