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
}

const defaultAgents: Agent[] = [
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
];

export function AgentCard({ agents = defaultAgents }: AgentCardProps) {
  return (
        <section className="mt-10">
          <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
          Agents
        </h2>
        <a
          href="#"
          className="text-sm font-medium text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-white transition-colors"
        >
          Create your now →
        </a>
      </div>
    <div className="mt-2 grid gap-6 lg:grid-cols-3 lg:auto-rows-[120px]">
      {/* CARD PRINCIPAL (ancha) */}
      <div className="lg:col-span-2 relative flex items-center rounded-lg border border-[#93E2AC] bg-white/5 p-6 shadow-sm">
        <div>
          <h3 className="text-2xl font-medium text-neutral-900 dark:text-white">
            Your ideal employee
            <br />
            for every task.
          </h3>
        </div>
        <div className="ml-auto mb-11">
          <Image
            src="/agents_illustration.svg"
            alt="Agents illustration"
            width={282}
            height={165}
            className="object-contain"
          />
        </div>
      </div>

      {/* CARDS PEQUEÑAS DE AGENTES */}
      {agents.map((agent) => (
      <div
      key={agent.name}
      className="flex items-start gap-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/10 dark:bg-white/5 p-4 shadow-sm hover:bg-white/20 transition-colors"
    >
      {/* Avatar */}
      <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
        <Image
          src={agent.avatar || `/images/agents-${agent.name.toLowerCase()}.png`}
          alt={agent.name}
          fill
          sizes="48px"
          className="object-cover"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col">
        <h4 className="font-medium text-neutral-900 dark:text-white">
          {agent.name}
        </h4>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-snug line-clamp-2">
          {agent.role}
        </p>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-snug line-clamp-2">
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
