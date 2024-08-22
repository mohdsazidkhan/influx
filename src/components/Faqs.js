import React from 'react'
import Accordion from "./Accordion"
import data from "../accordion.json";

function Faqs() {
  return (
    <section className='faqs'>
    <div className='container'>
    <h4 className='text-white'>Frequently Asked Questions</h4>
    <Accordion items={data.accordionItems} />
    </div>
    </section>
  )
}

export default Faqs
