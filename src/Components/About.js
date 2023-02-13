import React,{Component} from 'react';
import { Outlet } from 'react-router-dom';
import { UserContext } from '../utils/UserContext';
class About extends Component {
    constructor(props){
        super(props);
        this.state = {
        count:0,
        user:{name:"",email:""},
        };
        
    }
    render(){
        const {count} = this.state;
        return (
            <>
            <div>
                <button className='bg-blue-400 p-1' onClick={()=>{this.setState(prev =>({count: prev.count-1}))}}>-</button>
                <span className='p-2 text-xl text-blue-300'>Count:{count}</span>
                <button className='bg-blue-800 p-1' onClick={()=>{this.setState(prev =>({count:prev.count+1}))}}>+</button>
            </div>
            <p>About Us Page</p>
           
            <UserContext.Consumer>
                {({user})=>(<h4 className='font-bold text-xl'>{user.name}--{user.email}</h4>)}
                {/* <input onChange={() => this.setState(e.target.value)} value={this.state.user.name}/> */}
            </UserContext.Consumer>
            <Outlet/>
            </>
        )
    }
}
export {About};