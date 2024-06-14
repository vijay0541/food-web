/*
<div id="parent">
    <div id="child">
        <h1>I'm h1 tag </h1>
    </div>
</div>
*/

const parent = React.createElement("div",{id: "parent"},
    React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"I'm h1 tag"),React.createElement("h2",{},"I'm h2 tag")]
    )
);

//create heading element -> core of react
const heading = React.createElement("h1",{},"Hellow World!");

//create root -> ReactDOM
const root = ReactDOM.createRoot(document.getElementById("root"));

//render the heading inside the root
root.render(parent);