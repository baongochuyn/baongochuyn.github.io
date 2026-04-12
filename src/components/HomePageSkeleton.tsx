import Header from '@/components/Header';

function Block({ className }: { className: string }) {
  return <div className={`rounded-xl bg-slate-800/80 ${className}`} />;
}

export default function HomePageSkeleton() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 animate-pulse">
        <section className="min-h-[44vh] w-full bg-slate-900/80">
          <div className="w-full max-w-5xl mx-auto px-3 sm:px-4 py-8 md:py-12">
            <div className="grid lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] gap-4 items-start">
              <div className="hidden lg:block pt-2">
                <Block className="h-36 w-full max-w-[26rem] ml-auto" />
              </div>
              <div className="flex flex-col items-center">
                <div className="h-40 w-40 md:h-52 md:w-52 rounded-2xl bg-slate-700/90 mb-6" />
                <Block className="h-8 w-56 mb-3" />
                <Block className="h-4 w-72 max-w-full mb-2" />
                <Block className="h-4 w-60 max-w-full mb-8" />
                <div className="flex gap-3">
                  <Block className="h-10 w-36 rounded-full" />
                  <Block className="h-10 w-28 rounded-full" />
                </div>
              </div>
              <div className="hidden lg:block pt-2">
                <Block className="h-36 w-full max-w-[26rem]" />
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-3 sm:px-4 py-8 space-y-8">
          {[0, 1, 2, 3].map((i) => (
            <section key={i} className="space-y-4">
              <Block className="h-7 w-52" />
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Block className="h-24" />
                <Block className="h-24" />
                <Block className="h-24" />
              </div>
            </section>
          ))}
        </div>
      </main>
      <footer className="py-4 px-4 bg-slate-900 border-t border-slate-800/40 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Bao Ngoc HUYNH · Portfolio
      </footer>
    </div>
  );
}
