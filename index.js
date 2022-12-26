const heading = React.createElement('h1',{'className':'test','key':'abc'},'Hellow react program');
console.log(heading);
const root  = ReactDOM.createRoot(document.getElementById('root'));
const heading1 = React.createElement('h1',{className:'text-red',id:'test1'},'Heading1');
const heading2 = React.createElement('h2',{className:'text-green',id:'test2'},'Heading1');
const container = React.createElement('div',{id:'container',},[heading1,heading2]);
root.render(container);
