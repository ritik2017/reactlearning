// import './Task.css';

import React from "react";

function Task(props) {
    console.log("Hello from task");

    React.useEffect(() => {
        return () => {
            console.log("Task unmounted");
        }
    }, [])

    function handleMarkCompleted() {
        props.updateTask(props.index);
    }

    function handleRemoveTask() {
        props.removeTask(props.index);
    }

    const taskStyle = {
        background: props.completed ? '#F2F2F2' : '#D3D3D3', 
        maxWidth: '400px', 
        display: 'flex', 
        justifyContent: 'space-between', 
        marginBottom: '10px'
    };

    return (
        <div className="task" style={taskStyle}>
            <div style={{height: '30px', fontSize: '22px'}}>{props.title} </div>
            <div style={{display: 'flex', justifyContent: 'end'}}>
                {props.completed && <button style={{border: 'transparent', background: 'green'}}>Completed</button>}
                {!props.completed && <button onClick={handleMarkCompleted}>Mark Completed</button>}
                <button style={{background: 'red'}} onClick={handleRemoveTask}>Remove Task</button>
            </div>
            
        </div>
    )
}

export default React.memo(Task);