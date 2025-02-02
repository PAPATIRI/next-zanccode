import { snippets } from "#site/content";
import { QueryPagination } from "@/components/query-pagination";
import { SnippetItem } from "@/components/snippet-item";
import { cn, sortPosts } from "@/lib/utils";
import { Metadata } from "next";
import { DM_Serif_Display } from "next/font/google";

const serifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "zanccode | snippets",
  description: "some snippet of codes that I often forget about",
};

const POST_PER_PAGE = 6;
interface SnippetPageProps {
  searchParams: {
    page?: string;
  };
}

export default function SnippetPage({ searchParams }: SnippetPageProps) {
  const currentPage = Number(searchParams?.page) || 1;
  const sortedPosts = sortPosts(
    snippets.filter((snippet) => snippet.published)
  );
  const totalPages = Math.ceil(sortedPosts.length / POST_PER_PAGE);

  const displayPosts = sortedPosts.slice(
    POST_PER_PAGE * (currentPage - 1),
    POST_PER_PAGE * currentPage
  );

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="mb-10 md:mb-20 flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1
            className={cn(
              "inline-block font-serif text-4xl lg:text-5xl tracking-wider",
              serifDisplay.variable
            )}
          >
            Snippets.
          </h1>
        </div>
      </div>
      {displayPosts?.length > 0 ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {displayPosts.map((post) => {
            const { title, slug, description, date } = post;
            return (
              <li key={slug}>
                <SnippetItem
                  slug={slug}
                  title={title}
                  description={description}
                  date={date}
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
  );
}
