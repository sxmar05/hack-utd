import React, { createContext, useState, useContext } from 'react';

// Context to manage the accordion state
const AccordionContext = createContext();

export const Accordion = ({ children, type = 'single', collapsible = false, className }) => {
  const [activeItem, setActiveItem] = useState(null);

  const toggleItem = (value) => {
    setActiveItem((prev) => (prev === value ? (collapsible ? null : prev) : value));
  };

  return (
    <AccordionContext.Provider value={{ activeItem, toggleItem, type }}>
      <div className={className}>{children}</div>
    </AccordionContext.Provider>
  );
};

export const AccordionItem = ({ children, value, className }) => {
  const { activeItem } = useContext(AccordionContext);

  return (
    <div className={`${className} ${activeItem === value ? 'active' : ''}`} data-value={value}>
      {children}
    </div>
  );
};

export const AccordionTrigger = ({ children, onClick, value, ...props }) => {
  const { activeItem, toggleItem } = useContext(AccordionContext);

  const handleClick = () => {
    toggleItem(value);
    if (onClick) onClick();
  };

  return (
    <button
      onClick={handleClick}
      aria-expanded={activeItem === value}
      {...props}
    >
      {children}
    </button>
  );
};

export const AccordionContent = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};
