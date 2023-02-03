import React from 'react';

const reducer = (todos, action) => {
    if(action.type === 'COMPLETED') {
        const t = [...todos];

        for(let i = 0; i < t.length; i = i + 1) {
            if(t[i].id === action.id) {
                t[i].completed = !t[i].completed;
                break;
            }    
        }
        return t;
    }
    else if(action.type === 'DELETED') {
        const t = [];

        for(let i = 0; i < todos.length; i = i + 1) {
            if(todos[i].id !== action.id) {
                t.push(todos[i]);
            }    
        }
        return t;
    } else {
        return todos;
    }
}

const initialTodos = [
    {
        id: 1,
        title: "Todo 1",
        completed: false
    },
    {
        id: 2,
        title: "Todo 2",
        completed: false
    }
]

function ReducerComp() {
    // State, Actions -> Complete, Delete, Edit
    // Dispatch -> Function which will call action to happen 
    // Reducer -> Function actually updating the state
    // const [todos, setTodos] = React.useState([]);
    
    // React.useEffect(() => {
        //     setTodos([
            //         {
                //             id: 1,
                //             title: "Todo 1",
                //             completed: false
                //         },
                //         {
                    //             id: 2,
                    //             title: "Todo 2",
                    //             completed: false
                    //         }
                    //     ])
                    // }, []);
                    
    // function handleComplete(id) {
        //     const t = [...todos];
        
    //     for(let i = 0; i < t.length; i = i + 1) {
        //         if(t[i].id === id) {
            //             t[i].completed = !t[i].completed;
            //             break;
            //         }    
            //     }
            //     setTodos(t);
            // }   
    // } 
    const [todos, dispatchTodos] = React.useReducer(reducer, initialTodos);
    
    function handleComplete(id) {
        dispatchTodos({type: 'COMPLETED', id: id})
    }

    return (
        <>
            <div>
                {todos.map((todo, key) => {
                    return (
                        <label key={key}>
                            <input type="checkbox" checked={todo.completed} onChange={() => handleComplete(todo.id)}/>{todo.title}
                        </label>
                    )
                })}
            </div>
        </>
    )
}

export default ReducerComp;