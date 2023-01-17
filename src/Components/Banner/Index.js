export const Banner = ({data}) =>{
    
    return(
        <div>
            {data.map((item,index)=><div key={index}>{item}</div>)}
        </div>
    )
}