'use client';

import { projects } from '@/data/content';
import { useModal } from '@/context/ModalContext';
import ProjectIcon from './ProjectIcon';

// Seules les compétences ayant une fiche dédiée (C#, .NET, SQL, React, JavaScript, Entity Framework) sont cliquables.
// Flutter, Git, MVC, SVN, etc. ne sont pas liés car ils n'ont pas de section compétence dédiée.
const SKILL_LABEL_TO_ID: Record<string, string> = {
  'C#': 'csharp',
  '.NET': 'dotnet',
  'React': 'react',
  'JavaScript': 'javascript',
  'SQL': 'sql',
  'PostgreSQL': 'sql',
  'Entity Framework': 'entity-framework',
  'NUnit': 'csharp',
  'jQuery': 'javascript',
  'Material UI': 'react',
};

export default function Projects() {
  const { openProject, openSkillById } = useModal();

  return (
    <section id="projets" className="py-16 px-4 scroll-mt-20 bg-slate-900/50 relative">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
          Projets
        </h2>

        <div className="space-y-4">
          {projects.map((project) => {
            const raw = (project as { skillsPreview?: string[] }).skillsPreview;
            const previewSkills: string[] = Array.isArray(raw) ? raw : [];
            return (
              <article
                key={project.id}
                id={`project-${project.id}`}
                className="rounded-xl bg-slate-800 border border-slate-700 overflow-hidden scroll-mt-24"
              >
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => openProject(project)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      openProject(project);
                    }
                  }}
                  className="w-full text-left p-5 flex items-center gap-4 hover:bg-slate-700/50 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-inset rounded-xl"
                >
                  <span className="w-12 h-12 rounded-lg bg-pink-500/20 text-pink-400 flex items-center justify-center flex-shrink-0">
                    <ProjectIcon projectId={project.id} className="w-6 h-6" />
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-white">
                      {project.title}
                    </h3>
                    {previewSkills.length > 0 && (
                      <p className="mt-1 text-slate-400 text-sm">
                        {previewSkills.map((label, i) => {
                          const skillId = SKILL_LABEL_TO_ID[label];
                          return skillId ? (
                            <span key={label + i}>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  openProject(null);
                                  openSkillById(skillId);
                                }}
                                className="text-pink-400 hover:text-pink-300 hover:underline cursor-pointer font-medium"
                              >
                                {label}
                              </button>
                              {i < previewSkills.length - 1 ? ' · ' : ''}
                            </span>
                          ) : (
                            <span key={label + i} className="text-pink-400 font-medium">
                              {label}{i < previewSkills.length - 1 ? ' · ' : ''}
                            </span>
                          );
                        })}
                      </p>
                    )}
                  </div>
                  <span className="text-slate-500 flex-shrink-0">→</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
