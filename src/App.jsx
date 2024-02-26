import React from 'react'
import ReadMoreLess from './componenets/ReadMoreLess/ReadMoreLess'
import { Accordion } from './componenets/Accordion/Accordion'



const faqList = [
  {
    question: "Collapsible Group Item #1",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eveniet expedita rerum autem, dolore ab?",
  },
  {
    question: "Collapsible Group Item #2",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eveniet expedita rerum autem",
  },
  {
    question: "Collapsible Group Item #3",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eveniet expedita rerum autem, dolore ab? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eveniet expedita rerum autem, dolore ab?",
  }
]



export default function App() {
  return (
    <>
      <Accordion faqList={faqList} />
      
      <ReadMoreLess/> 
    </>
  )
}
