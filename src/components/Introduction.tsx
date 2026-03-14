import { profile } from '@/data/content';

export default function Introduction() {
  return (
    <section
      id="accueil"
      className="min-h-[85vh] flex flex-col justify-center px-4 py-20 bg-slate-900"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
          {profile.name}
        </h1>
        <p className="text-xl text-pink-400 font-medium mb-2">
          {profile.role}
        </p>
        <p className="text-slate-400 text-sm mb-10">
          {profile.school} · {profile.age} ans · Alternance ingénieur {profile.company}
        </p>
        <a
          href="#presentation"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-pink-500 text-white font-medium hover:bg-pink-600 transition-colors text-sm cursor-pointer"
        >
          Découvrir mon profil
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
