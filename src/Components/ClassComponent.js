import React from "react";
import ChildComponent from "./ChildComponent";
class ClassComponent extends React.Component{
    constructor(props){
        super(props);
        console.log('Parent Constructor');
        this.state ={ JsonData:[]}
        
    }
    /* 
        constructor 
        render
        componentDidMount

        https://jsonplaceholder.typicode.com/posts
    */
  async componentDidMount(){
    //best place to make an Api call
    console.log('Parent render');
    const data = await fetch('https://jsonplaceholder.typicode.com/posts');
    const json = await data.json();
    this.setState({
        JsonData:json
    })

   }
    render(){
        console.log('Parent render');
        console.log(this.state.JsonData);
        return(
            <>
            <h1>Class component</h1>
            <ChildComponent name="Pankaj" />
            {
              this.state.JsonData.length>0?this.state.JsonData.map((item)=><ChildComponent key={item.id} name={item.title}/>):"Loading..."
            }

            </>
        )
    }
}

export default ClassComponent;