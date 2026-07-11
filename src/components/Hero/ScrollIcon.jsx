export default function ScrollIcon() {
  return (
    <div className="absolute left-1/2 top-[85%] -translate-x-1/2 flex flex-col items-center gap-3">
      <span className="font-['Space_Mono'] text-[11px] uppercase tracking-[0.3em] text-white">
        Scroll
      </span>

      <div className="flex h-10 w-6 justify-center rounded-full border border-white">
        <span className="mt-2 h-2 w-2 rounded-full bg-white animate-bounce"></span>
      </div>
    </div>
  );
}
