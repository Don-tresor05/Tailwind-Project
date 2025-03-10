import React from 'react'
import Flexbox from './components/Flexbox'
import Sample from './components/Sample';
import Button from './components/Button';
import LoginForm from './components/LoginForm';
import Navbar from './components/Navbar';
import FormComponent from './components/FormComponent';
import Card from './components/Card';
import GrowCircle from './components/GrowCircle';

// export default function App() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen">
//     <h1 className="text-4xl text-center mt-20">
//       Hello, Tailwind CSS!
//     </h1>
//     <div className="flex justify-between items-center w-full mt-10">
//       <div className="p-4 bg-blue-500 text-white">Item 1</div>
//       <div className="p-4 bg-green-500 text-white">Item 2</div>
//       <div className="p-4 bg-red-500 text-white">Item 3</div>
//     </div>
//     </div>
//   )

  export default function App() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl text-center mt-20">
          Hello, Tailwind CSS!
        </h1>
        <div className="flex justify-between items-center w-full mt-10">
          <div className="p-4 bg-blue-500 text-white">1st Card</div>
          <div className="p-4 bg-green-500 text-white">2nd Card</div>
          <div className="p-4 bg-red-500 text-white">3rd Card</div>
        </div>

        <div>
          <Flexbox />
        </div>
        <div>
          <Sample />
        </div>
        <div>
        <Button />
        </div>
        <div>
          <LoginForm />
        </div>
        <div>
          <Navbar />
        </div>
        <div>
          <FormComponent />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <GrowCircle />
        </div>
      </div>
      
      
    );
  }

