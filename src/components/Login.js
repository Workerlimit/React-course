import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import "./Login.css";

const Login = (props) => {
    const history = useHistory();
 
    const validation = () => {
        if (nameValidation() && passwordValidation()) return true;
        return false;
    }
    const nameValidation = () => {
        if (props.state.username.trim().length < 2 || props.state.username == null) {
            alert("Invalid username");
            return false;
        }
        return true;
    }
    const passwordValidation = () => {
        if (props.state.password.trim().length < 4 || props.state.password == null) {
            alert("Invalid password. The length should be great than 4");
            return false;
        }
        return true;
    }

    const handleChange = (e) => {
        props.setState({
            ...props.state,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () => {
        if (validation()) {
            props.setAuthed(true);
            history.push("/");
        }
    }
    
    return (
        <div className="login">
            <div className="container">
                <div className="login__wrapper">
                    <div className="login__content">
                        <form className="form login__form"
                            onSubmit={handleSubmit}>
                            <label className="label login__label">Username:</label>
                            <input
                                type="text"
                                className="input"
                                data-type="name"
                                name="username"
                                value={props.state.username}
                                onChange={handleChange}
                                required></input>
                            <label className="label login__label">Password:</label>
                            <input
                                type="password"
                                className="input"
                                data-type="password"
                                name="password"
                                value={props.state.password}
                                onChange={handleChange}
                                required></input>
                            <button className="btn login__btn"
                                type="submit">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;