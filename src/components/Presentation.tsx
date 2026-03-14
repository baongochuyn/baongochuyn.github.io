import { presentation } from '@/data/content';

export default function Presentation() {
  return (
    <section id="presentation" className="py-16 px-4 scroll-mt-20 bg-slate-800/50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
          Présentation
        </h2>
        <div className="rounded-xl bg-slate-800 border border-slate-700 p-6 md:p-8">
          <div className="space-y-4 text-slate-300 leading-relaxed">
            {presentation.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
