import React, { useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import './Accordion.css';
const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onTitleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="customAccordion">
      {items.map((item, index) => {
        const isActive = index === activeIndex;
        return (
          <div
            key={index}
            onClick={() => onTitleClick(index)}
            className={`accordionItem`}
          >
            <div className='d-flex gap-3'>
              <span>${isActive ? <MdKeyboardArrowDown/> : <MdKeyboardArrowRight/> }</span>
              <div
                className={`font-bold ${isActive ? 'text-white' : 'textLight'}`}
              >
                {item.title}
              </div>
            </div>
            {isActive && <div className="textLight contentAccordion">{item.content1}</div>}
            {isActive && <div className="textLight contentAccordion">{item.content2}</div>}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
