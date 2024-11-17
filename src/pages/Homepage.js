import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../components/Acordion.js';
import { User } from 'lucide-react';
import logo from '../frontier_logo.png';
import { Routes, Route } from 'react-router-dom';
import Shop from './Shop.js'

import Login from  './Login.js'
import profileimg from '../profileimg.svg';
const bg = './bg.jpg'; // Or use an imported image, like `import bg from './path/to/image.jpg';`


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
      <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">
        <Link to="/login" className="text-white">Log In</Link>
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
            <Link to='/'>
            <img src={logo} className="w-16 h-16" alt="logo" />
            </Link>
            <p className="text-2xl font-bold text-white">Frontier Product Services</p>
            
          </div>
          <div className="flex items-center space-x-6">
            <LoginButton />
            <img src={profileimg} className="h-12 w-12 rounded-full" alt="profileimg" />
          </div>
        </nav>
      </header>

      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>

      {/* Hero Section */}
      <div
  className="w-full h-[400px] bg-gray-400"
  aria-label="RGB lighting"
  style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
>
  <Button className="absolute top-40 left-8 bg-[#7FD4D4] hover:bg-[#6BC4C4] text-black font-bold shadow-lg flex items-center gap-2">
    NEED HELP? <User className="h-10 w-8" />
  </Button>
</div>



      {/* Accordion Section */}
      <div className="container mx-auto px-4 py-8 space-y-4 ">
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="shop-1" className="border rounded-lg bg-white hover:bg-gray-100">
            <AccordionTrigger value="shop" 
              className="px-4 py-2 font-semibold text-gray-700 "
              
              aria-expanded={activeAccordion === 'glossary-1'}
            >
                <Link to="/shop" >
              
            
              Product Reccomendations
              </Link>
            </AccordionTrigger>
            <AccordionContent className="px-4 py-2 text-gray-600">
              See what products are right for you!
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="glossary-2" className="border rounded-lg bg-white hover:bg-gray-100">
            <AccordionTrigger
              className="px-4 py-2 font-semibold text-gray-700 hover:bg-gray-100"
              onClick={() => toggleAccordion('glossary-2')}
              aria-expanded={activeAccordion === 'glossary-2'}
            >
              Our Catalogue
            </AccordionTrigger>
            <AccordionContent className="px-4 py-2 text-gray-600">
              Browse through all of our products
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
            <Link to="https://frontier.com/helpcenter" >
              Frequently asked questions and answers.
              </Link>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="glossary-3" className="border rounded-lg bg-white">
            <AccordionTrigger
              className="px-4 py-2 font-semibold text-gray-700 hover:bg-gray-100"
              onClick={() => toggleAccordion('glossary-3')}
              aria-expanded={activeAccordion === 'glossary-3'}
            >
              Index
            </AccordionTrigger>
            <AccordionContent className="px-4 py-2 text-gray-600 hover:bg-gray-100">
              Understand complex terminology
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default Homepage;
