type Ranking = {
  division: string;
  top10: string[];
};

const data: Ranking[] = [
  { division: "Featherweight", top10: ["R. Castillo", "J. Mendez", "A. Cruz", "D. Ortega", "M. Paz", "T. Rivera", "K. Ochoa", "G. Flores", "S. Ibarra", "F. Salas"] },
  { division: "Lightweight", top10: ["C. Alvarez", "J. Vega", "L. Paredes", "A. Ramos", "I. Leon", "P. Molina", "R. Santos", "Y. Beltran", "E. Suarez", "N. Chavez"] }
];

export default function RankingsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-2xl font-bold mb-6">Rankings</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {data.map(r => (
          <div key={r.division} className="rounded-xl border border-zinc-800 p-5 bg-zinc-950">
            <h3 className="font-semibold">{r.division}</h3>
            <ol className="mt-3 space-y-1 list-decimal list-inside text-sm">
              {r.top10.map((name, i) => <li key={i}>{name}</li>)}
            </ol>
          </div>
        ))}
      </div>
    </div>
  );
}
