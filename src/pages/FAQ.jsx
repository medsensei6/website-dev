// src/pages/FAQ.jsx
export default function FAQ() {
  const faqs = [
    {
      question: "What makes MedSensei different from other medical school consulting services?",
      answer:
        "We offer consistent, personalized support with weekly 1:1 check-ins, rapid responses, and more. Additionally, all services are completely free."
    },
    {
      question: "Can I customize a package to fit my unique needs?",
      answer: "Absolutely, we can customize packages on a case-by-case basis."
    },
    {
      question: "Who will I be working with during the process?",
      answer: "You’ll be working mostly with a Sensei who specifically fits your needs. Each Sensei is a successful medical school applicant qualified to help others with their applications."
    },
    {
      question: "What kind of support do you offer for DO applications?",
      answer: "We treat DO applications like MD applications, with certain aspects tailored specifically for AACOMAS (e.g., more emphasis on holistic care in the personal statement)."
    },
    {
      question: "What’s the turnaround time for email responses and edits?",
      answer: "Within 1–3 business days to get you back to work as soon as possible!"
    },
    {
      question: "Do you help with Canadian medical school applications?",
      answer: "At this time, we do not offer help with Canadian medical school applications."
    }
  ];

  return (
    <section className="faq-container p-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map(({ question, answer }, index) => (
          <details key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
            <summary className="cursor-pointer font-semibold text-lg">{question}</summary>
            <p className="mt-2 text-gray-700">{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
