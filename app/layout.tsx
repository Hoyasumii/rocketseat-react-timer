import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "@/components";

export const metadata: Metadata = {
  title: "Ignite Timer | Alan Reis",
};

const RobotoFont = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={RobotoFont.className}>
      <body className="h-svh w-svw bg-gray-700 px-40 py-20">
        <main className="h-full w-full bg-gray-600 rounded-lg text-gray-100">
          <Header.Root>
            <Header.Nav />
          </Header.Root>
          {children}
        </main>
      </body>
    </html>
  );
}
