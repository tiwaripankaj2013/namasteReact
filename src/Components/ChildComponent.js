import React, { Component } from "react";

class ChildComponent extends Component {
    constructor(props){
        super(props);
        console.log('Child constructor'+this.props.name);
    }

    render(){
        console.log("child - component"+this.props.name);
        return(
            <h1>{this.props.name}</h1>
        )
    }
}

export default ChildComponent;