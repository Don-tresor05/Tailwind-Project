import React from "react";

const FlexboxCheatsheet = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-6 flex flex-col items-center">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-6 uppercase">
        🔹 Building Layouts with Taiwind 🏗️ 🔹
      </h1>

      {/* Terminology Section */}
      <div className="bg-gray-800 p-4 rounded-lg shadow-md w-full max-w-3xl mb-6">
        <h2 className="text-xl font-semibold mb-2 text-yellow-400">
          📌 Terminology
        </h2>
        <p className="text-sm text-gray-300">
          **Flex container**: The parent element that holds flex items.  
          **Flex item**: The children elements inside a flex container.  
          **Main axis**: The primary direction (row or column).  
          **Cross axis**: The perpendicular direction to the main axis.
        </p>
      </div>

            {/* Flex Properties Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
              {/* Flex Direction (Horizontal) */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2 text-yellow-400">
            📍 Flex Direction (Horizontal)
          </h2>
          <div className="space-y-2">
            <div className="flex flex-row bg-blue-500 p-4 rounded">Row →</div>
            <div className="flex flex-row-reverse bg-yellow-500 p-4 rounded">
              Row Reverse ←
            </div>
          </div>
        </div>
      
              {/* Flex Direction (Vertical) with Rotated Text */}
      <div className="bg-gray-800 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2 text-yellow-400">
          📍 Flex Direction (Vertical)
        </h2>
        <div className="flex flex-row justify-between items-center space-x-4">
          {/* Left Side Box (Taller) */}
          <div className="bg-green-500 p-4 rounded flex items-center justify-center h-60       w-24">
            <span className="transform rotate-90 text-white font-bold">
              Column ↓
            </span>
          </div>
      
          {/* Right Side Box (Taller) */}
          <div className="bg-red-500 p-4 rounded flex items-center justify-center h-60       w-24">
            <span className="transform -rotate-90 text-white font-bold">
              Column Reverse ↑
            </span>
          </div>
        </div>
      </div>


        {/* Justify Content */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2 text-yellow-400">
            🎯 Justify Content
          </h2>
          <div className="flex justify-between bg-gray-700 p-4 rounded">
            <div className="bg-red-500 p-3">1st Card</div>
            <div className="bg-blue-500 p-3">2nd Card</div>
            <div className="bg-green-500 p-3">3rd Card</div>
          </div>
        </div>

        {/* Align Items */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2 text-yellow-400">
            🏗 Align Items
          </h2>
          <div className="flex items-center bg-gray-700 p-4 h-20 rounded">
            <div className="bg-purple-500 p-3">1st Card</div>
            <div className="bg-pink-500 p-3">2nd Card</div>
            <div className="bg-yellow-500 p-3">3rd Card</div>
          </div>
        </div>

        {/* Flex Wrap */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2 text-yellow-400">
            🔄 Flex Wrap
          </h2>
          <div className="flex flex-wrap gap-2 bg-gray-700 p-4 rounded">
            <div className="bg-indigo-500 p-3">Wrap</div>
            <div className="bg-red-500 p-3">Card</div>
            <div className="bg-blue-500 p-3">Card</div>
            <div className="bg-green-500 p-3">Card</div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default FlexboxCheatsheet;
