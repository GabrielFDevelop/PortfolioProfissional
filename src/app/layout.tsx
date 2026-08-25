import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GabrielDev | Portfólio",
  description: "Portfólio profissional de Gabriel Freitas - Desenvolvedor Front-End (Angular, React, TypeScript) com conhecimentos em .NET e Node.js",
  keywords: ["portfolio", "Gabriel Freitas", "GabrielDev", "desenvolvedor", "front-end", "angular", "react", "typescript", "dotnet"],
  authors: [{ name: "Gabriel Freitas" }],
  openGraph: {
    title: "GabrielDev | Portfólio",
    description: "Portfólio profissional de Gabriel Freitas - Desenvolvedor Front-End",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="relative min-h-screen overflow-hidden">
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/20 rounded-full blur-3xl animate-float" />
            <div className="absolute top-1/3 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
            <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-primary-600/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
          </div>
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
