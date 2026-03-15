'use client';

import { useEffect } from 'react';
import { useModal } from '@/context/ModalContext';
import { TextWithProjectLinks } from '@/lib/linkify';
import SkillIcon from './SkillIcon';

type Skill = {
  id: string;
  name: string;
  paragraphs: string[];
};

export default function SkillModal({
  skill,
  onClose,
}: {
  skill: Skill | null;
  onClose: () => void;
}) {
  const { openProjectById } = useModal();

  useEffect(() => {
    if (!skill) return;
    const onEscape = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onEscape);
      document.body.style.overflow = '';
    };
  }, [skill, onClose]);

  if (!skill) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md cursor-pointer"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="skill-modal-title"
    >
      <div
        className="relative w-full max-w-2xl max-h-[85vh] overflow-hidden rounded-2xl bg-slate-800 border border-slate-600 shadow-2xl flex flex-col cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 px-6 py-4 border-b border-slate-600 shrink-0 bg-slate-800">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-lg bg-pink-500/20 text-pink-400 flex items-center justify-center flex-shrink-0">
              <SkillIcon skillId={skill.id} className="w-5 h-5" />
            </span>
            <h2 id="skill-modal-title" className="text-xl font-bold text-pink-400">
              {skill.name}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 cursor-pointer"
            aria-label="Fermer"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="px-6 py-5 overflow-y-auto text-slate-200 leading-relaxed text-justify">
          <div className="space-y-4">
            {skill.paragraphs.map((paragraph, i) => (
              <p key={i} className="text-justify">
                <TextWithProjectLinks onProjectClick={openProjectById}>{paragraph}</TextWithProjectLinks>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
