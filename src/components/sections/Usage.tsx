import {useTranslations} from "use-intl";


export default function UsageSection() {
  const t = useTranslations("usage");
  const useCases = [
  {
    id: 1,
    title: t("companies.tao.title"),
    description: t("companies.tao.description"),
    imageUrl: "/tao.png",
  },
  {
    id: 2,
    title: t("companies.cargo.title"),
    description: t("companies.cargo.description"),
    imageUrl: "/cargo.png",
  },
  {
    id: 3,
    title: t("companies.vias3d.title"),
    description: t("companies.vias3d.description"),
    imageUrl: "/vias3d.png",
  },
  {
    id: 4,
    title: t("companies.europie.title"),
    description: t("companies.europie.description"),
    imageUrl: "/europie.png",
  },
];
  return (
    <div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-10 text-base text-neutral-600">
            {t("subtitle")}
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
                <div className="relative w-full h-60 rounded-lg overflow-hidden">
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
