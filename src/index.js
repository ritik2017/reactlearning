import ReactDOM from 'react-dom/client';
import Todo from './TodoFuncComp/Todo';

// import Head from './Head';
// import Foot from './Foot';
// import Comp1 from './Comp1';
// import Counter, { AutoCounter, AutoCounter2 } from './Counter';
// import Effect from './Effect';
// import Class1 from './Class1';

// function Button(props) {  
//   console.log(props);

//   // function fun() {
//   //   alert(props.data);
//   // }

//   return (
//       <div> 
//           <button onClick={props.handleClick}>{props.text}</button>
//       </div>
//   )
// }

// function button1Click() {
//   console.log("clicked button 1");
// }

// function button2Click() {
//   console.log("clicked button 2");
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Todo></Todo>
);

// {/* <Head></Head>
//     <Button text={'Click from root'} data={"Button from root. Click to go home"} handleClick={button1Click}></Button>
//     <Button text={'Click from root button 2'} data={"Button from root. Click to go products"} handleClick={button2Click}></Button>
//     <Comp1></Comp1>
//     <Foot></Foot>
//     <Counter/>
//     <AutoCounter/>
//     <Effect/>
//     <AutoCounter2/> */}
//     {/* <Class1 text="Hello from class component" s1={100}></Class1>
//     <Class1 text="Hello from class component 2"></Class1> */}
//     {/* <Comp1></Comp1> */}


// import { useState, useCallback, memo } from "react";
// import ReactDOM from "react-dom/client";

// const Todos = memo(({ todos, addTodo }) => {
//   console.log("child render");
//   return (
//     <>
//       <h2>My Todos</h2>
//       {todos.map((todo, index) => {
//         return <p key={index}>{todo}</p>;
//       })}
//       <button onClick={addTodo}>Add Todo</button>
//     </>
//   );
// });

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [todos, setTodos] = useState([]);

//   const increment = () => {
//     setCount((c) => c + 1);
//   };
//   const addTodo = () => {
//     setTodos((t) => [...t, "New Todo"]);
//   }

//   return (
//     <>
//       <Todos todos={todos} addTodo={addTodo} />
//       <hr />
//       <div>
//         Count: {count}
//         <button onClick={increment}>+</button>
//       </div>
//     </>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);