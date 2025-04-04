// import React from 'react'
// // import Flexbox from './components/Flexbox'
// // import Sample from './components/Sample';
// // import Button from './components/Button';
// // import LoginForm from './components/LoginForm';
// // import Navbar from './components/Navbar';
// // import FormComponent from './components/FormComponent';
// // import Card from './components/Card';
// // import GrowCircle from './components/GrowCircle';

// // // export default function App() {
// // //   return (
// // //     <div className="flex flex-col items-center justify-center min-h-screen">
// // //     <h1 className="text-4xl text-center mt-20">
// // //       Hello, Tailwind CSS!
// // //     </h1>
// // //     <div className="flex justify-between items-center w-full mt-10">
// // //       <div className="p-4 bg-blue-500 text-white">Item 1</div>
// // //       <div className="p-4 bg-green-500 text-white">Item 2</div>
// // //       <div className="p-4 bg-red-500 text-white">Item 3</div>
// // //     </div>
// // //     </div>
// // //   )

// //   export default function App() {
// //     return (
// //       <div className="flex flex-col items-center justify-center min-h-screen">
// //         <h1 className="text-4xl text-center mt-20">
// //           Hello, Tailwind CSS!
// //         </h1>
// //         <div className="flex justify-between items-center w-full mt-10">
// //           <div className="p-4 bg-blue-500 text-white">1st Card</div>
// //           <div className="p-4 bg-green-500 text-white">2nd Card</div>
// //           <div className="p-4 bg-red-500 text-white">3rd Card</div>
// //         </div>

// //         <div>
// //           <Flexbox />
// //         </div>
// //         <div>
// //           <Sample />
// //         </div>
// //         <div>
// //         <Button />
// //         </div>
// //         <div>
// //           <LoginForm />
// //         </div>
// //         <div>
// //           <Navbar />
// //         </div>
// //         <div>
// //           <FormComponent />
// //         </div>
// //         <div>
// //           <Card />
// //         </div>
// //         <div>
// //           <GrowCircle />
// //         </div>
// //       </div>
      
      
// //     );
// //   }



import React, {useState} from 'react';
import './App.css';

import TodoTable from './components/TodoTable';
import NewTodoForm from './components/NewTodoForm';

export default function App() {


  const [todos, setTodos] = useState([
    {rowNumber: 1, rowDescription: 'Feed puppy', rowAssigned: 'User One'},
    {rowNumber: 2, rowDescription: 'Water Plants', rowAssigned: 'User Two'},
    {rowNumber: 3, rowDescription: 'Make Dinner', rowAssigned: 'User Three'},
    {rowNumber: 4, rowDescription: 'Charge phone battery', rowAssigned: 'User Four'}
  ]
)

  const addTodo = () => {
    if (todos.length > 0) {
      const newTodo = {
        rowNumber: todos.length + 1,
        rowDescription: 'New Todo',
        rowAssigned: 'User Four'
      }
      setTodos(todos => [...todos, newTodo]);
    }
  }

  return (
    <div className='mt-5 container'>
      <div className="card">
        <div className="card-header">
          Your Todo's 
        </div>
        <div className="card-body">
          <TodoTable todos={todos}/>
          <button className='btn btn-primary' onClick={addTodo}>
            Add new todo
          </button>
          <NewTodoForm />
        </div>
      </div>
      
    </div>
  )
}
