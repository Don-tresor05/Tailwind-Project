import React from 'react';

function LoginForm() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Sign in to our platform</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-400 font-medium mb-2">Your email</label>
            <input
              type="email"
              placeholder="name@company.com"
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200 bg-gray-700 text-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400 font-medium mb-2">Your password</label>
            <input
              type="password"
              placeholder='Your password'
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200 bg-gray-700 text-white"
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <div>
              <input type="checkbox" id="rememberMe" className="mr-2" />
              <label htmlFor="rememberMe" className="text-sm text-gray-400">Remember me</label>
            </div>
            <a href="#" className="text-sm text-blue-400">Lost Password?</a>
          </div>
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700">Login to your account</button>
          <div className="text-center mt-4">
            <a href="#" className="text-sm text-blue-400">Not registered? Create account</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
