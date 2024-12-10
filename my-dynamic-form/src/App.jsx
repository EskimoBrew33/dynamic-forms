import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DynamicForm from './components/ui/DynamicForm';

function App() {
  const [productInfo , setProductConfig] = useState([]);
  const [coverage, setCoverageConfig] = useState([]);
  const [activeForm, setActiveForm] = useState('product'); // 'product' or 'coverage'
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchConfigs = async () => {
      try {
        const [productRes, coverageRes] = await Promise.all([
          axios.get('http://localhost:3001/api/product-info'),
          axios.get('http://localhost:3001/api/coverage')

        ]);
        
        setProductConfig(productRes.data);
        setCoverageConfig(coverageRes.data.fields); // Note: we use .fields here
        setLoading(false);
      } catch (err) {
        setError('Error fetching configurations');
        setLoading(false);
      }
    };

    fetchConfigs();
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
      <div className="max-w-6xl mx-auto">
        {/* Toggle Buttons */}
        <div className="mb-6 flex justify-center space-x-4">
          <button
            onClick={() => setActiveForm('product')}
            className={`px-6 py-2 rounded-lg font-medium ${
              activeForm === 'product'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Product Information
          </button>
          <button
            onClick={() => setActiveForm('coverage')}
            className={`px-6 py-2 rounded-lg font-medium ${
              activeForm === 'coverage'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Coverage Information
          </button>
        </div>

        {/* Form */}
        <DynamicForm 
          config={activeForm === 'product' ? productInfo : coverage}
          formTitle={activeForm === 'product' ? 'Product Information' : 'Coverage Information'}
        />
      </div>
    </div>
  );
}

export default App;