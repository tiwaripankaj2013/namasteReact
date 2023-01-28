## How do you create Nested Routes react-router-dom cofiguration.
use of outlet Component create nested routing 
'
path: '/',
        element: <App />,
        errorElement: 'Not found',
        children: [
            {
                path: '/',
                element: <Layout />,
            },
            {
                path: "/restaurant/:retaurantId",
                element: <RestaurantMenu />,
            }
            ]
        
'

## Read abt createHashRouter, createMemoryRouter from React Router docs.
A:createHashRouter and createMemoryRouter are both functions from the react-router-dom library, which is used for client-side routing in React applications.

createHashRouter creates a HashRouter component, which uses the URL hash fragment to keep track of the current location. This means that the part of the URL after the "#" symbol is used to determine the current route. This is useful for environments where the server doesn't support client-side routing, or when you want to avoid the page reloading when the route changes.


## What is the order of life cycle method calls in Class Based Components
constructor(): This method is called before the component is mounted. It is used to initialize state and bind methods.

static getDerivedStateFromProps(props, state): This method is called before the component is rendered. It is used to update the component's state based on the props that are passed to it.

render(): This method is called after getDerivedStateFromProps(). It is used to render the component's UI.

componentDidMount(): This method is called after the component has been rendered for the first time. It is used to perform any setup or initialization that requires the component's DOM node.

shouldComponentUpdate(nextProps, nextState): This method is called before the component is updated. It is used to determine whether or not the component should re-render based on the new props and state.

getSnapshotBeforeUpdate(prevProps, prevState): This method is called before the component updates and before the DOM is updated. It's used to capture some information from the DOM before it is potentially changed.

componentDidUpdate(prevProps, prevState, snapshot): This method is called after the component has been updated. It is used to perform any necessary clean up or other actions after the update.

componentWillUnmount(): This method is called before the component is unmounted from the DOM. It is used to perform any necessary cleanup before the component is removed.

It's important to note that not all lifecycle methods are called in every update, getDerivedStateFromProps, shouldComponentUpdate, getSnapshotBeforeUpdate are optional and are called only when it's necessary.

## Why do we use componentDidMount?
It's use for api call after render methods then execute 'componentDidMount'
## Why do we use componentWillUnmount? Show with example
It's call clear event listner clear interval cleanup after call interval
'
    componentDidMount(){
       this.timer =  setInterval(()=>{
            console.log('react app');
        },1000);
    }
    componentWillUnmount(){
        clearInterval(this.timer);
        console.log('ComponentWillUnmount');
    }
'
useEffect(()=>{
    setInterval(()=>{
        console.log('namste react');
    },1000);

    // clear setinterval return blank value
    return()=>{

    }
})
## (Research) Why do we use super(props) in constructor? 
A: super(props) is used in the constructor of a React component when extending a base class (usually React.Component) to call the constructor of the base class and pass along the props that were passed to the component. This allows the base class to set up any necessary state or bindings using the props.

It's important to call super(props) before any other statement inside the constructor, because this keyword is not bound to the object until super() is called.

In short, super(props) is used to call the constructor of the base class, passing along the props to the base class's constructor and setting up the component's state and bindings.

## (Research) Why can't we have the callback function of useEffect async?
A: useEffect is used to synchronize a component with an external system, and React needs to know when the component is done synchronizing so it can re-render the component and update the UI. If the callback function were async, React wouldn't know when the synchronizing was done, so it wouldn't know when to re-render the component.

Instead, you can use async/await inside the callback function, once the function is invoked.
The callback function of useEffect is not allowed to be asynchronous because the behavior of the component would be unpredictable. When the component updates, React needs to know when the effect has finished so that it can update the component's UI. If the effect's callback is asynchronous, React would not know when the effect has completed, so it wouldn't know when to update the component's UI.
useEffect(() => {
  async function fetchData() {
    // your async code here
  }
  fetchData();
}, [dependencies]);
In summary, the callback function of useEffect cannot be async because it would make it impossible for React to know when the effect has finished and when to update the component's UI. The solution is to wrap the async code inside a non-async function and call that function inside the useEffect.
