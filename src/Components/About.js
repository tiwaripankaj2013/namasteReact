import React,{Component} from 'react';
import { Outlet } from 'react-router-dom';
class About extends Component {
    constructor(){
        super();
        this.state = {
        count:0,
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
            <Outlet/>
            </>
        )
    }
}
export {About};