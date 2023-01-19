import React from "react";

function CreateTask(props) {

    console.log("Hello from create task");

    let [value, setValue] = React.useState("");

    function handleSubmit(event) {
        event.preventDefault();
        props.addTask({
            title: value,
            completed: false
        })
        setValue("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input className="input" value={value} type="text" placeholder="Add a todo" onChange={(e) => setValue(e.target.value)}/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default React.memo(CreateTask);