import React from "react";

class Details extends React.Component {
    render() {
        return (
            <>
                <h1>Details Page</h1>
                <div>
                    <h5>{this.props.services.title}</h5>
                    <h5>{this.props.services.services}</h5>
                </div>
            </>
        )
    }
}

export default Details;