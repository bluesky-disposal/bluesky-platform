"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
}

function ImageWithFallback({
  src,
  alt,
  className,
  fallbackSrc = "/images/placeholder.png",
  ...props
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={cn(
        "transition-opacity duration-300",
        isLoading ? "opacity-0" : "opacity-100",
        className
      )}
      onLoad={() => setIsLoading(false)}
      onError={() => {
        setImgSrc(fallbackSrc);
        setIsLoading(false);
      }}
      {...props}
    />
  );
}

// Export as default (for: import ImageWithFallback from "...")
export default ImageWithFallback;

// Also export as named export (for: import { ImageWithFallback } from "...")
export { ImageWithFallback };
