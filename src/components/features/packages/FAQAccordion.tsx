import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface Props {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: Props) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="grid gap-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div className="rounded-[8px] border border-slate-200 bg-white" key={item.question}>
            <button
              type="button"
              className="flex min-h-12 w-full items-center justify-between gap-4 px-4 text-left text-sm font-semibold text-[#111317]"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              aria-expanded={isOpen}
            >
              <span>{item.question}</span>
              <span aria-hidden="true">{isOpen ? "-" : "+"}</span>
            </button>
            {isOpen && <p className="px-4 pb-4 text-sm leading-6 text-slate-600">{item.answer}</p>}
          </div>
        );
      })}
    </div>
  );
}
