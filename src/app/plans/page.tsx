"use client";

import Pricing from "@/components/sections/Pricing";
import Faq from "@/components/sections/Faq";

export default function PlansSection() {
  const faqs = [
    {
      question: "What is Laburen.com?",
      answer:
        "Laburen.com creates AI Employees — intelligent assistants that automate sales, customer support, logistics, and business operations. Unlike traditional chatbots, our AI Employees learn, adapt, and improve over time.",
    },
    {
      question:
        "What's the difference between an AI Employee and a regular chatbot?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "What tasks can AI Employees handle?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
    {
      question: "Is Laburen.com secure?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    },
    {
      question: "Does it integrate with other platforms?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
    },
    {
      question: "Do AI Employees improve over time?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    },
    {
      question: "Can they handle multiple conversations at once?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat. At vero eos et accusamus et iusto odio dignissimos ducimus.",
    },
    {
      question: "How do I get started with Laburen.com?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
    },
  ];
  const title = "Frequently asked questions";
  const subtitle =
    "Find answers to the most common questions about Laburen, our technology, and how it can help you transform the way you work.";
  return (
    <div className="bg-white dark:bg-gray-900 relative overflow-hidden py-24 md:py-0 lg:py-0 px-4 sm:px-0">
      {/* Background decorative pattern */}
      <div className="relative isolate">
        <div className="mx-auto max-w-4xl mb-10 py-0 sm:py-16 lg:mt-16">
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#93E2AC] bg-white px-6 py-3 text-sm font-medium text-neutral-700 shadow-sm whitespace-nowrap">
              Precios basados en créditos&nbsp;
              <span className="text-neutral-500">Más información →</span>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-primary text-xl md:text-4xl lg:text-5xl italic tracking-tight text-neutral-600  dark:text-white font-extralight">
              Plans and Pricing
            </h1>
            <h1 className="text-primary-500 italic text-4xl md:text-6xl lg:text-7xl font-(--font-source-serif) tracking-tight">
              Growth with AI
            </h1>
            <p className="mt-8 text-pretty text-sm md:text-lg lg:text-lg text-neutral-800 sm:text-xl max-w-3xl mx-auto dark:text-gray-400">
              Get started immediately for free. Upgrade for more<br />credits, usage and collaboration.
            </p>
          </div>
        </div>

        {/* Pricing Cards */}
        <Pricing />
        <Faq faqs={faqs} title={title} subtitle={subtitle} />
      </div>
    </div>
  );
}
