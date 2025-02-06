"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { DM_Serif_Display } from "next/font/google";

const serifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
});

export function MainNav() {
  const pathName = usePathname();
  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <span
          className={cn(
            "text-xl text-slate-700 dark:text-slate-300 md:text-3xl font-serif",
            serifDisplay.variable
          )}
        >
          {siteConfig.name}
        </span>
      </Link>
      <Link
        href="/blog"
        className={cn(
          "text-base font-medium transition-colors hover:text-slate-700 dark:hover:text-slate-100 hidden sm:inline-block",
          pathName === "/blog" ? "text-slate-700 dark:text-slate-100" : "text-slate-700/70 dark:text-slate-200/70"
        )}
      >
        Blog
      </Link>
      <Link
        href="/snippets"
        className={cn(
          "text-base font-medium transition-colors hover:text-slate-700 dark:hover:text-slate-100 hidden sm:inline-block",
          pathName === "/snippets" ? "text-slate-700 dark:text-slate-100" : "text-slate-700/70 dark:text-slate-200/70"
        )}
      >Snippets</Link>
      <Link
        href="/collections"
        className={cn(
          "text-base font-medium transition-colors hover:text-slate-700 dark:hover:text-slate-100 hidden sm:inline-block",
          pathName === "/collections" ? "text-slate-700 dark:text-slate-100" : "text-slate-700/70 dark:text-slate-200/70"
        )}
      >
        Collections
      </Link>
      <Link
        href="/tools"
        className={cn(
          "text-base font-medium transition-colors hover:text-slate-700 dark:hover:text-slate-100 hidden sm:inline-block",
          pathName === "/tools" ? "text-slate-700 dark:text-slate-100" : "text-slate-700/70 dark:text-slate-200/70"
        )}
      >
        Tools
      </Link>
      <Link
        href="/about"
        className={cn(
          "text-base font-medium transition-colors hover:text-slate-700 dark:hover:text-slate-100 hidden sm:inline-block",
          pathName === "/about" ? "text-slate-700 dark:text-slate-100" : "text-slate-700/70 dark:text-slate-200/70"
        )}
      >
        About Me
      </Link>
    </nav>
  );
}
