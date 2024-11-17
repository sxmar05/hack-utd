// routes/faq.js
const express = require('express');
const router = express.Router();

// Example FAQs data
const faqs = [
  {
    question: 'How does Frontier recommend products to me?',
    answer: 'Frontier uses your browsing and usage patterns to understand your needs and recommend products tailored to you.',
  },
  {
    question: 'What products are included in the recommendations??',
    answer: 'Our recommendations include internet plans, modems, routers, and other accessories that will optimize your internet speed and enhance your overall connectivity experience',
  },
  {
    question: 'Can I trust the product recommendations from Frontier??',
    answer: 'Absolutely! Frontier’s product recommendations are based on advanced algorithms and customer data to ensure that the products we recommend match your specific needs.',
  },
  {
    question: 'Do I need to be a Frontier customer to get product recommendations?',
    answer: 'While product recommendations are mainly designed for Frontier customers, you can still explore our recommendations as a guest.',
  },
];

// FAQ route
router.get('/', (req, res) => {
  res.render('faq', { faqs });
});

module.exports = router;
