import './globals.css';
import { Inter } from 'next/font/google';
import CustomCursor from './components/CustomCursor';
import { CursorProvider } from './context/CursorProvider';



const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Axorizen',
  description: 'Portfolio website for Axorizen.com',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CursorProvider>
          <CustomCursor />
          {children}
        </CursorProvider>
      </body>
    </html>
  );
}
