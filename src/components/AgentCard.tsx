import Image from "next/image";

interface Agent {
  name: string;
  role: string;
  avatar?: string;
  description: string;
  image?: string;
}

interface AgentCardProps {
  agents?: Agent[];
  type?: "employees" | "platforms" | "integrations";
}

const agentGroups = {
  employees: [
    {
      name: "Maxi",
      role: "Sales",
      avatar: "/avatars/avatar_wt_maxi.svg",
      description: "Connects with potential clients and helps close deals.",
    },
    {
      name: "Nora",
      role: "Administration",
      avatar: "/avatars/avatar_nora.svg",
      description: "Schedules meetings and organizes clients.",
    },
    {
      name: "Consu",
      role: "Support & Post-Sales",
      avatar: "/avatars/avatar_wt_consu.svg",
      description: "Handles customer queries and ensures satisfaction.",
    },
    {
      name: "Jorge",
      role: "Wholesale Sales",
      avatar: "/avatars/avatar_wt_jorge.svg",
      description: "Manages orders and coordinates deliveries.",
    },
  ],
  platforms: [
    {
      name: "Tokko CRM",
      role: "CRM",
      avatar: "/avatars/tokko.svg",
      description:
        "Connect and authenticate your AI agents with multiple platforms",
    },
    {
      name: "Kommo",
      role: "Soporte y Post-Venta",
      avatar: "/avatars/avatar_wt_consu.svg",
      description:
        "Encargada de asesorar el cliente en todo el proceso despues de la compra",
    },
    {
      name: "Cal.com",
      role: "Soporte y Post-Venta",
      avatar: "/avatars/avatar_wt_consu.svg",
      description:
        "Encargada de asesorar el cliente en todo el proceso despues de la compra",
    },
    {
      name: "Google Calendar",
      role: "Organization",
      avatar: "/avatars/avatar_wt_consu.svg",
      description: "Automatically schedules and organizes your meetings.",
    },
  ],
  integrations: [
    {
      name: "Instagram",
      role: "Social Media",
      avatar: "/avatars/instagram.svg",
      description: "Turn every interaction into a sales opportunity",
    },
    {
      name: "Whatsapp",
      role: "Messaging",
      avatar: "/avatars/whatsapp.svg",
      description: "Automates communication and improves real-time support.",
    },
    {
      name: "Odoo",
      role: "ERP",
      avatar: "/avatars/odoo.svg",
      description:
        "Optimizes sales, inventory, and internal processes with ease",
    },
    {
      name: "Google Drive",
      role: "Storage",
      avatar: "/avatars/google_drive.svg",
      description: "Organize and manage documents with AI.",
    },
  ],
};

const imagesSection = {
  employees: "/agents_illustration.svg",
  platforms: "/tools_illustration.svg",
};

export function AgentCard({ agents, type = "employees" }: AgentCardProps) {
  const selectedAgents = agents || agentGroups[type];

  const titles = {
    employees: "Your ideal employee\nfor every task.",
    platforms: "Let AI employees use your\nfavorite tools seamlessly.",
    integrations: "Your favorite business apps,\nready to scale with you.",
  };

  const sectionTitles = {
    employees: "Agents",
    platforms: "Tools",
    integrations: "Integrations",
  };

  const linkTexts = {
    employees: "Create your now →",
    platforms: "See all tools →",
    integrations: "See all integrations →",
  };

  return (
    <section className="mt-10">
      <div className="flex items-center justify-between">
        <h2 className="text-md font-semibold text-neutral-600">
          {sectionTitles[type]}
        </h2>
        <a
          href="#"
          className="text-sm font-medium text-neutral-400 hover:text-neutral-700 transition-colors"
        >
          {linkTexts[type]}
        </a>
      </div>
      <div className="mt-2 grid grid-cols-2 gap-3 lg:grid-cols-3 lg:auto-rows-[120px]">
        {/* CARD PRINCIPAL (ancha) */}
        <div className="col-span-2 relative flex items-center rounded-lg border border-[#93E2AC] bg-white/5 p-3 shadow-sm h-[105px] lg:p-6">
          <div>
            <h3 className="text-md font-medium text-neutral-900 lg:text-2xl">
              {titles[type].split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  {index < titles[type].split("\n").length - 1 && <br />}
                </span>
              ))}
            </h3>
          </div>
          {type !== "integrations" && (
            <Image
              src={imagesSection[type]}
              alt="Agents illustration"
              width={282}
              height={165}
              className="object-contain absolute right-0 bottom-0 w-50 h-30 sm:w-40 sm:h-24 md:w-48 md:h-28 lg:w-[282px] lg:h-[165px]"
            />
          )}
        </div>

        {/* CARDS PEQUEÑAS DE AGENTES */}
        {selectedAgents.map((agent) => (
          <div
            key={agent.name}
            className="rounded-xl border border-neutral-200 bg-white/10 p-4 shadow-sm hover:bg-white/20 transition-colors"
          >
            {/* Avatar */}
            <div className="flex items-center gap-3 w-full mb-2">
              <div className="flex gap-2">
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
                  <Image
                    src={
                      agent.avatar ||
                      `/images/agents-${agent.name.toLowerCase()}.png`
                    }
                    alt={agent.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-neutral-900">{agent.name}</h4>
                  <p className="text-sm text-neutral-500 leading-snug line-clamp-2">
                    {agent.role}
                  </p>
                </div>
              </div>
            </div>

            {/* Info */}
            <div>
              <p className="text-sm text-neutral-500 leading-snug line-clamp-2">
                {agent.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AgentCard;
