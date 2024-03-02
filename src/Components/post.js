import React from "react";
import LogIn from "./like-button";
import Comment from "./comment";



let e = React.createElement;

export default class Post extends React.Component {
    render() {
        return(
            <div className = "card w-75">
                <div className= "card-header bg-danger text-white">
                <div class="topnav" justify-content="space-around">
                    <a class="active" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Home</a>
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">News</a>
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Contact</a>
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">About</a>
                    </div>
                </div>
                <div className = "card-body">
                    Please Log In
                </div>
                <div className = "card-footer">
                    <Comment/>
                    <LogIn/>
                </div>

            </div>
        );
       
    }
}

