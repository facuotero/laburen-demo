'use client'

import { Textarea } from "@/components/ui/textarea"
import { ArrowUp } from "lucide-react"

export function AgentInput() {
  return (
    <div className="relative max-w-3xl mx-auto">
      <Textarea
        placeholder="Write what you want your agent to do..."
        className="w-full min-h-24 resize-none rounded-3xl bg-neutral-800/80 border border-neutral-700 text-gray-200 px-6 py-3 pr-12 placeholder-gray-500 focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:outline-none"
      />
      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary-500 hover:bg-primary-600 transition-colors rounded-full p-2"
        aria-label="Send message"
      >
        <ArrowUp className="h-5 w-5 text-white" />
      </button>
    </div>
  )
}