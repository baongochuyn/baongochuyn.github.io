type SectionDividerProps = {
  className?: string;
};

export default function SectionDivider({ className = '' }: SectionDividerProps) {
  return (
    <div className={`flex items-center justify-center px-4 ${className}`} aria-hidden>
      <div className="w-full max-w-5xl">
        <div className="flex items-center gap-4">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-700/70 to-slate-700/10" />
          <span className="h-2 w-2 rounded-full bg-pink-400/80 shadow-[0_0_0_6px_rgba(244,114,182,0.08)]" />
          <span className="h-px flex-1 bg-gradient-to-l from-transparent via-slate-700/70 to-slate-700/10" />
        </div>
      </div>
    </div>
  );
}

