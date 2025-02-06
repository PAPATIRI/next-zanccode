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
    <article className="group flex flex-col mb-8 md:mb-12 transition-all ease-in-out duration-500">
      <h2 className="text-md md:text-xl capitalize mb-1.5 font-sans font-medium text-slate-600 dark:text-slate-300 group-hover:underline group-hover:underline-offset-2">
        <Link href={"/" + slug} className="line-clamp-2">
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
    </article>
  );
}
