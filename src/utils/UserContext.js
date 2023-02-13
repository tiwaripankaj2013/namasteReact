import { createContext } from "react";

const UserContext = createContext({
    user: {
        name: "pankaj",
        email: "pankaj@gmail.com",
    }
})
export { UserContext };