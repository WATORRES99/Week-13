import React from "react";
import LogIn from "./like-button";
import UsernameI from "./Username";
import PasswordI from "./password";


let e = React.createElement;

export default class Comment extends React.Component {
    render() {
        return(
            <div class nameName = "card w-75">
                <div className = "card-header  text-white">
                    <UsernameI/>
                    <PasswordI/>
                </div>
                <dive className = "card-footer">
                </dive>
            </div>
        );

    }

}