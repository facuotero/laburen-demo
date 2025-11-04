'use client'

import { Textarea } from "@/components/ui/textarea"
import { ArrowUp } from "lucide-react"
import { ClipIcon } from "../../public/icons"

export function AgentInput() {
  return (
    <div className="relative max-w-3xl mx-auto">
      <Textarea
        placeholder="Write what you want your agent to do..."
        className="font-regular text-sm lg:text-base w-full min-h-[100px] lg:max-h-[100px] resize-none rounded-3xl bg-white/5 border border-neutral-700 text-neutral-300 p-4 placeholder-neutral-300 focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:outline-none"
      />
      <div className="absolute right-2 bottom-2 flex items-center gap-2">
        <ClipIcon className="h-5 w-5 text-neutral-500 hover:text-neutral-300 cursor-pointer transition-colors" />
        <button
          className="bg-primary-500/40 hover:bg-primary-600 transition-colors rounded-full p-2"
          aria-label="Send message"
        >
          <ArrowUp className="h-5 w-5 text-neutral-50" />
        </button>
      </div>
    </div>
  )
}