import { useState } from 'react';

const SelectAño = () => {
  const [selectedYear, setSelectedYear] = useState('');
  const [showOptions, setShowOptions] = useState(false);

  const handleSelect = (e) => {
    setSelectedYear(e.target.value);
    setShowOptions(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowOptions(!showOptions)}
        className="absolute right-0 top-0 h-full w-10 flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 14a1 1 0 01-.707-.293l-6-6a1 1 0 111.414-1.414L10 12.586l5.293-5.293a1 1 0 111.414 1.414l-6 6A1 1 0 0110 14z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <select
        id="yearSelect"
        name="yearSelect"
        className="bg-blue w-1/2 h-10 appearance-none"
        value={selectedYear}
        onChange={handleSelect}
        style={{ display: showOptions ? 'block' : 'none' }}
      >
        <option value="" disabled selected hidden>Seleccione el año</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
            <option value="2014">2014</option>
            <option value="2013">2013</option>
            <option value="2012">2012</option>
            <option value="2011">2011</option>
            <option value="2010">2010</option>
            <option value="2009">2009</option>
            <option value="2008">2008</option>
            <option value="2007">2007</option>
            <option value="2006">2006</option>
            <option value="2005">2005</option>
            <option value="2004">2004</option>
            <option value="2003">2003</option>
            <option value="2002">2002</option>
            <option value="2001">2001</option>
            <option value="2000">2000</option>
      </select>
      <input
        type="text"
        value={selectedYear}
        readOnly
        className="border-2 border-gray-300 p-2"
      />
    </div>
  );
};

export default SelectAño;