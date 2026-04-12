'use client';

import Link from 'next/link';
import { technicalSkills } from '@/data/content';
import { hrefWithBase } from '@/lib/site';
import SkillIcon from './SkillIcon';

export default function TechnicalSkills() {
  return (
    <section id="competences-techniques" className="py-14 px-4 scroll-mt-20 bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
          Compétences techniques
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {technicalSkills.map((skill) => (
            <Link
              key={skill.id}
              id={`skill-${skill.id}`}
              href={hrefWithBase(`/competences-techniques/${skill.id}`)}
              className="flex flex-col items-center gap-3 p-6 rounded-xl bg-slate-800 border border-slate-700 hover:border-pink-500/60 hover:bg-slate-700/80 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-slate-900 scroll-mt-24"
            >
              <span className="w-12 h-12 rounded-lg bg-pink-500/20 text-pink-400 flex items-center justify-center">
                <SkillIcon skillId={skill.id} className="w-6 h-6" />
              </span>
              <span className="text-sm font-semibold text-white text-center">
                {skill.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
