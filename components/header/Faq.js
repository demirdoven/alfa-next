'use client'

import React, { useState } from 'react';
import Accordion from './Accordion';

const FAQ = () => {
  const [expanded, setExpanded] = useState(false);

  const accordionIds = [
   {
      title:"How do I create an Accordion with React and Framer Motion",
      description:"Read Jason's Blog by going to this url"
   }
  ];

  return (
    <div>
      <h2 className="heading">Frequently Asked Questions</h2>
      <div className="faq-items">
        {accordionIds.map((item, i) => (
          <Accordion
            key={i}
            i={i}
            expanded={expanded}
            setExpanded={setExpanded}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;