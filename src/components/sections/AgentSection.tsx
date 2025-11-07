"use client";

import AgentCard from "@/components/AgentCard";
import { useTranslations } from "next-intl";

export default function AgentsSection() {
  const t = useTranslations("hero.agents.section");
  
  return (
    <section className="bg-white pt-24 py-10 rounded-t-3xl">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-2xl tracking-tight text-neutral-900 max-w-3xl leading-tight lg:text-h2">
          {t("title").includes("Power") ? (
            <>
              Create, Connect, and Power <br />Your Business with AI employees
            </>
          ) : (
            <>
              Crea, Conecta y Potencia <br />Tu Negocio con empleados IA
            </>
          )}
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
