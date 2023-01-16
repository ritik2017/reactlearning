import React from "react";

import CreateTask from "./CreateTask";
import Task from "./Task";

export default function Todo() {
    const [tasks, setTasks] = React.useState([
        {
            title: "Go for a walk",
            completed: true
        },
        {
            title: "Read Books",
            completed: false
        }
    ])

    function addTask(task) {
        setTasks(tasks => {
            return [
                ...tasks,
                task
            ]
        })
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
                <h2>Pending Todos</h2>
                {tasks.map((task, index) => <Task {...task} key={index} index={index} updateTask={updateTask} removeTask={removeTask}/> )}
            </div>
        </div>
    )
}