const stats = [
  { id: 1, name: 'of repetitive tasks eliminated with AI.', value: '85%', prefix: '+', color: 'text-neutral-900' },
  { id: 2, name: 'faster sales and support processes.', value: '3x', prefix: '', color: 'text-neutral-900' },
  { id: 3, name: 'of our users had no prior experience with AI.', value: '70%', prefix: '+', color: 'text-neutral-900' },
]

export default function Stats() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
             More than 10.000 companies in Latin America already
             <br />use Laburen.com to grow with Artificial Intelligence
            </h2>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-6 text-center sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat) => (
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
