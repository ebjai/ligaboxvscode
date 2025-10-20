type Fighter = {
  id: string;
  name: string;
  nickname?: string;
  division: string;
  record: string;
  stance?: string;
};

const demo: Fighter[] = [
  { id: "1", name: "Carlos "El Trueno" Alvarez", division: "Lightweight", record: "18-2 (12 KOs)", stance: "Orthodox" },
  { id: "2", name: "Miguel Santos", division: "Welterweight", record: "24-1 (16 KOs)", stance: "Southpaw" },
  { id: "3", name: "Raul Castillo", division: "Featherweight", record: "12-0 (8 KOs)" }
];

export default function FightersPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="text-2xl font-bold mb-6">Fighters</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {demo.map(f => (
          <div key={f.id} className="rounded-xl border border-zinc-800 p-5 bg-zinc-950">
            <h3 className="font-semibold">{f.name}</h3>
            <p className="text-xs text-zinc-400 mt-1">{f.division}</p>
            <p className="mt-3 text-sm">Record: {f.record}</p>
            {f.stance && <p className="text-sm text-zinc-300">Stance: {f.stance}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
