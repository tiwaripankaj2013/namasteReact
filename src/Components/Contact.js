import { useContext } from "react";
import ClassComponent from "./ClassComponent";
import { UserContext } from "../utils/UserContext";
const Contact = () => {
    const {user,setUser} = useContext(UserContext);
    return(
        <>
        <p>Updating user context value </p>
        <p>{user.name}</p>
        <div className="mb-5">
            <input type="text" value={user.name} onChange={e=>setUser({...user,name:e.target.value})} />
        </div>
        <h1>Contact Us Page.</h1>
        <ClassComponent />
        </>
    )
}
export default Contact;
