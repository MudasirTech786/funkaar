// components/LazyVideo.tsx
'use client';
import { useEffect, useRef, useState } from 'react';

const LazyVideo = ({
  src,
  poster,
  className,
  ...props
}: {
  src: string;
  poster?: string;
  className?: string;
  [key: string]: any;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div ref={ref} style={{ width: '100%', height: '100%' }}>
      {isVisible && (
        <video
          loop
          muted
          autoPlay
          playsInline
          poster={poster}
          className={className}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          {...props}
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
    </div>
  );
};

export default LazyVideo;
