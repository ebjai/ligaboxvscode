type Event = {
  id: string;
  title: string;
  date: string;
  venue: string;
  city?: string;
  status?: "upcoming" | "completed";
};

const events: Event[] = [
  { id: "e1", title: "Liga Night I", date: "2025-11-15", venue: "Arena Central", city: "Miami, FL", status: "upcoming" },
  { id: "e2", title: "Liga Showcase: Featherweights", date: "2025-12-08", venue: "Palacio del Box", city: "Mexico City", status: "upcoming" }
];

export default function EventsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-2xl font-bold mb-6">Events</h1>
      <div className="space-y-4">
        {events.map(e => (
          <div key={e.id} className="rounded-xl border border-zinc-800 p-5 bg-zinc-950 flex items-center justify-between">
            <div>
              <h3 className="font-semibold">{e.title}</h3>
              <p className="text-sm text-zinc-400">{new Date(e.date).toLocaleDateString()} • {e.venue}{e.city ? ` — ${e.city}` : ""}</p>
            </div>
            <span className="text-xs px-2 py-1 rounded border border-zinc-700">{e.status ?? "upcoming"}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
