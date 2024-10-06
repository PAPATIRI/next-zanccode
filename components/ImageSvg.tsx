import Image from "next/image";

type ImageSvgProps = {
  source: any,
  width?: number,
  height?: number,
}

export default function ImageSvg({ source, width = 64, height = 64 }: ImageSvgProps) {
  return (
    <div className="bg-secondary rounded-2xl w-[120px] h-[120px] flex items-center justify-center">
      <Image alt="svg icons" src={source} width={width} height={height} />
    </div>
  )
}
