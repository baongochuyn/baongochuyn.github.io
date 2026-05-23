import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bao Ngoc HUYNH · Portfolio',
  description:
    'Portfolio — ESIEA, alternance Bluesoft. Développeuse full stack : TDF, Banque Alimentaire. Réalisations : DiaPyl, DiagElec, CityBoard, BOOST, Kalicolis.',
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="min-h-screen flex flex-col font-sans antialiased bg-slate-900 text-slate-100">
        {children}
      </body>
    </html>
  );
}
