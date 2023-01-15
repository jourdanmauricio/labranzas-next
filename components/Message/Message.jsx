import { Icon } from '@iconify/react';

const Message = ({ msg, closeMessage }) => {
  return (
    <>
      <div
        className={`h-6 relative bg-gray-400 text-left border rounded-md transition-opacity duration-1000 ease-out ${
          msg.length > 0 ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <button
          type="button"
          className="absolute top-1 right-1 border-0 bg-none text-gray-50 cursor-pointer transition duration-150 ease-out hover:ease-in"
          onClick={closeMessage}
        >
          <Icon
            className="w-4 h-4 flex justify-center items-center rounded-md hover:bg-gray-700 transition"
            icon="mdi:window-close"
          />
        </button>
        <p className="px-4 text-gray-50">{msg}</p>
      </div>
    </>
  );
};

export default Message;
