'use client';

import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import ProjectModal from '@/components/ProjectModal';
import SkillModal from '@/components/SkillModal';
import SoftSkillModal from '@/components/SoftSkillModal';
import { projects, technicalSkills, softSkills } from '@/data/content';

type Project = (typeof projects)[0];
type TechnicalSkill = (typeof technicalSkills)[0];
type SoftSkill = (typeof softSkills)[0];

type ModalContextType = {
  openProject: (project: Project | null) => void;
  openProjectById: (projectId: string) => void;
  openSkill: (skill: TechnicalSkill | null) => void;
  openSkillById: (skillId: string) => void;
  openSoftSkill: (skill: SoftSkill | null) => void;
};

const ModalContext = createContext<ModalContextType | null>(null);

export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error('useModal must be used within ModalProvider');
  return ctx;
}

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<TechnicalSkill | null>(null);
  const [selectedSoftSkill, setSelectedSoftSkill] = useState<SoftSkill | null>(null);

  useEffect(() => setMounted(true), []);

  const openProject = useCallback((project: Project | null) => {
    setSelectedProject(project);
    setSelectedSkill(null);
    setSelectedSoftSkill(null);
  }, []);

  const openSkill = useCallback((skill: TechnicalSkill | null) => {
    setSelectedSkill(skill);
    setSelectedProject(null);
    setSelectedSoftSkill(null);
  }, []);

  const openProjectById = useCallback((projectId: string) => {
    const id = projectId.replace(/^#?project-/, '');
    const project = projects.find((p) => p.id === id) ?? null;
    setSelectedProject(project);
    setSelectedSkill(null);
    setSelectedSoftSkill(null);
  }, []);

  const openSkillById = useCallback((skillId: string) => {
    const skill = technicalSkills.find((s) => s.id === skillId || `skill-${s.id}` === skillId) ?? null;
    setSelectedSkill(skill);
    setSelectedProject(null);
    setSelectedSoftSkill(null);
  }, []);

  const openSoftSkill = useCallback((skill: SoftSkill | null) => {
    setSelectedSoftSkill(skill);
    setSelectedProject(null);
    setSelectedSkill(null);
  }, []);

  const value: ModalContextType = { openProject, openProjectById, openSkill, openSkillById, openSoftSkill };

  const modals = (
    <div id="portfolio-modals" style={{ position: 'fixed', inset: 0, zIndex: 99999, pointerEvents: 'none' }}>
      <div style={{ pointerEvents: selectedProject ? 'auto' : 'none' }}>
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onOpenSkill={openSkillById}
        />
      </div>
      <div style={{ pointerEvents: selectedSkill ? 'auto' : 'none' }}>
        <SkillModal skill={selectedSkill} onClose={() => setSelectedSkill(null)} />
      </div>
      <div style={{ pointerEvents: selectedSoftSkill ? 'auto' : 'none' }}>
        <SoftSkillModal skill={selectedSoftSkill} onClose={() => setSelectedSoftSkill(null)} />
      </div>
    </div>
  );

  return (
    <ModalContext.Provider value={value}>
      {children}
      {mounted && typeof document !== 'undefined' && createPortal(modals, document.body)}
    </ModalContext.Provider>
  );
}
