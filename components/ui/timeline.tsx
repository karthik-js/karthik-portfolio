"use client";
import { motion, useScroll, useTransform } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      setHeight(el.offsetHeight);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full font-sans" ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-16 md:gap-6"
          >
            <div className="flex flex-col md:flex-row z-40 items-center self-start md:w-40 shrink-0">
              {/* Circle dot — centered at left-8 (32px) to align with beam */}
              <div className="h-10 absolute left-3 w-10 rounded-full bg-background flex items-center justify-center">
                <div className="h-4 w-4 rounded-full border-2 border-primary bg-background" />
              </div>
              <h3 className="hidden md:block text-sm md:pl-20 font-semibold text-muted-foreground uppercase tracking-wider">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-0 w-full">
              <h3 className="md:hidden block text-sm mb-4 text-left font-semibold text-muted-foreground uppercase tracking-wider">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}

        {/* Beam line at left-8 (32px) — same center as dot */}
        <div
          style={{ height: height + "px" }}
          className="absolute left-8 top-0 overflow-hidden w-[2px] bg-border/40 mask-[linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-linear-to-b from-transparent via-primary to-primary rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
