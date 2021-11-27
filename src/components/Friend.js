import React from 'react';
import { Link} from "react-router-dom";
import "./Friends.css";

const Friend = (props) => {
    return (
        <Link to={`/friends/${props.friend.id}`} className="friend-wrapper">
            <div>
                <div className="container">
                    <div className="friend-content">
                        <div className="friend-info">
                            <p>Name: {props.friend.name}</p>
                            <p>Age: {props.friend.age}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default Friend;