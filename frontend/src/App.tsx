import { useEffect, useState } from 'react';
import axios from 'axios';

export default function App() {
  const [backendStatus, setBackendStatus] = useState<string>('Checking...');

  useEffect(() => {
    axios.get('http://localhost:5000/api/health')
      .then(res => {
        setBackendStatus(res.data.message);
      })
      .catch(err => {
        setBackendStatus('Error connecting to backend');
        console.error(err);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center font-sans text-gray-800">
      <h1 className="text-4xl font-bold mb-4 text-blue-600">Jadwal Asrama Digital</h1>
      <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
        <h2 className="text-xl font-semibold mb-2">System Status</h2>
        <div className="flex items-center space-x-2">
          <span className="font-medium">Backend:</span>
          <span className={`px-3 py-1 rounded-full text-sm font-bold ${backendStatus === 'Backend is running!' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {backendStatus}
          </span>
        </div>
      </div>
    </div>
  );
}
