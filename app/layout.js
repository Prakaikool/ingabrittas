import "./globals.css";

export const metadata = {
  title: "Inga-Brittas Havrebollar",
  description: "Traditionella svenska havrebollar handgjorda med kärlek sedan 1952.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="sv" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
