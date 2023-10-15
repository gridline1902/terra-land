import { Container } from './Container';

const faqs = [
  [
    {
      question: 'Is registering land on the Solana blockchain legally recognized?',
      answer:
        'Yes, registering land on the Solana blockchain is gaining legal recognition in many jurisdictions globally.',
    },
    {
      question: 'How secure is the Solana blockchain for storing land records?',
      answer: 'The Solana blockchain ensures highly secure and tamper-proof storage for land records.',
    },
    {
      question: 'What are the advantages of using Solana for land registration?',
      answer:
        'Solana provides a fast, secure, and cost-effective platform for transparent and decentralized land registration.',
    },
  ],
  [
    {
      question: 'How does Solana handle property transfer and ownership verification?',
      answer:
        'Solana facilitates efficient and transparent property transfer processes, ensuring a secure and verifiable history of ownership.',
    },
    {
      question: 'Can Solana help prevent property disputes and fraudulent claims?',
      answer:
        "Yes, Solana's immutable ledger can significantly reduce the risk of property disputes and fraudulent land claims."
    },
    {
      question: 'What kind of authentication and verification processes does Solana use?',
      answer:
        'Solana utilizes robust cryptographic mechanisms and smart contracts to ensure secure and authenticated land records.',
    },
  ],
  [
    {
      question: 'Are land records on the Solana blockchain accessible to the public?',
      answer:
        'Depending on the jurisdiction, land records on the Solana blockchain can be made accessible to the public while ensuring data privacy and security.',
    },
    {
      question: 'How does Solana ensure data privacy for landowners?',
      answer:
        'Solana implements advanced encryption techniques and permissioned access to guarantee data privacy for landowners and stakeholders.',
    },
    {
      question: 'Is it possible to integrate traditional land registration systems with Solana?',
      answer:
        "Yes, it's possible to integrate traditional land registration systems with Solana to leverage the benefits of blockchain technology without disrupting existing processes.",
    },
  ],
];

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-emerald-300  py-20 sm:py-32"
    >
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions about Land Registration on Solana
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email our support team
            and if you’re lucky someone will get back to you.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
