## useContext vs Redux.
A: Small application to manage pass data to Use Context , if psdd data diffrent component required create multiple provider
Redux: Redux is a centralized store that can hold the entire state of an application, and its actions and reducers manage updates to the state. It's useful when you have complex or large state management needs, and you want to maintain a single source of truth for your state.
## Advantage of using Redux Toolkit over Redux.
A: Redux Toolkit is a package that provides a set of opinionated, convenient, and easy-to-use utilities for    working with Redux. It offers several advantages over using raw Redux
Redux Toolkit is built on top of Redux, so it uses the same fundamental concepts and principles as Redux. However, Redux Toolkit offers several advantages over using raw Redux, including:

Simplified code: Redux Toolkit provides a simpler and more intuitive API for working with Redux, which can lead to less boilerplate code and easier-to-understand code overall.

Faster development: By simplifying many common Redux tasks and providing pre-built utilities, Redux Toolkit can help you write code faster and with fewer errors.

Better performance: Redux Toolkit includes the ability to automatically generate "immutable update logic" for your Redux store. This can help improve the performance of your app by avoiding unnecessary re-renders.
## Explain Dispatcher.
A: Dispatcher use for dispatch action to the redux store ,
    function is used to invoke a Redux reducer function with an action object, and then update the state of the store.
## Explain Reducer.
A: Reducer is a function which gets called after dispatching an event
## Explain slice.
A: Slice define particular component or some group action realted to the component 
ex: Cart slice define action: add,update and clear cart item
## Explain selector.
A: useSelectore hooks  subscribe  store data
  In order to subscribe the store data, useSelector hook is used 
## Explain createSlice and the configuration it takes.
A: Create slice define all action particular component 
Ex: cart , there define ,add,remove,update,delete action

createSlice is a function which takes following arguments:
	
		i. name
		ii. initialState,
		iii. reducers:

	- configuration is done with configureStore that takes reducers as argument. Eg:
		
		`
			configureStore({
				reducer: {
					cart:cartReducer
				},
			})
		`
 /*
 ## Redux toolkit working flow define

 - Create Store
    - ConfigureStore() - RTK

- Provide store to app
    - <Provider store={store}> - 'import from react-redux '

- Slice
    -RTK createSlice({
        name:'',
        initialState:
        reducers:{
            addItem:(state,action)=>{state = action.payload}
        }
    }) 
    export const {} = cartSlice.actions;
    export default cartSlice.reducer;
- Put that slice into Store 
    -{
        reducer:{
            cart:cartSlice,
            user:userSlice
        }
    }
 
 
 */