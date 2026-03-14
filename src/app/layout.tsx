import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { ModalProvider } from '@/context/ModalContext';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

// Inline favicon (data URI) so the browser does not request /favicon.ico (avoids 404)
const faviconDataUri =
  'data:image/svg+xml;base64,' +
  'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSIjMWUyOTNiIi8+PHRleHQgeD0iMTYiIHk9IjIyIiBmb250LXNpemU9IjE4IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI2Y0NzJiNiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+QjwvdGV4dD48L3N2Zz4=';

export const metadata: Metadata = {
  title: 'Bao Ngoc HUYNH · Portfolio',
  description: 'Étudiante en ingénierie du logiciel à l\'ESIEA, alternance Bluesoft. Full stack, projets DiaPyl, DiagElec, CityBoard, BOOST, Kalicolis.',
  icons: { icon: { url: faviconDataUri, type: 'image/svg+xml' } },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${plusJakarta.variable} font-sans antialiased bg-slate-900 text-slate-100`}>
        <ModalProvider>{children}</ModalProvider>
      </body>
    </html>
  );
}
