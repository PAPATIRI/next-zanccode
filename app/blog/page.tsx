import { posts } from "#site/content";
import { PostItem } from "@/components/post-item";
import { QueryPagination } from "@/components/query-pagination";
import { Tag } from "@/components/tag";
import { badgeVariants } from "@/components/ui/badge";
import { cn, getAllTags, sortPosts, sortTagsByCount } from "@/lib/utils";
import { Metadata } from "next";
import { DM_Serif_Display } from "next/font/google";
import Link from "next/link";

const serifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "zanccode | blogs",
  description:
    "where i write all my problems down clearly so it is half solved",
};

const POST_PER_PAGE = 4;
interface BlogPageProps {
  searchParams: {
    page?: string;
  };
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const currentPage = Number(searchParams?.page) || 1;
  const sortedPosts = sortPosts(posts.filter((post) => post.published));
  const totalPages = Math.ceil(sortedPosts.length / POST_PER_PAGE);

  const displayPosts = sortedPosts.slice(
    POST_PER_PAGE * (currentPage - 1),
    POST_PER_PAGE * currentPage
  );

  const tags = getAllTags(posts);
  const sortedTags = sortTagsByCount(tags);

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="mb-10 md:mb-20 flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1
            className={cn(
              "inline-block text-slate-600 dark:text-slate-300 font-serif text-4xl lg:text-5xl tracking-wider",
              serifDisplay.variable
            )}
          >
            Blog.
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4 mt-8">
        <div className="mr-0 sm:mr-6 col-span-12 col-start-1 sm:col-span-8">
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
          {
            <QueryPagination
              totalPages={totalPages}
              className=" justify-end mt-8"
            />
          }
        </div>
        <div className="ml-0 sm:ml-6 col-span-12 row-start-3 h-fit sm:col-span-4 sm:col-start-9 sm:row-start-1">
          <div>
            <p className="text-xl font-light capitalize mb-4 text-slate-600 dark:text-slate-300">
              Tags
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link
              href={`/blog`}
              className={badgeVariants({
                variant: "default",
                className: "no-underline rounded-sm py-1 px-4",
              })}
            >
              All
            </Link>
            {sortedTags?.map((tag) => (
              <Tag tag={tag} key={tag} count={tags[tag]} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
