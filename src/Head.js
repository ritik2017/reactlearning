// Props -> Values that we pass to the components

export function Button(props) { 
    console.log(props);
    return (
        <div> 
            <button>{props.text}</button>
            {/* { props.value ? <p>{props.value}</p> : " " }  */}
        </div>
    )
}

export default function Head() { // Functional Component 
    return (
      <div id="head">
        <h1>Hello from Head</h1>
        <Button text={"Home"} value={100}/>
        <Button text={"Product"}/>
      </div>
    )
}