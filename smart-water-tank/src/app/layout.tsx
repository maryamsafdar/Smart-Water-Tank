import './globals.css';

export const metadata = {
  title: 'Smart Water Tank',
  description: 'Monitor your tank smartly',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
