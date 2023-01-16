import React,{useState} from 'react';
import {Restorent} from './Restorent'
const RestorentList = ({restorents}) => {
  const [allRestorent,setAllRestorent] = useState(restorents);
  return (
    <div className='grid grid-cols-4 gap-1'>
        {allRestorent.map((restorent)=><Restorent key={restorent.data.id} {...restorent.data}/>)}
    </div>
  )
}

export default RestorentList;