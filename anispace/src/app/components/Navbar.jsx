import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 border-b border-purple-900/30 bg-[#0a0a12]/85 backdrop-blur-md sticky top-0 z-50">
      <Link href="/" className="text-2xl font-bold tracking-tight text-white font-sans">
        Ani<span className="text-purple-500">Space</span>
      </Link>
      <div className="flex items-center gap-6">
        <Link href="/watchlist" className="text-slate-400 hover:text-white text-sm font-medium transition-colors">
          Watchlist
        </Link>
        <button className="text-slate-400 hover:text-white text-sm font-medium transition-colors">
          Login
        </button>
        <button className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors">
          Sign up
        </button>
      </div>
    </nav>
  );
}