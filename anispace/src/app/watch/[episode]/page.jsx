import Navbar from "../../../../components/Navbar";
import Link from "next/link";

export default function WatchPage({ params }) {
  const { id, episode } = params;
  const epNum = parseInt(episode);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0a0a12] text-white px-10 py-8">
        <div className="mb-6">
          <Link href={`/anime/${id}`} className="text-slate-500 hover:text-purple-400 text-sm transition-colors mb-3 inline-block">
            ← Back to anime
          </Link>
          <h1 className="text-4xl font-bold tracking-tight">
            Episode <span className="text-purple-500">{episode}</span>
          </h1>
        </div>

        {/* Player */}
        <div className="w-full aspect-video bg-[#0f0f1a] rounded-2xl border border-purple-900/15 flex items-center justify-center mb-6">
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full border border-purple-800/30 bg-purple-900/15 flex items-center justify-center text-2xl text-purple-500">
              ▶
            </div>
            <p className="text-slate-600 text-sm">Video player coming soon</p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3">
          {epNum > 1 && (
            <Link
              href={`/watch/${id}/${epNum - 1}`}
              className="bg-[#0f0f1a] border border-purple-900/20 hover:border-purple-600/40 hover:bg-purple-900/20 hover:text-purple-400 text-slate-400 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all"
            >
              ← Previous
            </Link>
          )}
          <span className="flex-1 text-center text-slate-600 text-sm">Episode {episode}</span>
          <Link
            href={`/watch/${id}/${epNum + 1}`}
            className="bg-[#0f0f1a] border border-purple-900/20 hover:border-purple-600/40 hover:bg-purple-900/20 hover:text-purple-400 text-slate-400 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all"
          >
            Next →
          </Link>
        </div>
      </main>
    </>
  );
}