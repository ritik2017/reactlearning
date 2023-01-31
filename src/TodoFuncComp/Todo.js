import React from "react";

import CreateTask from "./CreateTask";
import Task from "./Task";

// let value = 0;

const Display = React.memo((props) => {
    console.log("Hello from display");
    return (<p>{props.count}</p>);
});

export default function Todo() {
    const [tasks, setTasks] = React.useState([]);
    const [count, setCount] = React.useState(0);
    // const [filteredTasks, setFilteredTasks] = React.useState([]);
    const [filter, setFilter] = React.useState(null); // true - completed, false - not completed, null - all

    // React.useEffect(() => {
    //     value = timeTakingFuntion(count);
    // }, [count]);

    const value = React.useMemo(() => {
        return timeTakingFuntion(count);
    }, [count]);

    const countPendingTodo = React.useCallback(() => {
        let ct = 0;
        tasks.forEach(task => {
            if(!task.completed) {
                ct = ct + 1;
            }
        })
        return ct;
    }, [tasks]);

    React.useEffect(() => {
        let t = localStorage.getItem('tasks');
        t = JSON.parse(t);
        setTasks(() => t);
    }, []);

    React.useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
        // setFilteredTasks([...tasks]);
    }, [tasks]);

    const addTask = React.useCallback((task) => {
        setTasks(tasks => {
            return [
                ...tasks,
                task
            ]
        })
    }, []);

    const removeTask = React.useCallback((index) => {
        setTasks(tasks => {
            const newTasks = [...tasks];
            newTasks.splice(index, 1);
            return newTasks;
        })
    }, []);

    const updateTask = React.useCallback((index) => {
        setTasks(tasks => {
            // tasks[index].completed = true;
            // return tasks;
            const newTasks = [...tasks];
            newTasks[index].completed = true;

            return newTasks;
        })
    }, []);

    function handleIncreaseCount() {
        console.log(value);
        setCount((count) => count + 1);
    }

    function handleFilterCompleted() {
        // const completedTasks = [];

        // for(let i = 0; i < tasks.length; i = i + 1) {
        //     if(tasks[i].completed) {
        //         completedTasks.push(tasks[i]);
        //     }
        // }
        // setFilteredTasks(completedTasks);
        setFilter(true);
    }

    function handleFilterNotCompleted() {
        // const notCompletedTasks = [];

        // for(let i = 0; i < tasks.length; i = i + 1) {
        //     if(!tasks[i].completed) {
        //         notCompletedTasks.push(tasks[i]);
        //     }
        // }
        // setFilteredTasks(notCompletedTasks);
        setFilter(false);
    }

    function handleFilterReset() {
        // setFilteredTasks([...tasks]);
        setFilter(null);
    }

    return (
        <div className="todo-container">
            <div className="create-todo">
                <CreateTask addTask={addTask}/>
                <button onClick={handleIncreaseCount}>Increase count</button>
            </div>
            <div className="pending-todo">
                <h2>Pending Todos {countPendingTodo()}</h2>
                <span>Filter    </span>
                <button onClick={handleFilterCompleted}>Completed</button>
                <button onClick={handleFilterNotCompleted}>Not Completed</button>
                <button onClick={handleFilterReset}>Reset</button>
                {tasks.map((task, index) => (filter === null || filter === task.completed) ? <Task {...task} key={index} index={index} updateTask={updateTask} removeTask={removeTask}/> : <></> )}
                <CreateTask addTask={addTask}/>
            </div>
            <Display count={count}></Display>
        </div>
    )
}

function timeTakingFuntion(num) {
    for(let i = 0; i < 1000000000; i = i + 1) {
        num = num + 1;
    }
    return num;
}