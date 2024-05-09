import React, { useState } from 'react';

export default function Slider() {
  const [value, setValue] = useState(50);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <input 
      id="large-range" 
      type="range" 
      value={value} 
      onChange={handleChange}
      className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer range-lg dark:bg-gray-700" 
    />
  );
}
