import { ThemeProvider } from "@/components/providers";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Faizanahmed | v8",
    template: "%s | Faizanahmed-v8",
  },
  description: "V8 Of My Portfolio",
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
          "bg-page-gradient relative  antialiased dark:bg-page-gradient",
          poppins.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="px-[24%] flex justify-center items-center flex-col gap-4">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
