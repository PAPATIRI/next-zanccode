"use client";

import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { Icons } from "./icons";
import { siteConfig } from "@/config/site";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="w-10 px-0 sm:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Theme</span>
        </Button>
      </SheetTrigger>
      <SheetContent side={"right"}>
        <SheetTitle>
          <MobileLink
            href={"/"}
            className="flex items-center"
            onOpenChange={setOpen}
          >
            <span className="font-bold text-2xl">{siteConfig.name}</span>
          </MobileLink>
        </SheetTitle>
        <SheetDescription>
          <VisuallyHidden>mobile navbar</VisuallyHidden>
        </SheetDescription>
        <div className="flex flex-col gap-3 mt-5">
          <MobileLink href={"/blog"} onOpenChange={setOpen}>
            Blog
          </MobileLink>
          <MobileLink href={"/tags"} onOpenChange={setOpen}>
            Tags
          </MobileLink>
          <MobileLink href={"/about"} onOpenChange={setOpen}>
            About
          </MobileLink>
          <hr className="my-5" />
          <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
            github
          </Link>
          <Link
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noreferrer"
          >
            twitter
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}

interface MobileLinkProps extends LinkProps {
  children: React.ReactNode;
  onOpenChange?: (open: boolean) => void;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  children,
  className,
  ...props
}: MobileLinkProps) {
  const router = useRouter();

  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
}
