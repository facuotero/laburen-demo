import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
// import {PlusIcon , MinusIcon} from "@/components/ui/icons";

import { Button } from "../ui/button";

export default function Faq({faqs, title, subtitle} : {faqs: {question: string; answer: string}[], title: string, subtitle: string}) {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <h2 className="text-4xl tracking-tight text-neutral-900 sm:text-5xl dark:text-white">
              {title}
            </h2>
            <p className="mt-4 text-neutral-600 dark:text-gray-400">
             {subtitle}
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
                          <PlusSmallIcon
                            aria-hidden="true"
                            className="size-6 group-[:not([data-open])]:hidden"
                          />
                          <MinusSmallIcon
                            aria-hidden="true"
                            className="size-6 group-[data-open]:hidden"
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
