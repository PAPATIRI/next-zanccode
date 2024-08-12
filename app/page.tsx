import { cn, sortPosts } from "@/lib/utils";
import { posts, snippets } from "#site/content";
import Link from "next/link";
import { PostItem } from "@/components/post-item";
import { DM_Serif_Display } from "next/font/google";
import { ArrowRightIcon } from "lucide-react";
import { SnippetItem } from "@/components/snippet-item";

const serifDisplay = DM_Serif_Display({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-serif",
});

export default function Home() {
    const latesPost = sortPosts(posts).slice(0, 3);
    const latesSnippet = sortPosts(snippets).slice(0, 4)

    return (
        <>
            <section className="mx-auto max-w-4xl space-y-6 pb-6 pt-6 md:pb-10 md:mt-10 lg:py-24">
                <div className="container">
                    <p
                        style={{ lineHeight: "1.2em" }}
                        className="mb-8 font-bold tracking-wide text-foreground text-3xl sm:text-5xl uppercase"
                    >
                        This is my dear diary, i write all my problems down, so my problem
                        is half solved, that&apos;s what saying says.
                    </p>
                    <Link
                        href={"/blog"}
                        className="group flex text-foreground font-bold items-center gap-2 uppercase py-2 w-fit"
                    >
                        read my problems
                        <ArrowRightIcon
                            size={24}
                            className="transition-all duration-500 text-foreground group-hover:ml-2"
                        />
                    </Link>
                </div>
            </section>
            <section className="container max-w-4xl py-6 lg:py-10 flex flex-col space-y-6 mt-20">
                <h2
                    className={cn(
                        "text-3xl mb-5 md:mb-10 sm:text-4xl md:text-5xl lg:text-6xl text-center font-serif tracking-wider",
                        serifDisplay.variable,
                    )}
                >
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
            <section className="container max-w-4xl py-6 lg:py-10 flex flex-col space-y-6 mt-20">
                <h2
                    className={cn(
                        "text-3xl mb-5 md:mb-10 sm:text-4xl md:text-5xl lg:text-6xl text-center font-serif tracking-wider",
                        serifDisplay.variable,
                    )}
                >
                    Latest Snippets
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {latesSnippet.map((snippet) => (
                        <li key={snippet.slug}>
                            <SnippetItem
                                slug={snippet.slug}
                                title={snippet.title}
                                description={snippet.description}
                            />
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
}
