import { useState } from 'react';

const SelectYear = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [showOptions, setShowOptions] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowOptions(false);
  };

  const years = [];
  for (let year = 2000; year <= new Date().getFullYear(); year++) {
    years.push(year);
  }

  return (
    <div className="relative inline-block text-left z-10">
      <div>
        <input
          type="text"
          className="border border-gray-300 p-2 rounded-md w-64"
          value={selectedOption}
          readOnly
          onClick={() => setShowOptions(!showOptions)}
        />
        <button
          type="button"
          className="absolute right-0 top-0 h-full w-10 flex items-center justify-center z-10"
          onClick={() => setShowOptions(!showOptions)}
        >
          <svg
            className="w-6 h-6 z-10"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
      {showOptions && (
        <div className="absolute z-10 mt-2 w-64 bg-white border border-gray-300 rounded-md shadow-lg">
          <ul>
            {years.map((year) => (
              <li
                key={year}
                className="cursor-pointer p-2 hover:bg-gray-100 z-10"
                onClick={() => handleOptionSelect(year)}
              >
                {year}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SelectYear;