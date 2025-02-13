import "./globals.css";
import { Inter } from "next/font/google";
import type React from "react"; // Import React

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fantasy - K-pop Dance Group",
  description:
    "Official website of Fantasy, a dynamic K-pop dance group known for electrifying performances and precise choreography.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
