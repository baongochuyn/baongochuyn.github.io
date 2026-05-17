import { TextWithProjectLinks, TextWithSkillLinks } from '@/lib/linkify';

export type ContentSection = { title: string; paragraphs: string[] };

type SkillProps = {
  variant: 'skill';
  sections: ContentSection[];
};

type ProjectProps = {
  variant: 'project';
  sections: ContentSection[];
};

type SoftProps = {
  variant: 'soft';
  sections: ContentSection[];
};

export type ModalSectionedBodyProps = SkillProps | ProjectProps | SoftProps;

/* Hiérarchie : titre modal (h2) > sous-titres section (h3) > corps (p) */
const sectionTitleClass =
  'text-base md:text-lg font-semibold text-white tracking-tight border-b border-pink-500/30 pb-2 mb-3';

export default function ModalSectionedBody(props: ModalSectionedBodyProps) {
  return (
    <div className="space-y-8">
      {props.sections.map((sec) => (
        <section key={sec.title} className="space-y-3">
          <h3 className={sectionTitleClass}>{sec.title}</h3>
          <div className="space-y-3">
            {sec.paragraphs.map((p, i) => (
              <p key={i} className="text-sm md:text-[15px] text-slate-300 leading-relaxed">
                {props.variant === 'skill' ? (
                  <TextWithSkillLinks>{p}</TextWithSkillLinks>
                ) : (
                  <TextWithProjectLinks>{p}</TextWithProjectLinks>
                )}
              </p>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
