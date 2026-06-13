export default function SkeletonCard() {
  return (
    <div className="w-[200px] flex-shrink-0 bg-[#0f0f1a] rounded-2xl overflow-hidden border border-purple-900/10 animate-pulse">
      <div className="w-full h-[280px] bg-[#1a1a2e]" />
      <div className="p-3">
        <div className="h-3 bg-[#1a1a2e] rounded-full w-4/5 mb-2" />
        <div className="h-3 bg-[#1a1a2e] rounded-full w-2/5 mb-3" />
        <div className="h-7 bg-[#1a1a2e] rounded-lg w-full" />
      </div>
    </div>
  );
}