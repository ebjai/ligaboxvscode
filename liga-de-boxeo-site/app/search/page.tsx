import { fetchVideos } from "@/lib/youtube";

export const dynamic = "force-dynamic";

async function SearchForm() {
  return (
    <form className="flex gap-2" action="/search">
      <input className="flex-1 px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700" name="q" placeholder="Search videos..." />
      <button className="px-4 py-2 rounded-lg bg-ldb-gold text-black font-semibold">Search</button>
    </form>
  );
}

export default async function SearchPage({ searchParams }: { searchParams: { q?: string } }) {
  const q = searchParams?.q ?? "";
  const videos = await fetchVideos(q || undefined);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-2xl font-bold mb-4">Search</h1>
      {await SearchForm()}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {videos.map(v => (
          <a key={v.id} href={v.url} target="_blank" className="group rounded-xl overflow-hidden border border-zinc-800 hover:border-ldb-gold/60">
            <div className="relative aspect-video bg-zinc-900">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={v.thumbnail} alt={v.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-3">
              <p className="text-sm font-medium line-clamp-2 group-hover:text-ldb-gold">{v.title}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
