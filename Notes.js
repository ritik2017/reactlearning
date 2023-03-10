// npm init -y -> Initialised a repo to a node repo. So we can run js code.
// node file_name -> Runs a js file
// npm install package_name -> Installs a npm package inside node_modules folder
// npx create-react-app app_name -> Creates a react app


// React - 
// 1. Single page application
// 2. Easy to manage 
// 3. Reusability

// Props -> Values that we pass to the components
// State -> Values we create inside components. Whenever these values change the components using them rerender

// Components -> Small peices of DOM
// 1. Class Components
// 2. Functional Components

// React Hook -> Functions that react provide us to make our functional component more powerful
// Examples - useState, useEffect, useReducer, useMemo, useCallback, useContext, useRef

// useState -> Gives us a variable and a function. Any component using this variable will re-render on its change by the function.
// useEffect -> This is a function. This runs on three occasions:
            // a. Mounting - Component is created in DOM for the first time -> Pass an empty dependency array
            // b. Updation - Either when we update the state or the props -> Pass the state in dependency array
            // c. Unmounting - Removing the component from the DOM
            // d. Any re-render of component -> Do not need to pass any dependency array
// useMemo -> Returns a value after calculation. This runs before render. Can be used to do calculation 
// and store the returned value.
// a. Mounting - Component is created in DOM for the first time -> Pass an empty dependency array
// b. Updation - Either when we update the state or the props -> Pass the state in dependency array
// memo -> Memoises a component. It will only re run the component function when the props of component change.
// useCallback -> Returns a function after calculation. This runs before render. Can be used to do calculation 
// and store the returned value.
// a. Mounting - Component is created in DOM for the first time -> Pass an empty dependency array
// b. Updation - Either when we update the state or the props -> Pass the state in dependency array

//useRef -> 1. Can have an initial value initialized during mounting of component. Does not trigger re-render of component on updation
            // updates itself in UI.

// 1. Always create file with component name 
// 2. Export component as default export 

// Default export needs no {} while import and can be imported with a different name
// export needs {} while import and cannot be imported with a different name

// Props are immutable - Do not update props inside component 
// States are mutable - We should always change state using setter methods

// Static methods
// 1. No copy of them is created in memory 
// 2. We do not need objects to call this class function

// Conditional Render - Redering a react component or html element based on a value
// 1. {props.completed ? <span>completed</span> : <></>}
// 2. {props.completed && <span>completed</span>}

// Referential Equality - Reference types such as functions, objects, arrays are different if the reference is different

// useMemo - value
// useCallback - function
// memo - component