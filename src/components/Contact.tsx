import { contact } from '@/data/content';

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-4 scroll-mt-20 bg-slate-900">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
          {contact.title}
        </h2>
        <p className="text-slate-400 mb-8">
          {contact.subtitle}
        </p>
        {contact.email ? (
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-pink-500 text-white font-medium hover:bg-pink-600 transition-colors cursor-pointer"
          >
            {contact.emailLabel} : {contact.email}
          </a>
        ) : (
          <p className="text-slate-500 text-sm">
            (Email à compléter)
          </p>
        )}
      </div>
    </section>
  );
}
