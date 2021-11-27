import React from 'react';
import Header from './Header';
import './Home.css';
const Home = (props) => {
    let statement = "";
    if (props.authed) statement = "Welcome, " + props.state.username;
    else statement = "Please, login!";
    return (
        <div className="home-wrapper">
            <Header />
            <div className="home">
                <h2>{ statement }</h2>
            </div>
        </div>
    );
}

export default Home;