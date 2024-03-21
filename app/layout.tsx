import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
const poppins = Poppins({ weight: "400", subsets: ["latin"] });
import { Toaster } from "react-hot-toast";
export const metadata: Metadata = {
  title: "E commerce",
  description: "a simple ecommerce application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
      <Toaster position="top-center" />
        {children}
        </body>
    </html>
  );
}
