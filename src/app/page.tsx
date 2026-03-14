import Header from '@/components/Header';
import Introduction from '@/components/Introduction';
import Presentation from '@/components/Presentation';
import Projects from '@/components/Projects';
import TechnicalSkills from '@/components/TechnicalSkills';
import SoftSkills from '@/components/SoftSkills';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Introduction />
        <Presentation />
        <Projects />
        <TechnicalSkills />
        <SoftSkills />
        <Contact />
      </main>
      <footer className="py-6 px-4 bg-slate-900 border-t border-slate-700 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Bao Ngoc HUYNH · Portfolio
      </footer>
    </>
  );
}
