import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { GlobeIcon, Instagram, Twitter } from "lucide-react";
import { Metadata } from "next";
import { DM_Serif_Display } from "next/font/google";

const serifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "zanccode | about",
  description: "Information About This Handsome Man",
};

export default async function AboutPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="mb-10 md:mb-20 flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-x-4">
          <h1
            className={cn(
              "inline-block font-serif text-4xl lg:text-5xl tracking-wider",
              serifDisplay.variable,
            )}
          >
            About Me.
          </h1>
        </div>
      </div>
      {/* <hr className="my-8" /> */}
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="min-w-48 max-w-48 flex flex-col gap-2">
          <Avatar className="h-36 w-36 mx-auto">
            <AvatarImage src="/avatar.png" alt={siteConfig.author} />
            <AvatarFallback>zancc</AvatarFallback>
          </Avatar>
          <h2 className="text-2xl font-bold text-center break-words">
            {siteConfig.author}
          </h2>
          <p className="text-muted-foreground text-center break-words">
            Programmer Ganteng & Intelek
          </p>
          <div className="mt-8 flex items-center mx-auto gap-2">
            <a
              href={siteConfig.links.twitter}
              className="group bg-accent p-3 rounded-full flex items-center justify-center"
              target="_blank"
              rel="noreferrer"
            >
              <Twitter
                size={28}
                className="text-foreground transition-all duration-500 group-hover:rotate-45"
              />
            </a>
            <a
              href={siteConfig.links.instagram}
              target="_blank"
              className="group bg-accent p-3 rounded-full flex items-center justify-center"
              rel="noreferrer"
            >
              <Instagram
                size={28}
                className="text-foreground transition-all duration-500 group-hover:rotate-45"
              />
            </a>
            <a
              href={siteConfig.links.personalSite}
              target="_blank"
              className="group bg-accent p-3 rounded-full flex items-center justify-center"
              rel="noreferrer"
            >
              <GlobeIcon
                size={28}
                className="text-foreground transition-all duration-500 group-hover:rotate-45"
              />
            </a>
          </div>
        </div>
        <div>
          <p className="text-muted-foreground text-base py-2">
            seorang pria tampan kelahiran pedalaman Kalimantan Barat. dengan
            nama syarif taufik hidayatulloh (nama menurut akta kelahiran), yang
            berarti kurang lebih &quot;petunjuk atau hidayah dari Allah yang
            mulia&quot; dayummmmmm so gewd my name, thnx ayahanda dan ibunda
            koeh.
          </p>
          <p className="text-muted-foreground text-base py-2">blog ini saya dedikasikan untuk diri saya sendiri tentunya. seperti kata para ulama yang berbunyi <b>&quot;ilmu itu ibarat binatang buruan, dan tulisan adalah tali pengikatnya. maka ikatlah binatang buruan tersebut dengan tali yang kuat dan kokoh</b>. sehingga kedepannya saya harap tulisan tulisan saya dapat bermanfaat untuk diri saya sendiri sebagai pengikat terhadap ilmu-ilmu yang saya pelajari dan menjadi pengingat pastinya karena manusia tempatnya lupa.</p>
          <p className="text-muted-foreground text-base py-2">
            senang mengenal anda saudara/i ku, semoga kita bertemu di surga
            nanti 😎
          </p>
        </div>
      </div>
    </div>
  );
}
