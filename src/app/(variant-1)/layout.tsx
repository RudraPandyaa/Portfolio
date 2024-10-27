import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/providers";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
const Footer = dynamic(() => import("@/components/modules/Footer/Footer"));
const NavigationBar = dynamic(
  () => import("@/components/modules/Navbar/Navbar")
);

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning={true}>
      <body
        className={cn(
          "bg-page-gradient relative  antialiased dark:bg-page-gradient dark",
          poppins.className
        )}
      >
        <NavigationBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
