
Is JSX mandatory for React? 
    No
Is ES6 mandatory for React?
    No
{TitleComponent} vs {<TitleComponent/>;}vs {<TitleComponent></TitleComponent>}in JSX
TitleComponent : it's a react element
<TitleComponent/> :  It's React Component self closing tag
<TitleComponent></TitleComponent> : It's React Component opening and closing tag
How can I write comments in JSX?
// Single line comment
/*
    Multiline comment in jsx
*/
What is <React.Fragment></React.Fragment> and <></> ?
    It's component which exported by Reacct 
What is Virtual DOM?
  virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM.

What is Reconciliation in React?
The algorithm React uses to diff one tree with another to determine which parts need to be changed.
What is React Fiber?
    React Fiber is an ongoing reimplementation of React's core algorithm. It is the culmination of over two years of research by the React team.
The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures. Its headline feature is incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.
Why we need keys in React? When do we need keys in React?
When comparing two React DOM elements of the same type, React looks at the attributes of both, keeps the same underlying DOM node, and only updates the changed attributes.
<ul>
  <li>Duke</li>
  <li>Villanova</li>
</ul>
React will mutate every child instead of realizing it can keep the <li>Duke</li> and <li>Villanova</li> subtrees intact. This inefficiency can be a problem. React required key for identify which elemnt in changes update only particular elements.

Can we use index as keys in React?
No 
What is props in React? Ways to 
Props is a object pass data into componet using 
//props.key or destucring object {...objectName}
What is a Config Driven UI ?
A: Config Driven UI are based on the configurations of the data application receives. It is rather a good practice to use config driven UIs to make application for dynamic. It is a very common & basic approach to interact with the User. It provides a generic interface to develop things which help your project scale well. It saves a lot of development time and effort. A typical login form, common in most of the Apps. Most of these forms also get frequent updates as the requirements increase in terms of Form Validations, dropdown options,.. or design changes.

What is the difference between Named Export, Default export and * as export?
Named exports: Named exports can have multiple exports per file 
Default exports : Default exports a onemodule  export from a file.
The naming of import is completely independent in default export and we can use any name we like.

* as :  Named export multiple component export to one 
*as customname from 'filename'
customname.exportedcomponent name 
// imports
// ex. importing a single named export
import { MyComponent } from "./MyComponent";
// ex. importing multiple named exports
import { MyComponent, MyComponent2 } from "./MyComponent";
// ex. giving a named import a different name by using "as":
import { MyComponent2 as MyNewComponent } from "./MyComponent";
// exports from ./MyComponent.js file
export const MyComponent = () => {}
export const MyComponent2 = () => {}
import * as MainComponents from "./MyComponent";
// use MainComponents.MyComponent and MainComponents.MyComponent2
here

What is the importance of config.js file
config.js we define constant variables and static text which easy to maintain and easy to change text and content  
What are React Hooks?
Hooks simple js function which gives some functionality 
 Hooks allow you to reuse stateful logic without changing your component hierarchy. This makes it easy to share Hooks among many components or with the community.
Why do we need a useState Hook?  
It returns a pair of values: the current state and a function that updates it. This is why we write const [count, setCount] = useState(). useState Is a local representation of variables.
