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

    return (
        <div className="todo-container">
            <div className="pending-todo">
                <h2>Pending Todos</h2>
                {tasks.map((task, index) => <Task {...task} key={index}/> )}
            </div>
            <div className="create-todo">
                <CreateTask addTask={addTask}/>
            </div>
        </div>
    )
}