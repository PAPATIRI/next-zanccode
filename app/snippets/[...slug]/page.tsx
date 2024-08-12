import { snippets } from "#site/content";
import { MDXContent } from "@/components/mdx-component";
import { Writer } from "@/components/writer";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { DM_Serif_Display } from "next/font/google";
import { notFound } from "next/navigation";

const serifDisplay = DM_Serif_Display({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-serif",
});

interface SnippetDetailPageProps {
    params: {
        slug: String[]
    }
}

async function getSnippetFromParams(params: SnippetDetailPageProps["params"]) {
    const slug = params?.slug?.join("/");
    const post = snippets.find((snippet) => snippet.slugAsParams === slug);

    return post;
}

export async function generateStaticParams(): Promise<
    SnippetDetailPageProps["params"][]
> {
    return snippets.map((snippet) => ({ slug: snippet.slugAsParams.split("/") }));
}

export async function generateMetadata({
    params,
}: SnippetDetailPageProps): Promise<Metadata> {
    const post = await getSnippetFromParams(params);

    if (!post) {
        return {};
    }

    const ogSearchParams = new URLSearchParams();
    ogSearchParams.set("title", post.title);

    return {
        title: post.title,
        description: post.description,
        authors: { name: siteConfig.author },
        openGraph: {
            title: post.title,
            description: post.description,
            type: "article",
            url: "post.slug",
            images: [
                {
                    url: `/api/og?${ogSearchParams.toString()}`,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.description,
            images: [`/api/og?${ogSearchParams.toString()}`],
        },
    };
}

export default async function SnippetDetailPage({ params }: SnippetDetailPageProps) {
    const snippet = await getSnippetFromParams(params)

    if (!snippet || !snippet.published) {
        notFound();
    }

    return (
        <article className="container py-6 prose dark:prose-invert max-w-3xl mx-auto">
            <h1
                className={cn("mb-8 font-serif tracking-wider", serifDisplay.variable)}
            >
                {snippet.title}
            </h1>
            <MDXContent code={snippet.body} />
        </article >
    )
}
