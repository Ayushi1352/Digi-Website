import { MinusIcon, PlusIcon } from "lucide-react";
import { useState } from "react";

const faqs = [
    {
        question: "How much does a website consultant cost?",
        answer:
            "Website consultant costs vary depending on experience, project scope, and duration. Typically, prices range from $50 to $200 per hour.",
    },
    {
        question: "How much should I pay for website design?",
        answer:
            "Website design pricing depends on complexity and features. A professional website can cost anywhere from $500 to $5000 or more.",
    },
    {
        question: "How much does a small website cost?",
        answer:
            "A small website usually costs between $300 to $1500, depending on design, content, and functionality.",
    },
    {
        question: "How much does a basic 5 page website cost?",
        answer:
            "A basic 5-page website typically costs between $500 and $2500.",
    },
    {
        question: "How long does a website take to build?",
        answer:
            "A standard website usually takes 2 to 6 weeks, depending on requirements and revisions.",
    },
    {
        question: "Is maintaining the website costly?",
        answer:
            "Website maintenance costs are generally low and may range from $20 to $100 per month depending on updates and hosting.",
    },
];

export default function FAQSection() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="bg-gray-50 py-16 px-4">
            <div className="max-w-6xl mx-auto">

                <h2 className="text-center text-5xl font-semibold tracking-wide">
                    FREQUENTLY ASKED <span className="text-blue-500">QUESTION</span>
                </h2>
                <p className="text-center text-gray-500 mt-2">
                    Here are some common queries and question that brands ask.
                </p>


                <div className="grid md:grid-cols-2 gap-6 mt-12">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white  p-5 cursor-pointer"
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className="flex justify-between items-center">
                                <h3 className="font-medium text-gray-800">
                                    {faq.question}
                                </h3>
                                <span className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-500 text-white text-xl">
                                    {activeIndex === index ? <MinusIcon /> : <PlusIcon />}
                                </span>
                            </div>

                            {activeIndex === index && (
                                <p className="text-gray-600 mt-4 text-sm">
                                    {faq.answer}
                                </p>
                            )}
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <h3 className="text-2xl font-medium mb-6">
                        Got More Questions On Your Mind?
                    </h3>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3  font-medium transition">
                        Ask Us a question →
                    </button>
                </div>
            </div>
        </section>
    );
}