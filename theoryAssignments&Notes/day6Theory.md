# Day 6 Theory assignment 
## Q: What is a Microservice?
Ans: Mircoservices is break application run on diffrent-diffrent ports . Segrefation application forntend and backend application also uou break fronted allpication more than 1 ports.
## Q: What is  Monolith architecture?
Ans: Monolith architecture is frontend and backend appliaction develop on same language and running on same port.
it's dificult to manage .
## Q: What is the difference between Monolith and Microservice?
Ans: 'Moonolith' It's one build you deploy frontend and backend application .    
    'Microservices' It's running on diffrent ports on frontend diffrent on backend as it's subparts on diffrent parts on running.
    'Moonolith' : Difficult to mangae multiple develop if working on things break entire application break
    'Microservices':Easy to manage if frontend appliaction break no any dependencies on backend application. 
## Q: Why do we need a useEffect Hook?
A: 'useEffect' it's function calling after render , API call take argument in callback function and dependencies array.
## Q: What is Optional Chaining?
A: The optional chaining (?.) operator accesses an object's property or calls a function. If the object accessed or  function called is undefined or null, it returns undefined instead of throwing an error.
example: 'function printMagicIndex(arr) {
      console.log(arr?.[42]);
    }
    printMagicIndex([0, 1, 2, 3, 4, 5]); // undefined'
## Q: What is Shimmer UI?
A: Shimmer UI placeholder card or placeholder of UI structure . When we calling Api thaere not show loader on application there we can show similar ui structure real informatin/layout. If not pass depencies array in 'useEffect' it's call ones . 
example : useEffect(()=>{
    console.log('find some word')
},[])
console.log('welcome');
output: Welcome  //render first
        find some word // after render call useEffect

## Q: What is the difference between JS expression and JS statement.
A: In JavaScript, an expression is any valid unit of code that can be evaluated to a value, while a statement is a unit of code that performs some action, but does not return a value.
'JS expression' : ```let x = 2 + 2;``` (This is a valid expression, that return 4 and assigns it to x.)
```2 + 2;``` (This is also a valid expression, that return 4)


## Q: What is Conditional Rendering, explain with a code example?
A: In JavaScript, conditional rendering is a technique that allows you to conditionally render elements or components based on certain conditions. This can be done using control flow statements such as 'if', 'else', and 'switch'.
'let isLoggedIn = true;
if (isLoggedIn) {
  console.log("Welcome back!");
} else {
  console.log("Please log in.");
}'
Another way to achieve conditional rendering is by using ternary operator, it's a shorthand for an if...else statement, in the following way: 
'let isLoggedIn = true;
console.log(isLoggedIn ? "Welcome back!" : "Please log in.");'
## Q: What is CORS?
A: 'CORS' When we calling any api local system which not https that's required local project run https .
    It's showing error when any secure link call on where port running on not https 
## Q: What is async and await? 
A: 'async' is a keyword that is used to define an asynchronous function. An asynchronous function is a function that returns a promise and can be used with the await keyword.
'await' is a keyword that is used inside an asynchronous function to pause execution of the function until a promise is settled (i.e. resolved or rejected).
## Q: What is the use of `const json = await data.json();` in  getRestaurants()?
A:The 'json()' method is used to parse the body of the response as JSON. This is useful because it allows easy access to the data in a format that is commonly used for APIs.

When the 'fetch()' function is used to make a request, it returns a response object that contains the data from the server. The data is often in the form of a string, which needs to be parsed before it can be used. By calling the 'json()' method on the response object, the data is automatically parsed and returned as a JavaScript object. This makes it much easier to work with and access the data in your code.