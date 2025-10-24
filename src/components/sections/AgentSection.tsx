"use client";

import AgentCard from "@/components/AgentCard";

export default function AgentsSection() {
  return (
    <section className="bg-white dark:bg-neutral-950 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-center text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white">
          Create, Connect, and Power Your Business with AI employees
        </h2>
        <AgentCard />
        <AgentCard />
        <AgentCard />
        <AgentCard />
      </div>
    </section>
  );
}
