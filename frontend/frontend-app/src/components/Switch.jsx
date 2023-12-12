// import { useState } from 'react';

function Switch() {
  // const [isOn, setIsOn] = useState(true);

  // const handleClick = () => {
  //   setIsOn(!isOn);
  // };
   
  return (
    // <div className="relative inline-block w-8 mr-2 align-middle select-none transition duration-200 
    // ease-in transform translate-x">
    //   <input type="checkbox" name="toggle" id="toggle" className="toggle-checkbox absolute block 
    //   w-8 h-8 rounded-full  appearance-none cursor-pointer" 
    //   checked={isOn} onChange={handleClick} />
    //   <label htmlFor="toggle" className="toggle-label block overflow-hidden h-8 rounded-full bg-gray 
    //   cursor-pointer"></label>
    // </div>
    <label className="relative inline-flex items-center cursor-pointer">
  <input type="checkbox" value="" className="sr-only peer"/>
  <div className="bg-light-gray w-20 h-9 peer-focus:outline-none peer-focus:ring-4 
  rounded-full peer peer-checked:after:translate-x-[135%] 
  rtl:peer-checked:after:-translate-x-full peer-checked:after:border-gray after:content-[''] after:absolute 
  after:top-[2px] after:start-[2px] after:bg-gray after:border-gray after:border after:rounded-full 
  after:h-8 after:w-8 after:transition-all dark:border-gray peer-checked:bg-blue"></div>
  {/* <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span> */}
</label>

  );
}

export default Switch;

