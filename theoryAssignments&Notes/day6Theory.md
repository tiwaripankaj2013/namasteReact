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
A:
## Q: What is Conditional Rendering, explain with a code example
## Q: What is CORS?
A: 'CORS' When we calling any api local system which not https that's required local project run https .
    It's showing error when any secure link call on where port running on not https 
## Q: What is async and await? 
## Q: What is the use of `const json = await data.json();` in  getRestaurants()