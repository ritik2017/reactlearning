// import './Task.css';

export default function Task(props) {

    function handleMarkCompleted() {
        props.updateTask(props.index);
    }

    function handleRemoveTask() {
        props.removeTask(props.index);
    }

    return (
        <div className="task" style={{background: '#D3D3D3', maxWidth: '400px', display: 'flex', justifyContent: 'space-between'}}>
            <div style={{height: '30px', fontSize: '22px'}}>{props.title} </div>
            <div style={{display: 'flex', justifyContent: 'end'}}>
                {props.completed && <button style={{border: 'transparent', background: 'green'}}>Completed</button>}
                {!props.completed && <button onClick={handleMarkCompleted}>Mark Completed</button>}
                <button style={{background: 'red'}} onClick={handleRemoveTask}>Remove Task</button>
            </div>
            
        </div>
    )
}