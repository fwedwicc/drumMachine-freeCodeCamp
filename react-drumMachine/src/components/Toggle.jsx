import React, { useState, useEffect } from 'react';

export default function Toggle(props) {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const mediaElements = document.querySelectorAll('audio');
    mediaElements.forEach((element) => {
      element.muted = !isChecked;
    });
  }, [isChecked]);

  return (
    <label className="flex flex-col items-center cursor-pointer gap-2">
      <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} className="sr-only peer" />
      <h1 className='text-slate-200 font-medium text-md'>Power</h1>
      <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-slate-700"></div>
    </label>
  )
}
