import type { Metadata } from "next";

import "./globals.css";
import { APP_DESCRIPTION, APP_NAME, APP_SLOGAN } from "@/lib/constants";
import localFont from 'next/font/local'



export const metadata: Metadata = {
  title: {
    template: `%s | ${APP_NAME}`,
    default: `${APP_NAME}. ${APP_SLOGAN}`,
  },
  description: APP_DESCRIPTION,
}

const myFont = localFont({ src: '../public/font/montserrat/MontserratAlternates-Medium.ttf' })

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body  className={myFont.className}>
        {children}
      </body>
    </html>
  );
}
