import { useEffect, useState } from "react";

export default function usePolling(callback, interval = 5000) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await callback();
      setData(result);
    }

    fetchData();
    const id = setInterval(fetchData, interval);

    return () => clearInterval(id);
  }, [callback, interval]);

  return data;
}
