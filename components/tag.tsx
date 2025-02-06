import Link from "next/link";
import { slug } from "github-slugger";
import { badgeVariants } from "./ui/badge";

interface TagProps {
  tag: string;
  current?: boolean;
  count?: number;
}

export function Tag({ tag, current, count }: TagProps) {
  return (
    <Link
      href={`/collections/tag/${slug(tag)}`}
      className={badgeVariants({
        variant: current ? "default" : "secondary",
        className: "no-underline rounded-sm py-1 px-4",
      })}
    >
      {tag} {count ? `(${count})` : null}
    </Link>
  );
}
