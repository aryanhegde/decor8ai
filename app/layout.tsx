import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

import "./globals.css";

// const inter = Poppins({ weight: "500", subsets: ["devanagari"] });

export const metadata: Metadata = {
  title: "Decor8Ai",
  description:
    "Decorate your place with Decor8Ai. This is a AI interior designer which creates amazing designs for your house ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.className}  
       `}
      >
        {children}
      </body>
    </html>
  );
}
