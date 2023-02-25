export const GridView = (props)=>{
    return(
        <div className='grid grid-cols-4 gap-1' data-testid="res-list">{props.children}</div>
    )
}