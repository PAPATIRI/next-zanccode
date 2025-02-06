import { cn, formatDate, getAllSeries, getAllTags, sortAllSeriesByDate, sortTagsByCount } from "@/lib/utils";
import { Metadata } from "next";
import { posts } from "#site/content";
import { Tag } from "@/components/tag";
import { DM_Serif_Display } from "next/font/google";
import Link from "next/link";
import { SeriesItem } from "@/components/series-item";

const serifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "zanccode | tags",
  description: "Topic I've Written About",
};
export default async function TagsPage() {
  const tags = getAllTags(posts);
  const sortedTags = sortTagsByCount(tags);

  const sortedSeries = sortAllSeriesByDate(posts)

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="mb-20">
        <h1
          className={cn(
            "mb-10 inline-block text-slate-600 dark:text-slate-300 font-serif text-4xl lg:text-5xl tracking-wider",
            serifDisplay.variable
          )}
        >
          Series.
        </h1>
        <div className="flex flex-col gap-4 mb-20">
          {sortedSeries?.map((series) => (
            <SeriesItem key={series.name} name={series.name} date={series.latestDate} count={series.count} />
          ))}
        </div>
      </div>
      <div className="mb-20">
        <h1
          className={cn(
            "text-slate-600 dark:text-slate-300 mb-10 inline-block font-serif text-4xl lg:text-5xl tracking-wider",
            serifDisplay.variable
          )}
        >
          Tags.
        </h1>
        <div className="flex flex-wrap gap-4">
          {sortedTags?.map((tag) => (
            <Tag tag={tag} key={tag} count={tags[tag]} />
          ))}
        </div>
      </div>
    </div>
  );
}
