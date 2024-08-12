import Image from "next/image";
import { siteConfig } from "@/config/site";
import { formatDate } from "@/lib/utils";
import { Tag } from "./tag";

interface WriterProps {
    writer?: string;
    date?: number | string;
    tags?: Array<string>;
}

export function Writer({ writer, date, tags }: WriterProps) {
    return (
        <div className="flex items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full overflow-hidden">
                    <Image
                        className="object-cover"
                        width={100}
                        height={100}
                        src="/avatar.png"
                        alt={siteConfig.author}
                    />
                </div>
                <div className="gap-0">
                    <p className="text-base m-0 p-0 mb-2 text-muted-foreground">
                        {writer}
                    </p>
                    <p className="text-sm m-0 p-0 text-muted-foreground">
                        {date && formatDate(date)}
                    </p>
                </div>
            </div>
            <div>
                <div className="flex items-center gap-2">
                    {tags && tags.map((tag) => <Tag tag={tag} key={tag} />)}
                </div>
            </div>
        </div>
    );
}
