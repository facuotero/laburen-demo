import { ChevronDownIcon } from '@heroicons/react/16/solid'
import LogoGridResources from './LogoGridResources'
import Image from 'next/image'

export default function ContactForm() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start w-full max-w-[1440px] lg:max-h-[1011px] mx-auto items-start md:items-center gap-12 lg:gap-10 lg:px-[120px] py-8 lg:py-32">
          {/* Left Section */}
          <div className="space-y-8 w-full md:max-w-[648px] md:max-h[648px] lg:max-w-[600px] lg:max-h-[648px]">
            {/* Logo */}
            <div className="mt-10 lg:mt-0">
              <div className="relative w-[64px] h-[64px] rounded-xl flex items-center justify-center">
                <Image
                  src="/Isologotipo_verde.svg"
                  alt="Laburen Logo"
                  fill
                />
              </div>
            </div>

            {/* Main Content */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-medium text-neutral-900 leading-tight">
                Scale the<br />
                unscalable with AI
              </h1>
              
              <p className="text-base text-gray-600">
                Know you want to scale your growing business with AI but need an expert partner? Our team is here to make AI work for your business.
              </p>

              <div className="space-y-4">
                <p className="text-base md:text-md font-semibold text-neutral-900">
                  In a 30-minute call you will learn how to:
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-sm text-neutral-800">Turn roadblocks into automated AI agents</p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-sm text-neutral-800">Build an AI roadmap for your business</p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-sm text-neutral-800">Accelerate AI adoption and results</p>
                  </div>
                </div>
              </div>

              {/* Company Logos */}
              <LogoGridResources/>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="border border-neutral-200 p-4 w-full max max-h-[851px] md:max-w-[648px] md:max-h[832px] lg:max-w-[562px] lg:max-h-[851px] rounded-2xl  flex flex-col items-start shrink-0">
            <h2 className="text-2xl mb-4 font-bold text-gray-900">Contact our team</h2>
            
            <form className="flex flex-col items-start w-full" style={{gap: '16px'}}>
                {/* Name */}
                <div className="w-full">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="block h-[40px] w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20"
                  />
                </div>

                {/* Phone */}
                <div className="w-full">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <div className="flex rounded-lg border border-gray-300  focus-within:border-green-500 focus-within:ring-2 focus-within:ring-green-500/20">
                    <div className="flex items-center px-3 border-r border-gray-300">
                      <span className="text-gray-500 text-sm">🇺🇸</span>
                      <ChevronDownIcon className="ml-1 h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="block w-full h-[40px] rounded-r-lg border-0 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Business Email */}
                <div className="w-full">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Business email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="block w-full h-[40px] rounded-lg border border-gray-300  px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20"
                  />
                </div>

                {/* Company Name */}
                <div className="w-full">
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company name
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    className="block w-full h-[40px] rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20"
                  />
                </div>

                {/* Number of Employees */}
                <div className="w-full">
                  <label htmlFor="employees" className="block text-sm font-medium text-gray-700 mb-2">
                    Number of employees
                  </label>
                  <div className="relative">
                    <select
                      id="employees"
                      name="employees"
                      className="block w-full appearance-none rounded-lg border border-gray-300 px-4 py-3 pr-10 text-gray-900 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20"
                    >
                      <option value="">Select...</option>
                      <option value="1-10">1-10</option>
                      <option value="11-50">11-50</option>
                      <option value="51-200">51-200</option>
                      <option value="201-1000">201-1000</option>
                      <option value="1000+">1000+</option>
                    </select>
                    <ChevronDownIcon className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  </div>
                </div>

                {/* Budget Question */}
                <div className="w-full">
                  <p className="block text-sm font-medium text-gray-700 mb-3">
                    Our enterprise plans start at $1,500/mo. Does that align with your budget?
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input
                        id="budget-yes"
                        name="budget"
                        type="radio"
                        value="yes"
                        className="h-4 w-4 border-gray-300 text-green-600 focus:ring-green-500"
                      />
                      <label htmlFor="budget-yes" className="ml-3 text-sm text-gray-700">
                        Yes
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="budget-no"
                        name="budget"
                        type="radio"
                        value="no"
                        className="h-4 w-4 border-gray-300 text-green-600 focus:ring-green-500"
                      />
                      <label htmlFor="budget-no" className="ml-3 text-sm text-gray-700">
                        No
                      </label>
                    </div>
                  </div>
                </div>

                {/* Use Case */}
                <div className="w-full">
                  <label htmlFor="usecase" className="block text-sm font-medium text-gray-700 mb-2">
                    Use case
                  </label>
                  <div className="relative">
                    <select
                      id="usecase"
                      name="usecase"
                      className="block w-full appearance-none rounded-lg border border-gray-300 px-4 py-3 pr-10 text-gray-900 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20"
                    >
                      <option value="">Select...</option>
                      <option value="customer-support">Customer Support</option>
                      <option value="sales">Sales</option>
                      <option value="marketing">Marketing</option>
                      <option value="operations">Operations</option>
                      <option value="other">Other</option>
                    </select>
                    <ChevronDownIcon className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  </div>
                </div>

                {/* Describe AI Agent */}
                <div className="w-full">
                  <label htmlFor="agent" className="block text-sm font-medium text-gray-700 mb-2">
                    Describe the AI Agent you´re interested in
                  </label>
                  <input
                    id="agent"
                    name="agent"
                    type="text"
                    className="block w-full h-[40px] rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full rounded-4xl bg-primary-600 px-2 py-2 text-white font-semibold hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
      </div>
    </div>
  )
}