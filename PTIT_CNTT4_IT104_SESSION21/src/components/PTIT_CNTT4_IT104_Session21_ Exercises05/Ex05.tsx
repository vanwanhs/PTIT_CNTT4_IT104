import React from 'react';

export default function Ex05() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="relative bg-sky-200 rounded-lg p-6 w-[500px] h-[200px]">
        <p className="text-sky-900 font-semibold">Relative parent</p>

        <div className="absolute bottom-0 left-0 m-4">
          <div className="bg-blue-600 text-white font-bold px-6 py-3 rounded-lg shadow-lg">
            Absolute child
          </div>
        </div>
      </div>
    </div>
  );
}
