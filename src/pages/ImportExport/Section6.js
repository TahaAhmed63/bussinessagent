import React, { useState } from "react";
import "./Section6.css";
const Accordion = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  const items = [
    {
      id: "accordion-button-1",
      title: "Why is the moon sometimes out during the day?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.",
    },
    {
      id: "accordion-button-2",
      title: "Why is the sky blue?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.",
    },
    {
      id: "accordion-button-3",
      title: "Will we ever discover aliens?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.",
    },
    {
      id: "accordion-button-4",
      title: "How much does the Earth weigh?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.",
    },
    {
      id: "accordion-button-5",
      title: "How do airplanes stay up?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.",
    },
  ];

  return (
    <div className="container " style={{marginTop:'100px'}}>
        <div className="row">
            <h1 className="text-center" style={{fontSize:'48px',lineHeight:'44px',fontWeight:'700'}}>Good to know.</h1>
            <p className="text-center mt-2 text-muted"  style={{fontSize:'20px',lineHeight:'36px',fontWeight:'400'}} >Everything you need to know about the my services.</p>
        </div>
      <div className="row mt-4">
      <div className="col-md-9 mx-auto">
        <div className="containers">
          <div className="accordions">
            {items.map((item, index) => (
              <div className="accordion-item" key={item.id}>
                <button
                  id={item.id}
                  className="accordion-button"
                  aria-expanded={expandedIndex === index ? "true" : "false"}
                  onClick={() => toggleAccordion(index)}
                >
                  <h5 className="accordion-title">{item.title}</h5>
                  <span className="icon" aria-hidden="true"></span>
                </button>
                <div
                  className={`accordion-content ${
                    expandedIndex === index ? "open" : ""
                  }`}
                >
                  <p>{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Accordion;
