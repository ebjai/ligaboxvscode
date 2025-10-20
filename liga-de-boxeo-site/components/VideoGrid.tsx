import Link from "next/link";
import Image from "next/image";
import { fetchVideos } from "@/lib/youtube";

export default async function VideoGrid({ query }: { query?: string }) {
  const videos = await fetchVideos(query);

  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <div className="flex items-end justify-between mb-6">
        <h2 className="text-xl font-bold">Latest Videos</h2>
        <Link href="/search" className="text-sm text-ldb-gold hover:underline">Advanced search</Link>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map(v => (
          <Link key={v.id} href={v.url} target="_blank" className="group rounded-xl overflow-hidden border border-zinc-800 hover:border-ldb-gold/60">
            <div className="relative aspect-video bg-zinc-900">
              <Image src={v.thumbnail} alt={v.title} fill className="object-cover" />
            </div>
            <div className="p-3">
              <p className="text-sm font-medium line-clamp-2 group-hover:text-ldb-gold">{v.title}</p>
              <p className="mt-1 text-xs text-zinc-500">{new Date(v.publishedAt).toLocaleDateString()}</p>
            </div>
          </Link>
        ))}
      </div>
      {!videos.length && (
        <p className="text-sm text-zinc-400">No videos found.</p>
      )}
    </section>
  );
}
