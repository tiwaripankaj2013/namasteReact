export const GridView = (props)=>{
    return(
        <div className='grid grid-cols-4 gap-1'>{props.children}</div>
    )
}