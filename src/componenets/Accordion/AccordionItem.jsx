import React, {useRef} from 'react'


export const AccordionItem = ({faqItem, onClick, isOpen}) => {
    const itemRef = useRef(null);
    const arrowIcon = "/src/right_arrow.png";

    return (
        <li className="accordion-item">
            <button className="accordion-header flex items-center gap-2 text-[black]" 
            onClick={() => onClick()}
            >
                <img src={arrowIcon} className=" h-[15px] w-[15px]" alt="" />
                {faqItem.question}
            </button>
            <div 
                className="accordion-collapse"
                style={
                    isOpen ? {height: itemRef.current.scrollHeight} : {height: "0px"}
                }
            >
                <div className="accordion-body" ref={itemRef}>
                    {faqItem.answer}
                </div>
            </div>
           
        </li>
    )  
}
