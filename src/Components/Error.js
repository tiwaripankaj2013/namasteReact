import { Component } from "react";
import { useRouteError } from "react-router-dom";

class Error extends Component {
    
    render (){
        return(
            <div>
            <h1>OOpS!!</h1>
            <h2>Something went wrong!!</h2>
            </div>
        )
    }
}