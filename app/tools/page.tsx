import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { DM_Serif_Display } from "next/font/google";
import ImageSvg from "@/components/ImageSvg";
import { LaravelSvg, NextJsSvg, NeovimSvg, VsCodeSvg, TailwindSvg, Bootstrap, ExpoGoSvg, ExpoSvg, ExpressJsSvg, FigmaSvg, GithubSvg, NodeJsSvg, PrismaSvg, SupabaseSvg, ViteSvg, WindowsTerminalSvg, XamppSvg, MysqlSvg, VueSvg, AndroidStudioSvg } from "@/public/svg";

const serifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "zanccode | tools",
  description:
    "a list of tools that i use for daily",
};

export default function ToolsPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="mb-10 md:mb-20 flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1
            className={cn(
              "inline-block font-serif text-4xl lg:text-5xl tracking-wider",
              serifDisplay.variable,
            )}
          >
            Tools.
          </h1>
        </div>
      </div>
      <div className="mt-8 flex gap-2 flex-wrap items-center justify-center">
        <ImageSvg source={LaravelSvg} />
        <ImageSvg source={MysqlSvg} />
        <ImageSvg source={NextJsSvg} />
        <ImageSvg source={VueSvg} />
        <ImageSvg source={NeovimSvg} />
        <ImageSvg source={VsCodeSvg} />
        <ImageSvg source={AndroidStudioSvg} />
        <ImageSvg source={TailwindSvg} />
        <ImageSvg source={Bootstrap} />
        <ImageSvg source={ExpoGoSvg} />
        <ImageSvg source={ExpoSvg} />
        <ImageSvg source={ExpressJsSvg} />
        <ImageSvg source={FigmaSvg} />
        <ImageSvg source={GithubSvg} />
        <ImageSvg source={NodeJsSvg} />
        <ImageSvg source={PrismaSvg} />
        <ImageSvg source={SupabaseSvg} />
        <ImageSvg source={ViteSvg} />
        <ImageSvg source={WindowsTerminalSvg} />
        <ImageSvg source={XamppSvg} />
      </div>
    </div>
  )
}
