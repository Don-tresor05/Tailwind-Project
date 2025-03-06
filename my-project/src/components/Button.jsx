import React from 'react'

export default function Button() {
  return (
    <div>
      <div className='flex space-x-2 bg-gray-900 p-4 rounded-lg shadow-md'>
        <button className="px-6 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700">
            Default
        </button>

        <button className='px-6 py-2 rounded-lg border border-gray-500 text-gray-400 font-medium hover:bg-gray-700'>
            Alternative
        </button>
        <button className='px-6 py-2 rounded-lg bg-gray-800 text-white font-medium hover:bg-gray-700'>
            Dark
        </button>
        <button className='px-6 py-2 rounded-lg border border-gray-500 text-white font-medium hover:bg-gray-700'>
            Light
        </button>
        <button className="px-6 py-2 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700">
            Green
        </button>
        </div>
    </div>
  )
}
