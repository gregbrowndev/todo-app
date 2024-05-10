import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GraphqlProvider } from "@/contexts/graphql/provider";
import React from "react";
import Nav from "@/components/Nav";
import {twMerge} from "tailwind-merge";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "To Do App",
  description:
    "A To-Do app demonstrating a compact full-stack monolith architecture",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const isLoggedIn = false;
  return (
    <html lang="en" className="h-full bg-gray-100">
      <body className={twMerge(
          'h-full',
          inter.className
      )}>
        <GraphqlProvider>
            <div className="flex flex-col h-full">
                <Nav isLoggedIn={isLoggedIn}/>
                <main>
                    {children}
                </main>
            </div>
        </GraphqlProvider>
      </body>
    </html>
  );
}
