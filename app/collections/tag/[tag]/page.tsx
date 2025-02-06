import { cn, getAllTags, getPostByTagSlug, sortTagsByCount } from "@/lib/utils";
import { posts } from "#site/content";
import { PostItem } from "@/components/post-item";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tag } from "@/components/tag";
import { slug } from "github-slugger";
import { Metadata } from "next";
import { DM_Serif_Display } from "next/font/google";
import Link from "next/link";
import { badgeVariants } from "@/components/ui/badge";

const serifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
});

interface TagPageProps {
  params: {
    tag: string;
  };
}

export async function generateMetadata({
  params,
}: TagPageProps): Promise<Metadata> {
  const { tag } = params;

  return {
    title: tag,
    description: `Posts on the topic of ${tag}`,
  };
}

export const generateStaticParams = () => {
  const tags = getAllTags(posts);
  const paths = Object.keys(tags).map((tag) => ({ tag: slug(tag) }));
  return paths;
};

export default function TagPage({ params }: TagPageProps) {
  const { tag } = params;
  const title = tag.split("-").join(" ");

  const displayPosts = getPostByTagSlug(posts, tag);
  const tags = getAllTags(posts);
  const sortedTags = sortTagsByCount(tags);

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="mb-10 md:mb-20 py-4 px-4 rounded border-l-4 border-slate-400">
        <h1
          className="capitalize inline-block font-serif text-slate-600 dark:text-slate-300 text-xl lg:text-3xl tracking-wider" >
          #{title}
        </h1>
      </div>
      <div className="grid grid-cols-12 gap-4 mt-8">
        <div className="col-span-12 col-start-1 sm:col-span-8 mr-0 sm:mr-6">
          {displayPosts?.length > 0 ? (
            <ul className="flex flex-col gap-6">
              {displayPosts.map((post) => {
                const { title, slug, tags, description, date } = post;
                return (
                  <li key={slug}>
                    <PostItem
                      slug={slug}
                      date={date}
                      title={title}
                      tags={tags}
                      description={description}
                    />
                  </li>
                );
              })}
            </ul>
          ) : (
            <p>nothing to see here yet</p>
          )}
        </div>
        <div className="col-span-12 ml-0 sm:ml-6 row-start-3 h-fit sm:col-span-4 sm:col-start-9 sm:row-start-1">
          <p className="text-slate-600 dark:text-slate-300 capitalize text-xl font-light mb-4">Tags</p>
          <div className="flex flex-wrap gap-2">
            <Link
              href={`/blog`}
              className={badgeVariants({
                variant: tag === "" ? "default" : "secondary",
                className: "no-underline rounded-sm py-1 px-4",
              })}
            >
              All
            </Link>
            {sortedTags?.map((t) => (
              <Tag tag={t} key={t} count={tags[t]} current={slug(t) === tag} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
