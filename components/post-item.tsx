import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { Tag } from "./tag";

interface PostItemProps {
  slug: string;
  title: string;
  description?: string;
  date: string;
  tags?: Array<string>;
}

export function PostItem({
  title,
  slug,
  description,
  date,
  tags,
}: PostItemProps) {
  return (
    <article className="relative p-[2px] flex items-center justify-center before:block rounded-lg before:absolute before:z-0 before:hover:animate-rotate-border before:h-[800px] before:w-[800px] before:-top-40 before:-left-40 before:hover:bg-gradient-to-bl before:hover:from-blue-500 before:hover:to-red-500 before:-inset-0 overflow-hidden before:transition-all before:duration-500 group">
      <div className="relative z-10 p-6 bg-white dark:bg-slate-950 rounded-md w-full">
        <h2 className="mb-1 text-md md:text-xl capitalize text-transparent bg-slate-700 dark:bg-slate-200/90 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:via-purple-500 group-hover:to-red-500 bg-400% animate-left-to-right bg-clip-text">
          <Link href={"/" + slug} className="line-clamp-2 ">
            {title}
          </Link>
        </h2>
        <p className="max-w-none mb-6 text-muted-foreground line-clamp-2">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {tags?.map((tag) => (
              <Tag tag={tag} key={tag} />
            ))}
          </div>
          <dl>
            <dt className="sr-only">Published On</dt>
            <dd className="text-sm text-muted-foreground font-medium flex items-center gap-1">
              <time dateTime="date">{formatDate(date)}</time>
            </dd>
          </dl>
        </div>
      </div>
    </article>
  );
}
