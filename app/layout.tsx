import type { Metadata } from "next";
import "./global.css";



export const metadata: Metadata = {
  title: "RHJ",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="bg-neutral-300"
      >
        {children}
      </body>
    </html>
  );
}
