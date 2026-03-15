'use client';

import { softSkills } from '@/data/content';
import { useModal } from '@/context/ModalContext';
import SoftSkillIcon from './SoftSkillIcon';

export default function SoftSkills() {
  const { openSoftSkill } = useModal();

  return (
    <section id="competences-humaines" className="py-16 px-4 scroll-mt-20 bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
          Compétences humaines
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {softSkills.map((skill) => (
            <button
              key={skill.id}
              type="button"
              id={`soft-${skill.id}`}
              onClick={() => openSoftSkill(skill)}
              className="flex items-center gap-4 p-5 rounded-xl bg-slate-800 border border-slate-700 hover:border-pink-500/60 hover:bg-slate-700/80 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-slate-900 text-left scroll-mt-24"
            >
              <span className="w-11 h-11 rounded-lg bg-pink-500/20 text-pink-400 flex items-center justify-center flex-shrink-0">
                <SoftSkillIcon skillId={skill.id} className="w-5 h-5" />
              </span>
              <span className="font-semibold text-white">
                {skill.title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
