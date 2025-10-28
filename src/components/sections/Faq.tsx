import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
// import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import {PlusIcon , MinusIcon} from "@/components/ui/icons";

import { Button } from "../ui/button";

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

export default function Faq() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <h2 className="text-4xl tracking-tight text-neutral-900 sm:text-5xl dark:text-white">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-neutral-600 dark:text-gray-400">
              Find answers to the most common questions about Laburen, our
              technology, and how it can help you transform the way you work.
            </p>
           <Button className="p-5 bg-primary-100 mt-6 hover:bg-primary-200 text-primary-800 rounded-3xl border border-primary-500">
            Schedule a Free Consultation
           </Button>
          </div>
          <div className="mt-10 lg:col-span-7 lg:mt-0">
            <dl className="space-y-10 border border-gray-50 p-5 rounded-xl shadow-md dark:border-gray-700">
              <dl className="divide-y divide-gray-900/10 dark:divide-white/10">
                {faqs.map((faq) => (
                  <Disclosure
                    key={faq.question}
                    as="div"
                    className="py-6 first:pt-0 last:pb-0"
                  >
                    <dt>
                      <DisclosureButton className="group flex w-full items-start justify-between text-left dark:text-white">
                        <span className="text-lg text-neutral-900 dark:text-white">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          <PlusIcon
                            aria-hidden="true"
                            className="size-6 group-data-open:hidden"
                          />
                          <MinusIcon
                            aria-hidden="true"
                            className="size-6 group-[:not([data-open])]:hidden"
                          />
                        </span>
                      </DisclosureButton>
                    </dt>
                    <DisclosurePanel as="dd" className="mt-2 pr-12">
                      <p className=" text-neutral-900 dark:text-gray-400 text-base">
                        {faq.answer}
                      </p>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </dl>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
