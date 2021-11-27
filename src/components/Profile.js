import React from 'react';
import Header from './Header';

const Profile = (props) => {
    const content = () => {
        if (props.authed) {
            return (<div className="profile">
                <div className="container">
                    <h3>Your username: {props.state.username}</h3>
                    <h3>Your password: {props.state.password}</h3>
                </div>
            </div>);
        }
        else return (
            <h3>Login, first</h3>
        )
    }
    return (
        <>
            <Header />
            {content()}
        </>
    );
    
}

export default Profile;