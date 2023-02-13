import React from "react";
import { UserContext } from "../utils/UserContext";
class Details extends React.Component {
    render() {
        return (
            <>
                <h1>Details Page</h1>
                <UserContext.Consumer>
                    {
                        ({user})=><h3>{user.name}-- {user.email}</h3>
                    }
                </UserContext.Consumer>
                <div>
                    <h5>{this.props.services.title}</h5>
                    <h5>{this.props.services.services}</h5>
                </div>
            </>
        )
    }
}

export default Details;