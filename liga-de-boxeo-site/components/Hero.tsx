import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-ldb" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:py-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              Liga de Boxeo
              <span className="block text-ldb-gold">Data. Drama. Knockouts.</span>
            </h1>
            <p className="mt-4 text-zinc-300 max-w-xl">
              A next‑generation boxing league: streaming highlights, real‑time insights,
              fighter profiles, events, and rankings — built for fans and powered by modern web tech.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <Link href="/events" className="px-5 py-2.5 rounded-xl bg-ldb-gold text-black font-semibold shadow-brand">
                See Events
              </Link>
              <Link href="/fighters" className="px-5 py-2.5 rounded-xl border border-zinc-700 hover:border-ldb-gold">
                Browse Fighters
              </Link>
            </div>
          </div>
          <div className="justify-self-center">
            <Image src="/logo.png" alt="Liga de Boxeo" width={360} height={360} className="rounded-xl shadow-brand" />
          </div>
        </div>
      </div>
    </section>
  );
}
