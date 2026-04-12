import Link from 'next/link';

type BackLinkProps = {
  href: string;
  label: string;
};

export default function BackLink({ href, label }: BackLinkProps) {
  return (
    <Link
      href={href}
      className="group mb-7 inline-flex items-center gap-2.5 rounded-lg px-2 py-1.5 text-sm font-medium text-slate-300 transition-all hover:bg-slate-800/70 hover:text-pink-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500"
    >
      <span
        className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-800 text-slate-400 transition-colors group-hover:bg-slate-700/80 group-hover:text-pink-300"
        aria-hidden
      >
        <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12.5 4.5L7 10l5.5 5.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span>{label}</span>
    </Link>
  );
}
