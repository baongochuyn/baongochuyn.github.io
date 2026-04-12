import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SectionDivider from '@/components/SectionDivider';
import Projects from '@/components/Projects';
import TechnicalSkills from '@/components/TechnicalSkills';
import SoftSkills from '@/components/SoftSkills';
import CompetenciesRadar from '@/components/CompetenciesRadar';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <SectionDivider className="-mt-2 mb-2" />
        <Projects />
        <SectionDivider className="my-2" />
        <TechnicalSkills />
        <SectionDivider className="my-2" />
        <SoftSkills />
        <SectionDivider className="my-2" />
        <CompetenciesRadar />
        <SectionDivider className="my-2" />
        <Contact />
      </main>
      <footer className="py-4 px-4 bg-slate-900 border-t border-slate-800/40 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Bao Ngoc HUYNH · Portfolio
      </footer>
    </div>
  );
}
