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
    <article className="group flex flex-col gap-2 mb-10 md:mb-16 transition-all ease-in-out duration-500">
      <div className="mb-2">
        <h2 className="text-xl md:text-2xl font-sans font-medium text-primary group-hover:underline group-hover:underline-offset-2">
          <Link href={"/" + slug} className="line-clamp-2">
            {title}
          </Link>
        </h2>
      </div>
      <p className="max-w-none text-muted-foreground mb-1 line-clamp-3">
        {description}
      </p>
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          {tags?.map((tag) => <Tag tag={tag} key={tag} />)}
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
