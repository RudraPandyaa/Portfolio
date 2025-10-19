import { ThemeProvider } from "@/components/providers";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Rudra",
    template: "%s | Rudra",
  },
  description: "My Portfolio",
  keywords: ["nextjs", "typescript", "tailwindcss"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          "bg-page-gradient relative  antialiased dark:bg-page-gradient dark",
          poppins.className
        )}
      >
        {children}
      </body>
    </html>
  );
}
