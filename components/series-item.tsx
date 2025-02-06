import { formatDate } from "@/lib/utils";
import { slug } from "github-slugger";
import { Book, Calendar, NotebookPen } from "lucide-react";
import Link from "next/link";

interface SeriesItemProps {
  name: string;
  date: string;
  count: number
}

export function SeriesItem({ name, date, count }: SeriesItemProps) {
  return (
    <article className="mb-6">
      <Link href={"/collections/series/" + slug(name)} className="text-lg font-medium text-slate-600 dark:text-slate-300 capitalize mb-4" >{name}</Link>
      <div className="mt-4">
        <div className="flex items-center gap-2 mb-2">
          <NotebookPen size={20} className="text-muted-foreground" />
          <p className="text-base text-muted-foreground">{count} posts</p>
        </div>
        <div className="flex items-center gap-2 mb-2">
          <Calendar size={20} className="text-muted-foreground" />
          <p className="text-base text-muted-foreground">{formatDate(date)}</p>
        </div>
      </div>
    </article>
  )
}


