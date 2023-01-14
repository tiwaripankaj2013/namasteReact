import React from 'react';
import {Restorent} from './Restorent'
const RestorentList = ({restorents}) => {
  return (
    <div className='grid grid-cols-4 gap-1'>
        {restorents.map((restorent)=><Restorent key={restorent.data.id} {...restorent.data}/>)}
    </div>
  )
}

export default RestorentList;