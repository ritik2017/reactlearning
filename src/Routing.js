import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home() {
    return <>
        <p>Home</p>
        <Link to='/home/user'>User</Link>
    </>
}

function Blogs() {
    return <>
        <p>Blogs</p>
    </>
}

function Contact() {
    return <>
        <p>Contact</p>
    </>
}

function User() {
    return <>
        <p>Home User</p>
    </>
}

function NotFound() {
    return <>
        <p>Not Found</p>
    </>
}

function NavBar() {
    return (
        <>
            <nav>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to="/blogs">Blogs</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </nav>
        </>
    )
}

function RouteApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<NavBar/>}></Route>
                <Route path='/home'>
                    <Route index element={<Home/>}></Route>
                    <Route path='user' element={<User/>}></Route>
                    <Route path='*' element={<NotFound/>}></Route>
                </Route>
                <Route path='blogs' element={<Blogs/>}></Route>
                <Route path='contact' element={<Contact/>}></Route>
                <Route path='*' element={<NotFound/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteApp;