import { posts } from "#site/content";
import { PostItem } from "@/components/post-item";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn, getAllSeries, getPostBySeriesSlug, sortAllSeriesByDate } from "@/lib/utils";
import { slug } from "github-slugger";
import { Metadata } from "next";
import { DM_Serif_Display } from "next/font/google";
import Link from "next/link";

const serifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
});

interface SeriesPageProps {
  params: {
    series: string;
  };
}

export async function generateMetadata({ params }: SeriesPageProps): Promise<Metadata> {
  const { series } = params;

  return {
    title: series,
    description: `Posts on the topic of ${series}`
  }
}

export const generateStaticParams = () => {
  const seriesList = getAllSeries(posts);
  const paths = Object.keys(seriesList).map((seriesItem) => ({ series: slug(seriesItem) }))
  return paths;
}


export default function SeriesPage({ params }: SeriesPageProps) {
  const { series } = params;
  const title = series.split("-").join(" ");

  const displayPost = getPostBySeriesSlug(posts, series)
  const sortedSeries = sortAllSeriesByDate(posts);

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="mb-10 md:mb-20 py-4 px-4 rounded border-l-4 border-slate-400">
        <h1
          className={cn(
            "capitalize inline-block text-slate-600 dark:text-slate-300 text-xl lg:text-3xl tracking-wider",
            serifDisplay.variable
          )}
        >{title}</h1>
      </div>
      <div className="grid grid-cols-12 gap-8 mt-8">
        <div className="col-span-12 col-start-1 sm:col-span-8 mr-0 sm:mr-6">
          {
            displayPost?.length > 0 ? (
              <ul className="flex flex-col gap-6">
                {
                  displayPost.map((post) => {
                    const { title, slug, tags, description, date } = post;
                    return (
                      <li key={slug}>
                        <PostItem slug={slug} date={date} title={title} tags={tags} description={description} />
                      </li>
                    )
                  })
                }
              </ul>
            ) : (
              <p>nothing to see here yet</p>
            )
          }
        </div>
        <div className="col-span-12 row-start-3 h-fit sm:col-span-4 ml-0 sm:ml-6 sm:col-start-9 sm:row-start-1">
          <p className="text-slate-600 dark:text-slate-300 text-xl font-light capitalize mb-4">daftar series</p>
          <div className="flex flex-col gap-6">
            {
              sortedSeries?.map((seriesItem) => (
                <div key={seriesItem.name}>
                  <Link href={`/collections/series/${slug(seriesItem.name)}`} className="text-slate-600 dark:text-slate-300 mb-1">{seriesItem.name}</Link>
                  <p className="text-sm text-muted-foreground">{seriesItem.count} post</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}
