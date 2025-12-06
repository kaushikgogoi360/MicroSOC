# Frontend - Cyber Attack Monitoring Dashboard

This frontend is built using React and is designed to visualize real‑time cyber‑attack data collected by the backend API.

## Features

### 1. Real-Time Attack Count
Displays the total number of recorded attacks by continuously polling the backend API.

### 2. Live Attack List
Shows every attack entry (IP, timestamp, attack type, status) in a clean table layout.

### 3. Auto-Refresh Every Few Seconds
Uses a polling mechanism (`setInterval`) to automatically fetch updated data without needing to refresh the page manually.

### 4. Modular Component-Based UI
The project follows a proper folder structure:
- `components/` for reusable UI elements  
- `pages/` for main screens  
- `api/` for backend API integration  
- `hooks/` for custom logic like polling  

### 5. Environment-Based API Config
The API base URL comes from `.env`:

### 6. Error Handling and Loading Indicators
Shows a loader when fetching data and displays clear error messages if the backend is unreachable.

### 7. Fully Ready for Deployment
Compatible with Netlify, Vercel, and GitHub Pages.

## How It Works

The frontend fetches data from your backend using:
- Standard REST API requests (`fetch` or `axios`)
- Repeated polling to update the UI every 3–5 seconds

Example polling logic:
```js
useEffect(() => {
  const fetchData = async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/attacks`);
    setAttacks(res.data);
  };

  fetchData();
  const interval = setInterval(fetchData, 3000);

  return () => clearInterval(interval);
}, []);
