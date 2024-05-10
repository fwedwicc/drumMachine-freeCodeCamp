import React, { useState } from 'react';

export default function Slider() {
  const [value, setValue] = useState(0);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <input 
      id="large-range" 
      type="range" 
      value={value} 
      onChange={handleChange}
      className="w-full h-3 bg-slate-700 rounded-lg appearance-none cursor-pointer range-lg accent-slate-200" 
    />
  );
}
