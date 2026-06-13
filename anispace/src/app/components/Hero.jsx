export default function Hero() {
  return (
    <section className="relative px-10 py-24 overflow-hidden">
      {/* purple glow blob */}
      <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-purple-700/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-2xl">
        <p className="text-purple-400 text-xs font-semibold tracking-widest uppercase mb-4">
          ✦ Your anime universe
        </p>
        <h1 className="text-6xl font-bold leading-[1.05] tracking-tight text-white mb-4">
          Discover your next<br />
          <span className="text-purple-500">obsession.</span>
        </h1>
        <p className="text-slate-500 text-lg mb-10 max-w-md leading-relaxed">
          Trending, top-rated, and upcoming — all in one place.
        </p>
        <div className="flex items-center gap-4">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-7 py-3 rounded-xl text-sm font-semibold transition-all hover:-translate-y-0.5">
            Explore Now
          </button>
          <button className="border border-slate-700 hover:border-slate-500 text-slate-400 hover:text-white px-7 py-3 rounded-xl text-sm font-medium transition-all">
            Browse Anime
          </button>
        </div>
      </div>
    </section>
  );
}