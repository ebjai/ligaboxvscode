export type Video = {
  id: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
  url: string;
};

const MOCK: Video[] = [
  {
    id: "mock-1",
    title: "Liga de Boxeo — Highlights Trailer",
    thumbnail: "/placeholder/thumb1.jpg",
    publishedAt: new Date().toISOString(),
    url: "https://youtube.com"
  },
  {
    id: "mock-2",
    title: "Top Knockouts of the Month",
    thumbnail: "/placeholder/thumb2.jpg",
    publishedAt: new Date().toISOString(),
    url: "https://youtube.com"
  }
];

export async function fetchVideos(query?: string): Promise<Video[]> {
  const key = process.env.YOUTUBE_API_KEY;
  const channel = process.env.YOUTUBE_CHANNEL_ID;
  if (!key || !channel) return MOCK;

  const q = query ? `&q=${encodeURIComponent(query)}` : "";
  const url = `https://www.googleapis.com/youtube/v3/search?key=${key}&channelId=${channel}&part=snippet,id&order=date&maxResults=12${q}`;

  try {
    const res = await fetch(url, { next: { revalidate: 60 } });
    if (!res.ok) throw new Error("yt failure");
    const data = await res.json();
    const vids: Video[] = data.items
      .filter((i: any) => i.id.kind === "youtube#video")
      .map((i: any) => ({
        id: i.id.videoId,
        title: i.snippet.title,
        thumbnail: i.snippet.thumbnails?.high?.url || i.snippet.thumbnails?.medium?.url,
        publishedAt: i.snippet.publishedAt,
        url: `https://www.youtube.com/watch?v=${i.id.videoId}`
      }));
    return vids;
  } catch {
    return MOCK;
  }
}
