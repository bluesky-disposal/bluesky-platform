"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ImageWithFallbackProps
  extends Omit<ImageProps, "src" | "alt"> {
  src: string;
  alt: string;
  fallbackSrc?: string;
  className?: string;
}

export function ImageWithFallback({
  src,
  alt,
  fallbackSrc = "/images/placeholder.png",
  className,
  ...props
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <div className={cn("relative w-full h-full", className)}>
      <Image
        {...props}
        src={imgSrc}
        alt={alt}
        fill
        sizes="(max-width: 768px) 96px, 112px"
        className="object-cover"
        onError={() => setImgSrc(fallbackSrc)}
      />
    </div>
  );
}

export default ImageWithFallback;
