import React from 'react';

// prop drilling 

export const UserContext = React.createContext();
export const ThemeContext = React.createContext();

function ContextComp() {
    const [user, setUser] = React.useState("Rahul");
    const [darkTheme, setDarkTheme] = React.useState(false);
    return (
        <ThemeContext.Provider value={darkTheme}>
            <UserContext.Provider value={user}>
                <h1>Hello {user}!</h1>
                <Comp1></Comp1>
            </UserContext.Provider>
        </ThemeContext.Provider>
    )
}

function Comp1() {

    const user = React.useContext(UserContext);

    return (
        <>
            <h1>Hello {user}</h1>
            <Comp2></Comp2>
        </>
    )
}

function Comp2() {
    return (
        <>
            <Comp3></Comp3>
        </>
    )
}

function Comp3() {

    const user = React.useContext(UserContext);

    return (
        <>
            <h1>Hello {user}!!</h1>
        </>
    )
}

// Foreign component cannot access state using useContext if not wrapped inside Provider
export function Comp5() {
    const user = React.useContext(UserContext);

    return (
        <>
            <h1>Hello {user}</h1>
        </>
    )
}

export default ContextComp;