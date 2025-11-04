import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { PlusIcon, MinusIcon } from "../../../public/icons";
// import {PlusIcon , MinusIcon} from "@/components/ui/icons";

import { Button } from "../ui/button";

export default function Faq({faqs, title, subtitle} : {faqs: {question: string; answer: string}[], title: string, subtitle: string}) {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-40">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <h2 className="font-medium text-4xl tracking-tight text-neutral-900 sm:text-5xl">
              {title}
            </h2>
            <p className="font-regular mt-4 text-neutral-600 ">
             {subtitle}
            </p>
           <Button className="p-5 bg-primary-100 mt-6 hover:bg-primary-200 text-primary-800 rounded-3xl border border-primary-500">
            Schedule a Free Consultation
           </Button>
          </div>
          <div className="mt-10 lg:col-span-7 lg:mt-0">
            <dl className="space-y-10 border border-gray-50 p-5 rounded-xl shadow-xl">
              <dl className="divide-y divide-gray-900/10">
                {faqs.map((faq) => (
                  <Disclosure
                    key={faq.question}
                    as="div"
                    className="py-6 first:pt-0 last:pb-0"
                  >
                    <dt>
                      <DisclosureButton className="group flex w-full items-start justify-between text-left">
                        <span className="font-medium text-lg text-neutral-900">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          <PlusIcon aria-hidden="true" className="size-6 group-data-[open]:hidden"/>
                          <MinusIcon aria-hidden="true" className="size-6 group-[:not([data-open])]:hidden"/>
                        </span>
                      </DisclosureButton>
                    </dt>
                    <DisclosurePanel as="dd" className="mt-2 pr-12">
                      <p className=" text-neutral-900 text-base">
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
