import { formatDate } from "@/lib/utils";
import Link from "next/link";

interface SnippetItemProps {
  slug: string;
  title: string;
  description?: string;
  date?: string;
}

export function SnippetItem({ title, slug, date }: SnippetItemProps) {
  return (
    <Link
      href={"/" + slug}
      className="group flex flex-col dark:to-muted/50 p-6 rounded-md transition-all duration-300 border border-transparent hover:border-accent-foreground/20"
    >
      <h2 className="text-md md:text-xl mb-4 capitalize font-sans font-medium text-slate-600 dark:text-slate-300 line-clamp-2">
        {title}
      </h2>
      <dl>
        <dt className="sr-only">Published On</dt>
        <dd className="text-sm text-muted-foreground font-medium flex items-center gap-1">
          <time dateTime="date" className="text-muted-foreground">
            {date && formatDate(date)}
          </time>
        </dd>
      </dl>
    </Link>
  );
}
