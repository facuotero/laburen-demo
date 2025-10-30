"use client";

import AgentCard from "@/components/AgentCard";

export default function AgentsSection() {
  return (
    <section className="bg-white py-24 sm:py-32 rounded-t-3xl">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-2xl tracking-tight text-neutral-900 max-w-3xl leading-tight lg:text-h2">
          Create, Connect, and Power <br />Your Business with AI employees
        </h2>
        
        {/* Primera AgentCard - Empleados AI */}
        <AgentCard type="employees" />
        
        {/* Segunda AgentCard - Plataformas */}
        <AgentCard type="platforms" />
        
        {/* Tercera AgentCard - Integraciones */}
        <AgentCard type="integrations" />
      </div>
    </section>
  );
}
