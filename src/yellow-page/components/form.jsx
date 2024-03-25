
'use client';

import { Button, Label, Select } from 'flowbite-react';
import { useState } from 'react';

function FormComponent() {

  const [selectedOptions, setSelectedOptions] = useState({
    skills: '',
    lga: '',
    ward: '',
  });

  // Event handler for the "Search" button
  const handleSearch = () => {
    // Get the selected values from each Select element
    const skills = document.getElementById('skills').value;
    const lga = document.getElementById('lga').value;
    const ward = document.getElementById('ward').value;

    // Update the state with the selected values
    setSelectedOptions({
      skills,
      lga,
      ward,
    });

    // Log the selected options
    console.log(selectedOptions);
  };

  return (
    <form>
    <div className="w-full mb-4 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 lg:mb-8 bg-gray-100 p-10">
  
      <div className="w-full sm:w-1/5 p-4 bg-white">
        <div className="mb-2">
          <Label htmlFor="size" value="Business size" />
        </div>
        <Select id="size" className="w-full" required>
          <option>All</option>
          <option>Nano</option>
          <option>Micro</option>
          <option>Medium</option>
          <option>Small</option>
        </Select>
      </div>
  
      <div className="w-full sm:w-1/5 p-4 bg-white">
        <div className="mb-2">
          <Label htmlFor="category" value="Business category" />
        </div>
        <Select id="category" className="w-full" required>
          <option>All</option>
          <option>Category "A"</option>
          <option>Category "B"</option>
          <option>Category "C"</option>
        </Select>
      </div>
  
      <div className="w-full sm:w-1/5 p-4 bg-white">
        <div className="mb-2">
          <Label htmlFor="lga" value="Local Government" />
        </div>
        <Select id="lga" className="w-full" required>
          <option>All</option>
          <option>lga 1</option>
          <option>lga 2</option>
          <option>lga 3</option>
        </Select>
      </div>
  
      <div className="w-full sm:w-1/5 p-4 bg-white">
        <div className="mb-2">
          <Label htmlFor="ward" value="Wards" />
        </div>
        <Select id="ward" className="w-full" required>
          <option>All</option>
          <option>Ward 1</option>
          <option>Ward 2</option>
          <option>Ward 3</option>
        </Select>
      </div>
  
      <div className="w-full sm:w-1/5 p-4 bg-white">
        <div className="mb-2">
          <Label htmlFor="type" value="Business type" />
        </div>
        <Select id="type" className="w-full" required>
        <option> </option>
          <option>Shoe making</option>
          <option>Food seller</option>
          <option>Fruit seller</option>
          <option>Fashion designer</option>
        </Select>
      </div>
  
      <div className="flex items-center justify-center w-full sm:w-1/5">
        <Button type="submit" className="w-full" onClick={handleSearch}>Search</Button>
      </div>
  
    </div>
  </form>
  
  

  );
}
export default FormComponent;
