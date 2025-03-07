// src/FormComponent.js
import React from 'react';

function FormComponent() {
  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Sign in to our platform</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Your email</label>
          <input
            type="email"
            placeholder="name@flowbite.com"
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Your password</label>
          <input
            type="password"
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Select an option</label>
          <div className="flex items-center">
            <input type="radio" name="option" className="mr-2" />
            <label className="text-gray-700">Option 1</label>
          </div>
          <div className="flex items-center">
            <input type="radio" name="option" className="mr-2" />
            <label className="text-gray-700">Option 2</label>
          </div>
        </div>
        <div className="mb-4">
          <input type="checkbox" id="rememberMe" className="mr-2" />
          <label htmlFor="rememberMe" className="text-gray-700">Remember me</label>
        </div>
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700">Submit</button>
      </form>
    </div>
  );
}

export default FormComponent;
