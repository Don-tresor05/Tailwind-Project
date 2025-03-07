import React from 'react'

export default function Button() {
  return (
    <div>
      <div className='flex space-x-2 bg-gray-900 p-4 rounded-lg shadow-md'>
        <button className="px-6 py-2 rounded-lg bg-blue-600 shadow-lg shadow-blue-400/40 text-white font-medium hover:bg-blue-700">
            Default
        </button>

        <button className='px-6 py-2 rounded-lg border border-gray-500 shadow-lg shadow-gray-500/100 text-gray-400 font-medium hover:bg-gray-700'>
            Alternative
        </button>
        <button className='px-6 py-2 rounded-lg bg-gray-800 shadow-lg shadow-gray-400/80 text-white font-medium hover:bg-gray-700'>
            Dark
        </button>
        <button className='px-6 py-2 rounded-lg border border-gray-500 shadow-lg shadow-gray-500 text-white font-medium hover:bg-gray-700'>
            Light
        </button>
        <button className="px-6 py-2 rounded-lg bg-green-600 shadow-lg shadow-green-600/60 text-white font-medium hover:bg-green-700">
            Green
        </button>

        <div className='inset-shadow-sm inset-shadow-indigo-500 ...'></div>
        </div>
    </div>
  )
}
