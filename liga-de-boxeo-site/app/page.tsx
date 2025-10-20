import Hero from "@/components/Hero";
import VideoGrid from "@/components/VideoGrid";

export default function Page() {
  return (
    <>
      <Hero />
      {/* Video hub */}
      <VideoGrid />
      {/* Feature stripes */}
      <section className="mx-auto max-w-7xl px-4 pb-20">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Fighter Profiles", desc: "Career stats, style, highlights — a clean dossier per athlete." },
            { title: "Live Events", desc: "Clear schedules, tickets/outlinks, and results posting." },
            { title: "Rankings", desc: "Transparent ladders by division with simple update workflow." }
          ].map((f) => (
            <div key={f.title} className="rounded-xl border border-zinc-800 p-6 bg-zinc-950">
              <h3 className="font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-zinc-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
