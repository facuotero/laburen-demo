import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-linear-to-b from-[#0A0A0A] via-neutral-900 to-neutral-950 text-white pt-32 pb-24 sm:pb-40">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(76,199,34,0.15),transparent_70%)]" />

      {/* Content */}
      <div className="mx-auto max-w-4xl text-center px-6 lg:px-8">
        <p className="inline-flex items-center gap-2 text-sm text-gray-400 mb-4">
          ⭐ <span>per 1,000 customers</span>
        </p>

        <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
          Create your next <span className="text-primary-500">AI Agent</span>
        </h1>

        <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
          Boost your business with Agents, virtual employees trained on your data —
          all powered by AI.
        </p>

        <div className="mt-10">
          <input
            type="text"
            placeholder="Write what you want your agent to do..."
            className="w-full max-w-xl mx-auto block rounded-full bg-neutral-800/80 border border-neutral-700 text-gray-200 px-6 py-3 placeholder-gray-500 focus:ring-2 focus:ring-primary-600 outline-none"
          />
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm text-gray-400">
            <span className="px-3 py-1 rounded-full bg-neutral-800/70 border border-neutral-700">
              Analyze data & answer questions
            </span>
            <span className="px-3 py-1 rounded-full bg-neutral-800/70 border border-neutral-700">
              Automate repetitive tasks
            </span>
            <span className="px-3 py-1 rounded-full bg-neutral-800/70 border border-neutral-700">
              Provide 24/7 support
            </span>
          </div>
        </div>

        <p className="mt-16 text-gray-500 text-sm">
          Your next hire isn’t human. These companies already know it...
        </p>

        <div className="mt-8 flex justify-center gap-10 opacity-70">
          <img src="logo_nvidia.svg" alt="NVIDIA" className="h-20" />
          <img src="logo_microsoft.svg" alt="Microsoft" className="h-20" />
          <img src="logo_vias3d.svg" alt="VIAS3D" className="h-20" />
          <img src="logo_taraborelli.svg" alt="Taraborelli" className="h-20" />
          <img src="logo_portsaid.svg" alt="Portsaid" className="h-20" />
        </div>
      </div>
    </section>
  )
}