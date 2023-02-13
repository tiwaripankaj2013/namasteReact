import React, { useState } from 'react';

const Accordion = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState("q1");
  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index)
  }
  const AccordionList = data.map((panel) => {
    return (
      <div className='border border-gray-500 p-1' key={panel.id}>
        <h5 className='font-bold text-2xl text-gray-300' onClick={() => handleClick(panel.id)}>{panel.q}</h5>
        {activeIndex === panel.id && <p className=' text-gray-400'>{panel.a}</p>}
      </div>
    )
  })
  return (AccordionList)
};

export { Accordion };