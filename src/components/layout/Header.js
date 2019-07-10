import React from 'react';
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="header">
            <h1>To-do List</h1>
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/about">About</Link>
        </div>
    )
}