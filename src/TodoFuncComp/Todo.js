import React from "react";

import CreateTask from "./CreateTask";
import Task from "./Task";

// let value = 0;

export default function Todo() {
    const [tasks, setTasks] = React.useState([]);
    const [count, setCount] = React.useState(0);
    
    // React.useEffect(() => {
    //     value = timeTakingFuntion(count);
    // }, [count]);

    const value = React.useMemo(() => {
        console.log("Running use memo");
        return timeTakingFuntion(count);
    }, [count]);
    
    console.log(value, count);

    function countPendingTodo() {
        let ct = 0;
        tasks.forEach(task => {
            if(!task.completed) {
                ct = ct + 1;
            }
        })
        return ct;
    }

    React.useEffect(() => {
        let t = localStorage.getItem('tasks');
        t = JSON.parse(t);
        setTasks(() => t);
    }, []);

    React.useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    function addTask(task) {
        setTasks(tasks => {
            return [
                ...tasks,
                task
            ]
        })
        setCount((count) => count + 1);
    }

    function removeTask(index) {
        setTasks(tasks => {
            const newTasks = [...tasks];
            newTasks.splice(index, 1);
            return newTasks;
        })
    }

    function updateTask(index) {
        setTasks(tasks => {
            // tasks[index].completed = true;
            // return tasks;
            const newTasks = [...tasks];
            newTasks[index].completed = true;

            return newTasks;
        })
    }

    return (
        <div className="todo-container">
            <div className="create-todo">
                <CreateTask addTask={addTask}/>
            </div>
            <div className="pending-todo">
                <h2>Pending Todos {countPendingTodo()}</h2>
                {tasks.map((task, index) => <Task {...task} key={index} index={index} updateTask={updateTask} removeTask={removeTask}/> )}
            </div>
        </div>
    )
}

function timeTakingFuntion(num) {
    for(let i = 0; i < 1000000000; i = i + 1) {
        num = num + 1;
    }
    return num;
}