import React,{useContext} from 'react';
import { Accordion } from './Accordion';
// import {FaqData} from '../../constant';
import { UserContext } from '../utils/UserContext';
const Faq = () => {
  const {FaqData} = useContext(UserContext);
  return (
    <div>
        <h3>Faq Page</h3>
        <Accordion data={FaqData} />
    </div>
  )
}

export default Faq;