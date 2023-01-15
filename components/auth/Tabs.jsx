import { useState } from 'react';
import Login from './Login';
import Register from './Register';

const Tabs = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="flex flex-col relative w-full bg-gray-50 mt-5 break-all border border-black border-opacity-25">
      <div className="flex">
        <div
          onClick={() => toggleTab(1)}
          className={`p-[15px] text-center w-1/2 cursor-pointer border-b  relative outline-none	flex items-center justify-center gap-4 text-gray-800 border-r border-r-black border-opacity-25 ${
            toggleState === 1
              ? 'bg-white before:content-[""] before:block before:absolute before:-top-0 before:left-1/2 before:-translate-x-1/2	before:w-[calc(100%_+_2px)] before:h-1 before:bg-blue-400 border-b-transparent'
              : 'bg-gray-100'
          }`}
        >
          <span>Inicio de sesión</span>
        </div>
        <div
          onClick={() => toggleTab(2)}
          className={`p-[15px] text-center w-1/2 cursor-pointer border-l-0 border-b relative outline-none flex items-center justify-center gap-4 text-gray-800 border-r border-r-black border-opacity-25 last:border-r-transparent ${
            toggleState === 2
              ? 'bg-white before:content-[""] before:block before:absolute before:-top-0 before:left-1/2 before:-translate-x-1/2 before:w-[calc(100%_+_2px)] before:h-1 before:bg-blue-400 border-b-transparent'
              : 'bg-gray-100'
          }`}
        >
          <span>Crear cuenta</span>
        </div>
      </div>
      <div className="grow bg-white">
        <div
          className={`bg-white px-0 w-full h-full ${
            toggleState === 1 ? 'block' : 'hidden'
          }`}
        >
          <Login toggleTab={toggleTab} />
        </div>
        <div
          className={`bg-white px-0 w-full h-full ${
            toggleState === 2 ? 'block' : 'hidden'
          }`}
        >
          <Register toggleTab={toggleTab} />
        </div>
      </div>
    </div>
  );
};

export default Tabs;
