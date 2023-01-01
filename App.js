import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement(
    'h1',
    {'className':'test','key':'abc'},
    'Hellow react program'
    );
// console.log(heading);
const heading1 = React.createElement('h1', 
{ className: 'text-red', id: 'test1', key:'h1' }, 
'Heading1');
const heading2 = React.createElement(
    'h2', 
{ className: 'text-green', id: 'test2', key :'h2' }, 
'Heading1');
const container = React.createElement(
    'div', 
{ id: 'container', }, 
[heading1, heading2]
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container);
