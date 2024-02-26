import React, { useState } from 'react'
import "./Accordion.css"
import { AccordionItem } from './AccordionItem';


export const Accordion = ({faqList}) => {
    const [openId, setId] = useState(null);

 
  return (
    <div className="main-accordion flex justify-center">
        <ul className="accordion w-[500px]">
            {faqList.map((faqItem, id) => {
                return (
                    <AccordionItem onClick={() => id===openId? setId(null):setId(id)} 
                    faqItem={faqItem} 
                    isOpen={id === openId} 
                    key={id} />
                )         
            })}
        </ul>

    </div>
  )
}
