## What is prop drilling?
A: Pass data grand parent grand child component.
## What is lifting the state up?
A:Child component event execute update parent commponent.
## What is Context Provider and Context Consumer?
A:Context provider component to pass data 
'context consumer' consume data pass by provider.
## If you don’t pass a value to the provider does it take the default value?
A : yes default value assign'import { createContext } from "react";
    const UserContext = createContext({
        user: {
            name: "pankaj",
            email: "pankaj@gmail.com",
        }
    })'
updateing context: 
  const [user,setUser]=useState({
        name:"Rakesh",
        email:"rakesh@gmail.com"
    })
    // RestorentData is static json data 
   'return (
        <UserContext.Provider value={{
            user:user,
            FaqData,
            setUser
        }}>
        )'