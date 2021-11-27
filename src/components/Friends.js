import React from 'react';
import Header from "./Header";
import Friend from './Friend';
import "./Friends.css";

const Friends = () => {
    const friends = [
        {
            id: "1",
            name: "John",
            age: "25"
        },
        {
            id: "2",
            name: "Alice",
            age: "19"
        },
        {
            id: "3",
            name: "Ann",
            age: "22"
        }
    ]
    return (
        <>
            <Header />
            <div className="container">
                <div className="friends">
                    {friends.map((friend) => {
                        return <Friend friend={friend} />
                    })}
                </div>
            </div>
        </>
    );
}

export default Friends;