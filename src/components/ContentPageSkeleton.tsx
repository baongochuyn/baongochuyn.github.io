import Header from '@/components/Header';

type ContentPageSkeletonProps = {
  showProfileCard?: boolean;
};

function Line({ className }: { className: string }) {
  return <div className={`h-3 rounded bg-slate-700/70 ${className}`} />;
}

export default function ContentPageSkeleton({ showProfileCard = false }: ContentPageSkeletonProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 max-w-3xl mx-auto w-full px-3 sm:px-4 py-8 sm:py-10 md:py-14 pb-16 md:pb-20">
        <div className="animate-pulse">
          <div className="mb-8 h-8 w-56 rounded bg-slate-800" />

          {showProfileCard ? (
            <div className="mb-12 rounded-2xl border border-slate-700/80 bg-slate-800/40 p-6 md:p-8">
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center sm:items-start">
                <div className="w-36 h-36 md:w-44 md:h-44 rounded-2xl bg-slate-700/80" />
                <div className="flex-1 w-full pt-1">
                  <div className="h-9 w-44 rounded bg-slate-700/80 mb-3" />
                  <Line className="w-72 max-w-full mb-5" />
                  <div className="flex flex-wrap gap-2">
                    <div className="h-6 w-24 rounded-full bg-slate-700/80" />
                    <div className="h-6 w-36 rounded-full bg-slate-700/80" />
                    <div className="h-6 w-24 rounded-full bg-slate-700/80" />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <header className="mb-10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-slate-700/80" />
                <div className="h-9 w-56 rounded bg-slate-700/80" />
              </div>
              <Line className="w-80 max-w-full mb-5" />
              <div className="h-px w-full bg-slate-700/60" />
            </header>
          )}

          <div className="space-y-14">
            {[0, 1, 2].map((i) => (
              <section key={i}>
                <div className="h-7 w-56 rounded bg-slate-700/80 mb-4" />
                <div className="space-y-3">
                  <Line className="w-full" />
                  <Line className="w-[94%]" />
                  <Line className="w-[78%]" />
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
      <footer className="py-6 px-4 bg-slate-900 border-t border-slate-700 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Bao Ngoc HUYNH · Portfolio
      </footer>
    </div>
  );
}

