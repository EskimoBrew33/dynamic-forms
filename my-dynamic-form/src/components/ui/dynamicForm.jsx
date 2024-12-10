import React, { useState } from 'react';

const DynamicForm = ({ config }) => {
  const [formData, setFormData] = useState(
    config.reduce((acc, field) => ({
      ...acc,
      [field.name]: field.value
    }), {})
  );

  const handleChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const renderField = (field) => {
    const { name, label, type, options, value } = field;

    switch (type) {
      case 'text':
        return (
          <div className="mb-4">
            <label className="form-label" htmlFor={name}>
              {label}
            </label>
            <input
              type="text"
              id={name}
              name={name}
              value={formData[name] || ''}
              onChange={(e) => handleChange(name, e.target.value)}
              className="form-input"
            />
          </div>
        );

      case 'options':
        return (
          <div className="mb-4">
            <label className="form-label" htmlFor={name}>
              {label}
            </label>
            <select
              id={name}
              name={name}
              value={formData[name]}
              onChange={(e) => handleChange(name, e.target.value)}
              className="form-select"
            >
              {options?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        );

      default:
        return null;
    }
  };

  // Split the config into two arrays for two columns
  const midPoint = Math.ceil(config.length / 2);
  const leftColumnFields = config.slice(0, midPoint);
  const rightColumnFields = config.slice(midPoint);

  return (
    <div className="max-w-6xl mx-auto mt-8 p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">Policy Product Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-8">
          {/* Left Column */}
          <div>
            {leftColumnFields.map((field) => (
              <div key={field.name}>
                {renderField(field)}
              </div>
            ))}
          </div>
          {/* Right Column */}
          <div>
            {rightColumnFields.map((field) => (
              <div key={field.name}>
                {renderField(field)}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="form-button"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default DynamicForm;