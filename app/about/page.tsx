import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "Information About This Handsome Man",
};

export default async function AboutPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="mb-10 md:mb-20 flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-x-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">
            About Me
          </h1>
        </div>
      </div>
      {/* <hr className="my-8" /> */}
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="min-w-48 max-w-48 flex flex-col gap-2">
          <Avatar className="h-48 w-48">
            <AvatarImage src="/avatar.png" alt={siteConfig.author} />
            <AvatarFallback>zancc</AvatarFallback>
          </Avatar>
          <h2 className="text-2xl font-bold text-center break-words">
            {siteConfig.author}
          </h2>
          <p className="text-muted-foreground text-center break-words">
            Programmer Ganteng & Intelek
          </p>
        </div>
        <div>
          <p className="text-muted-foreground text-base py-2">
            seorang pria tampan kelahiran pedalaman Kalimantan Barat. dengan
            nama syarif taufik hidayatulloh (nama menurut akta kelahiran), yang
            berarti kurang lebih &quot;petunjuk atau hidayah dari Allah yang
            mulia&quot; dayummmmmm so gewd my name, thnx ayahanda dan ibunda
            koeh.
          </p>
          <p className="text-muted-foreground text-base py-2">
            senang menyesatkan diri belajar hal baru di dunia programming atau
            software development. membangun banyak side project tapi tidak di
            selesaikan. detective conan fans meskipun masih belum lanjut
            marathon sejak di episode 1033. ini website personal blog ke 4 saya.
            website personal blog pertama dibangun dengan wordpress, kemudian
            yang ke dua dibangun dengan nextjs 10, kemudian yang ke tiga
            dibangun dengan laravel, dan website personal blog terbaru ini
            dibangun dengan nextjs 14
          </p>
        </div>
      </div>
    </div>
  );
}
