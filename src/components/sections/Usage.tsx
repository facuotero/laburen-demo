const useCases = [
  {
    id: 1,
    title: "Education Without Delays",
    description:
      "With AI, TAO handles thousands of student queries in real time, cutting 70% of manual tasks. More focus on teaching, less on repetitive work.",
    imageUrl: "/tao.png",
  },
  {
    id: 2,
    title: "Seamless Logistics",
    description:
      "Automated tracking and quotes save hours of work each week. Instant answers for clients and a faster, more efficient team.",
    imageUrl: "/cargo.png",
  },
  {
    id: 3,
    title: "Leads That Come on Their Own",
    description:
      "AI tripled their qualified leads without growing the team. Prospecting is now automatic, and sales move faster than ever.",
    imageUrl: "/vias3d.png",
  },
  {
    id: 4,
    title: "Healthcare With More Human Time",
    description:
      "Automated scheduling and less admin work. With AI, the team spends more time where it matters: caring for patients.",
    imageUrl: "/europie.png",
  },
];

export default function UsageSection() {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
            How companies use Laburen
          </h2>
          <p className="mt-10 text-base text-neutral-600">
            From startups to large corporations, Laburen adapts to any industry:
            ecommerce, healthcare, logistics, real estate, and more.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-4 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {useCases.map((useCase) => (
            <article
              key={useCase.id}
              className="flex flex-col border border-gray-200 rounded-xl overflow-hidden"
            >
              {/* Contenedor con padding interno */}
              <div className="p-4">
                <div className="relative w-full h-[240px] rounded-lg overflow-hidden">
                  <img
                    alt={useCase.title}
                    src={useCase.imageUrl}
                    className="rounded-lg  w-full h-full"
                  />
                </div>
              </div>

              <div className="p-4 flex flex-col justify-between">
                <div className="group relative grow">
                  <h3 className="text-lg font-semibold text-neutral-900">
                    {useCase.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600">
                    {useCase.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
