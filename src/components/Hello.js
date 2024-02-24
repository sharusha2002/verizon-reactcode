import React from "react";
let Hello = (props) => {
    //without using jsx

    // return React.createElement("div", null, "Hello world!");
    // return React.createElement("div", null, React.createElement("h1", "null", "Welcome to React!"));
    // return React.createElement("div", {"id" : "id1"}, "Hello world!", React.createElement("h2",
    //  "null", "This is a h2 tag content"));

    //using jsx element
    return <div>
        <h1>Hello {props.name} and profession is {props.profession}!</h1>
        <p>This is a paragraph </p>
    </div>
}

export default Hello;