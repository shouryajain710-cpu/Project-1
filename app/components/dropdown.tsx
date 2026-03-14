"use client"
import React, { useState } from 'react';

interface DropdownProps{
    option1 : string;
    option2 : string;
    option3 : string;
}

function Dropdown({option1 , option2 , option3} : DropdownProps) {
  const [selectedValue, setSelectedValue] = useState('option1');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <select id="dropdown" value={selectedValue} onChange={handleChange}>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </div>
  );
}

export default Dropdown;
