'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export default function FAQPage() {
  const faqs = [
    {
      id: 'q1',
      question: 'How long can I keep the dumpster?',
      answer: 'We offer flexible rental periods from as short as 3 days to as long as you need. Most of our customers rent for 1-2 weeks for residential projects and longer for commercial projects. Contact us for custom rental periods.',
    },
    {
      id: 'q2',
      question: 'What items are prohibited in the dumpster?',
      answer: 'We cannot accept hazardous materials including batteries, paint, chemicals, asbestos, refrigerants, and electronic waste. Tires and major appliances may have restrictions. Please contact us for a complete list of prohibited items.',
    },
    {
      id: 'q3',
      question: 'Do I need a permit to place a dumpster on my property?',
      answer: 'Permit requirements depend on your location. Some areas require permits for dumpsters placed on public property or roads. We can help you navigate permit requirements and can often assist with the application process.',
    },
    {
      id: 'q4',
      question: 'What is the cost of renting a dumpster?',
      answer: 'Pricing depends on dumpster size, rental period, and your location. We offer competitive rates with no hidden fees. Contact us for a free quote tailored to your project needs.',
    },
    {
      id: 'q5',
      question: 'Can you deliver the dumpster on weekends?',
      answer: 'Yes! We offer flexible delivery schedules including weekends. Our team will work with you to find a delivery time that suits your project timeline.',
    },
    {
      id: 'q6',
      question: 'What happens to the waste after pickup?',
      answer: 'We sort and process all waste responsibly. Recyclable materials are separated and sent to appropriate recycling facilities. Remaining waste is disposed of in compliance with all environmental regulations.',
    },
    {
      id: 'q7',
      question: 'Can I add more waste if I exceed capacity?',
      answer: 'Yes, you have several options. We can pick up your full dumpster and deliver an empty one, or you can request an additional dumpster. We work with you to find the most cost-effective solution.',
    },
    {
      id: 'q8',
      question: 'Do you service my area?',
      answer: 'We service over 50 cities in Michigan and surrounding areas. Use our service availability checker on our website to see if we deliver to your location, or contact us directly.',
    },
  ]

  return (
    <main>
      <Header />

      {/* Page Header */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600">
            Have questions? We've got answers. Find the information you need below.
          </p>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="bg-white border border-gray-200 rounded-lg px-6 data-[state=open]:bg-blue-50"
              >
                <AccordionTrigger className="py-4 font-semibold text-lg text-gray-900 hover:text-blue-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-4 text-gray-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <Footer />
    </main>
  )
}
