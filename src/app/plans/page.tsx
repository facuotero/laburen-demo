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
    <div className="bg-white relative overflow-hidden">
      {/* Background decorative pattern */}
      <div className="relative isolate">
        <div className="mx-auto max-w-4xl sm:py-16 lg:mt-16">
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-neutral-600 shadow-sm border border-primary-500">
              Precios basados en créditos. Más información
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-primary text-5xl italic tracking-tight text-neutral-600 sm:text-6xl mb-2 font-extralight">
              Plans and Pricing
            </h1>
            <h1 className="text-primary-500 italic text-7xl font-(--font-source-serif) tracking-tight sm:text-6xl">
              Growth with AI
            </h1>
            <p className="mt-8 text-pretty text-4xl text-neutral-800 sm:text-xl max-w-3xl mx-auto">
              Get started immediately for free. Upgrade for more credits, usage
              <br />
              and collaboration.
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
