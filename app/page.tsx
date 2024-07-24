import { buttonVariants } from "@/components/ui/button";
import { cn, sortPosts } from "@/lib/utils";
import { posts } from "#site/content";
import Link from "next/link";
import { PostItem } from "@/components/post-item";

export default function Home() {
  const latesPost = sortPosts(posts).slice(0, 5);

  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:mt-10 lg:py-32">
        <div className="container flex flex-col gap-8 text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-balance">
            Hello, I&apos;m Syarif
          </h1>
          <p className="max-w-[42rem] mx-auto text-muted-foreground sm:text-xl text-balance">
            Welcome to my <q className="inline font-bold italic">dear diary</q>,
            where i write all my problems down clearly so it is half solved,
            that's what saying says
          </p>
          <div className="flex flex-col gap-4 justify-center sm:flex-row">
            <Link
              href={"/blog"}
              className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-fit")}
            >
              Read My Bacotan
            </Link>
          </div>
        </div>
      </section>
      <section className="container max-w-4xl py-6 lg:py-10 flex flex-col space-y-6 mt-52">
        <h2 className="text-3xl mb-5 md:mb-10 sm:text-5xl md:text-6xl lg:text-7xl font-black text-center">
          Latest Posts
        </h2>
        <ul className="flex flex-col">
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
      </section>
    </>
  );
}
