import { cn, sortPosts } from "@/lib/utils";
//@ts-ignore
import { posts, snippets } from "#site/content";
import Link from "next/link";
import { PostItem } from "@/components/post-item";
import { DM_Serif_Display } from "next/font/google";
import { ArrowRight } from "lucide-react";
import { SnippetItem } from "@/components/snippet-item";

const serifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
});

export default function Home() {
  const latesPost = sortPosts(posts.filter((post) => post.published)).slice(
    0,
    3
  );
  const latesSnippet = sortPosts(snippets).slice(0, 4);

  return (
    <>
      <section className="mx-auto max-w-4xl space-y-6 pb-6 pt-6 md:pb-10 md:mt-10 lg:py-24">
        <div className="container">
          <p
            style={{ lineHeight: "1.3em" }}
            className={cn(
              "mb-8 font-bold tracking-wide text-slate-600 dark:text-slate-300 text-3xl font-serif sm:text-5xl uppercase",
              serifDisplay.variable
            )}
          >
            This is my dear diary, i write all my problems down, so my problem
            is half solved, that&apos;s what saying says.
          </p>
          <Link
            href={"/blog"}
            className="group flex text-muted-foreground font-bold items-center gap-2 capitalize py-2 w-fit"
          >
            read my problems
            <ArrowRight
              size={24}
              className="transition-all duration-500 text-muted-foreground group-hover:ml-2"
            />
          </Link>
        </div>
      </section>
      <section className="container max-w-4xl py-6 lg:py-10 flex flex-col space-y-6 mt-20">
        <h2
          className={cn(
            "text-slate-600 dark:text-slate-300 text-3xl mb-5 md:mb-10 sm:text-4xl md:text-5xl lg:text-6xl text-center font-serif tracking-wider",
            serifDisplay.variable
          )}
        >
          Latest Posts
        </h2>
        <ul className="flex flex-col gap-6">
          {latesPost.map((post) => (
            <li key={post.slug}>
              <PostItem
                slug={post.slug}
                title={post.title}
                description={post.description}
                date={post.date}
                tags={post.tags}
              />
            </li>
          ))}
        </ul>
        <Link
          href={"/blog"}
          className="group self-center flex text-muted-foreground font-bold items-center gap-2 capitalize w-fit"
        >
          more
          <ArrowRight
            size={24}
            className="transition-all duration-500 text-muted-foreground group-hover:ml-2"
          />
        </Link>
      </section>
      <section className="container max-w-4xl py-6 lg:py-10 flex flex-col space-y-6 mt-20">
        <h2
          className={cn(
            "text-slate-600 dark:text-slate-300 text-3xl mb-5 md:mb-10 sm:text-4xl md:text-5xl lg:text-6xl text-center font-serif tracking-wider",
            serifDisplay.variable
          )}
        >
          Latest Snippets
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {latesSnippet.map((snippet) => (
            <li key={snippet.slug}>
              <SnippetItem
                slug={snippet.slug}
                date={snippet.date}
                title={snippet.title}
                description={snippet.description}
              />
            </li>
          ))}
        </ul>
        <Link
          href={"/snippets"}
          className="group self-center flex text-muted-foreground font-bold items-center gap-2 capitalize w-fit"
        >
          more
          <ArrowRight
            size={24}
            className="transition-all duration-500 text-muted-foreground group-hover:ml-2"
          />
        </Link>
      </section>
    </>
  );
}
