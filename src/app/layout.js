import BootstrapInit from '@/helper/BootstrapInit';
import Animation from '@/helper/Animation';
import company from '@/config/company';
import './font.css';
import './globals.scss';

export const metadata = {
  title: `${company.name} | ${company.tagline}`,
  description: company.about.text,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <BootstrapInit />
        <Animation />
        {children}
      </body>
    </html>
  );
}
