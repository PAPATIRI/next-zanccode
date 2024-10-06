import Link from "next/link";

interface SnippetItemProps {
    slug: string;
    title: string;
    description?: string;
}

export function SnippetItem({
    title,
    slug,
}: SnippetItemProps) {
    return (
        <Link href={"/" + slug} className="group flex items-center justify-center bg-gradient-to-tr from-slate-100 dark:from-accent to-zinc-300 dark:to-muted/50 p-8 rounded-md transition-all duration-300 border border-transparent hover:border-accent-foreground/20">
            <h2 className="text-md md:text-lg font-sans text-center font-medium text-foreground line-clamp-2">
                {title}
            </h2>
        </Link>
    );
}
