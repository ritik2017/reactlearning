// import './Task.css';

export default function Task(props) {
    return (
        <div className="task" style={{width: '100px', background: 'blue', maxWidth: '200px'}}>
            {props.title}
            {props.completed && <button> Completed</button>}
        </div>
    )
}