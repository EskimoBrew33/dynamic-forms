import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DynamicForm from './components/ui/DynamicForm';

function App() {
  const [formConfig, setFormConfig] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFormConfig = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/product-info');
        setFormConfig(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching form configuration');
        setLoading(false);
      }
    };

    fetchFormConfig();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 p-8 flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 p-8 flex items-center justify-center">
        <div className="text-xl text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <DynamicForm config={formConfig} />
    </div>
  );
}

export default App;