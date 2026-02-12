export default function Header({ title, subtitle, right }) {
  return (
    <div className="border-b bg-white">
      <div className="mx-auto max-w-6xl px-4 py-6 flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-2 text-neutral-600">{subtitle}</p>
          ) : null}
        </div>

        {right ? <div className="shrink-0">{right}</div> : null}
      </div>
    </div>
  );
}