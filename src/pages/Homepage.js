import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/Acordion.js';
import { User } from 'lucide-react';
import logo from '../frontier_logo.png';

// Button Component
function Button({ children, className, ...props }) {
  return (
    <button className={`py-2 px-4 rounded-lg ${className}`} {...props}>
      {children}
    </button>
  );
}

// Login Button Component
function LoginButton() {
  return (
    <button className="bg-white/10 text-white py-2 px-4 rounded-full hover:bg-white/20">
      <Link to="/login" className="text-white">
        Log In
      </Link>
    </button>
  );
}

function Homepage() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (value) => {
    setActiveAccordion(activeAccordion === value ? null : value);
  };

  return (
    <div className="min-h-screen bg-[#d9d9d9]">
      {/* Header */}
      <header className="bg-header-blue p-4">
        <nav className="flex items-center justify-between container mx-auto">
          <div className="flex items-center space-x-3">
            <img src={logo} className="w-16 h-16" alt="logo" />
            <p className="text-2xl font-bold text-white">Frontier Product Services</p>
          </div>
          <div className="flex items-center space-x-6">
            <LoginButton />
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="relative">
        <img
          src="/placeholder.svg?height=400&width=1440"
          alt="Gaming setup with RGB lighting"
          className="w-full h-[400px] object-cover"
        />
        <Button
          className="absolute top-4 left-4 bg-[#7FD4D4] hover:bg-[#6BC4C4] text-black font-bold shadow-lg flex items-center gap-2"
        >
          NEED HELP? <User className="h-5 w-5" />
        </Button>
      </div>

      {/* Accordion Section */}
      <div className="container mx-auto px-4 py-8 space-y-4 ">
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="glossary-1" className="border rounded-lg bg-white hover:bg-gray-100">
            <AccordionTrigger
              className="px-4 py-2 font-semibold text-gray-700 "
              onClick={() => toggleAccordion('glossary-1')}
              aria-expanded={activeAccordion === 'glossary-1'}
            >
              Glossary
            </AccordionTrigger>
            <AccordionContent className="px-4 py-2 text-gray-600">
              Glossary content goes here.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="glossary-2" className="border rounded-lg bg-white hover:bg-gray-100">
            <AccordionTrigger
              className="px-4 py-2 font-semibold text-gray-700 hover:bg-gray-100"
              onClick={() => toggleAccordion('glossary-2')}
              aria-expanded={activeAccordion === 'glossary-2'}
            >
              Glossary
            </AccordionTrigger>
            <AccordionContent className="px-4 py-2 text-gray-600">
              Additional glossary content.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq" className="border rounded-lg bg-white hover:bg-gray-100">
            <AccordionTrigger
              className="px-4 py-2 font-semibold text-gray-700 hover:bg-gray-100"
              onClick={() => toggleAccordion('faq')}
              aria-expanded={activeAccordion === 'faq'}
            >
              FAQ
            </AccordionTrigger>
            <AccordionContent className="px-4 py-2 text-gray-600">
              Frequently asked questions and answers.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="glossary-3" className="border rounded-lg bg-white">
            <AccordionTrigger
              className="px-4 py-2 font-semibold text-gray-700 hover:bg-gray-100"
              onClick={() => toggleAccordion('glossary-3')}
              aria-expanded={activeAccordion === 'glossary-3'}
            >
              Glossary
            </AccordionTrigger>
            <AccordionContent className="px-4 py-2 text-gray-600">
              More glossary content.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default Homepage;
