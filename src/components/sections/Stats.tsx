"use client";

import { useTranslations } from "next-intl";

export default function Stats() {
  const t = useTranslations("enterprise.stats");
  
  interface StatItem {
    value: string;
    prefix: string;
    description: string;
  }
  
  interface ProcessedStat {
    id: number;
    name: string;
    value: string;
    prefix: string;
    color: string;
  }
  
  const stats: ProcessedStat[] = t.raw("items").map((item: StatItem, index: number) => ({
    id: index + 1,
    name: item.description,
    value: item.value,
    prefix: item.prefix,
    color: 'text-neutral-900'
  }));
  return (
    <div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-2xl lg:text-3xl tracking-tight text-neutral-900">
              {t("title1")} <br /> {t("title2")}
            </h2>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-6 text-center md:grid-cols-3 lg:grid-cols-3">
            {stats.map((stat: ProcessedStat) => (
              <div key={stat.id} className="flex flex-col bg-white border border-green-200 rounded-2xl p-8 shadow-sm">
                <dd className={`order-first text-5xl font-bold tracking-tight ${stat.color}`}>
                  <span className="text-primary-600">{stat.prefix}</span> {stat.value}
                </dd>
                <dt className="mt-4 text-base text-gray-600">{stat.name}</dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
