import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DynamicForm from './components/ui/DynamicForm';

function App() {
  const [productConfig, setProductConfig] = useState([]);
  const [coverageConfig, setCoverageConfig] = useState([]);
  const [activeForm, setActiveForm] = useState('product');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchConfigs = async () => {
      try {
        const [productRes, coverageRes] = await Promise.all([
          axios.get('http://localhost:3001/api/product-data'),
          axios.get('http://localhost:3001/api/coverage-data')
        ]);
        
        setProductConfig(productRes.data);
        // Make sure we're accessing the fields array from coverage config
        setCoverageConfig(coverageRes.data.fields || []);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching:', err);
        setError('Error fetching configurations');
        setLoading(false);
      }
    };

    fetchConfigs();
  }, []);

  const handleFormSubmit = async (formData, formType) => {
    try {
      const endpoint = formType === 'product' 
        ? '/api/product-data' 
        : '/api/coverage-data';
      
      const dataToSave = formType === 'product'
        ? formData
        : { fields: formData };

      await axios.put(`http://localhost:3001${endpoint}`, dataToSave);
      alert('Configuration saved successfully!');
      
      // Refresh the data
      const response = await axios.get(`http://localhost:3001${endpoint}`);
      if (formType === 'product') {
        setProductConfig(response.data);
      } else {
        setCoverageConfig(response.data.fields);
      }
    } catch (err) {

      alert(`Error saving configuration: ${err.message}....`);

      
    }
  };

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

  const currentConfig = activeForm === 'product' ? productConfig : coverageConfig;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
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

        {currentConfig && currentConfig.length > 0 ? (
          <DynamicForm 
            config={currentConfig}
            formTitle={activeForm === 'product' ? 'Product Information' : 'Coverage Information'}
            onSubmit={(formData) => handleFormSubmit(formData, activeForm)}
          />
        ) : (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
            <p className="text-yellow-700">No configuration data available</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;