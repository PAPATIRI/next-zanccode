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
            "text-xl md:text-3xl font-serif",
            serifDisplay.variable
          )}
        >
          {siteConfig.name}
        </span>
      </Link>
      <Link
        href="/blog"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block",
          pathName === "/blog" ? "text-foreground" : "text-foreground/60"
        )}
      >
        Blog
      </Link>
      <Link
        href="/snippets"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block",
          pathName === "/snippets" ? "text-foreground" : "text-foreground/60"
        )}
      >Snippets</Link>
      <Link
        href="/tags"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block",
          pathName === "/tags" ? "text-foreground" : "text-foreground/60"
        )}
      >
        Tags
      </Link>
      <Link
        href="/tools"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block",
          pathName === "/tools" ? "text-foreground" : "text-foreground/60"
        )}
      >
        Tools
      </Link>
      <Link
        href="/about"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block",
          pathName === "/about" ? "text-foreground" : "text-foreground/60"
        )}
      >
        About Me
      </Link>
    </nav>
  );
}
