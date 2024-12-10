import React, { useState, useEffect } from 'react';

const DynamicForm = ({ config, formTitle, onSubmit }) => {
 const [formData, setFormData] = useState({});
 const [jsonOutput, setJsonOutput] = useState({});

 useEffect(() => {
   const initialData = config.reduce((acc, field) => ({
     ...acc,
     [field.name]: field.value
   }), {});
   setFormData(initialData);
   setJsonOutput(initialData);
 }, [config]);

 const handleChange = (name, value) => {
   const newFormData = {
     ...formData,
     [name]: value
   };
   setFormData(newFormData);
   setJsonOutput(newFormData);
 };

 const handleSubmit = (e) => {
   e.preventDefault();
   
   // Update the config with new values
   const updatedConfig = config.map(field => ({
     ...field,
     value: formData[field.name]
   }));
   
   onSubmit(updatedConfig);
 };

 const renderField = (field) => {
   const { name, label, type, options, value, isReadOnly } = field;

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
             className={`form-input ${isReadOnly ? 'bg-gray-100' : ''}`}
             readOnly={isReadOnly}
             disabled={isReadOnly}
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
             className={`form-select ${isReadOnly ? 'bg-gray-100' : ''}`}
             disabled={isReadOnly}
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

 const midPoint = Math.ceil(config.length / 2);
 const leftColumnFields = config.slice(0, midPoint);
 const rightColumnFields = config.slice(midPoint);

 return (
   <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow">
     <h2 className="text-2xl font-bold mb-6">{formTitle}</h2>
     <div className="grid grid-cols-2 gap-8">
       {/* Form Column */}
       <div>
         <form onSubmit={handleSubmit}>
           <div className="grid grid-cols-2 gap-8">
             <div>
               {leftColumnFields.map((field) => (
                 <div key={field.name}>
                   {renderField(field)}
                 </div>
               ))}
             </div>
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

       {/* JSON Display Column */}
       <div className="bg-gray-50 p-4 rounded-lg">
         <h3 className="text-lg font-semibold mb-2">Current JSON Structure:</h3>
         <pre className="whitespace-pre-wrap text-sm bg-white p-4 rounded border">
           {JSON.stringify(jsonOutput, null, 2)}
         </pre>
       </div>
     </div>
   </div>
 );
};

export default DynamicForm;