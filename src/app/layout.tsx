import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <div className="flex min-h-screen flex-col">


          <header className="w-full py-4 px-6 flex items-center justify-between">
            <div className="text-xl font-bold">Logo</div>
            <nav className="flex items-center gap-4">
              [Nav Links / Auth Buttons]
            </nav>
          </header>

          <main className="flex-1 flex flex-col items-center justify-center px-4">
            {children}
          </main>

          <footer className="py-6 text-center text-sm text-gray-500">
            © 2025 YourBrand. All rights reserved.
          </footer>

        </div>
      </body>
    </html>

  );
}
