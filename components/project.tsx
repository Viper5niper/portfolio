"use client";

import { useRef, useState } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number] & {
  index: number;
};

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  gallery,
  index
}: ProjectProps) {
  const isEven = index % 2 === 0;
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () =>
    setCurrentIndex((prev) => (gallery && prev < gallery.length - 1 ? prev + 1 : 0));

  const handlePrev = () =>
    setCurrentIndex((prev) => (gallery && prev > 0 ? prev - 1 : gallery.length - 1));

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <>
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      onClick={() => setOpen(true)}
      className="group mb-3 sm:mb-8 last:mb-0 cursor-pointer"
    >
      <section className={`bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden relative sm:h-[20rem] transition
        hover:bg-gray-200 dark:text-white dark:bg-white/10 dark:hover:bg-white/20
        ${isEven ? "sm:pl-8" : "sm:pr-8"}`}>
        <div className={`pt-4 pb-7 px-5 sm:pt-10 sm:max-w-[50%] flex flex-col h-full
          ${!isEven ? "sm:ml-[20rem]" : "sm:mr-[18rem]"}`}>
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className={`absolute hidden sm:block top-8 w-[28.25rem] rounded-t-lg shadow-2xl transition
          group-hover:scale-[1.04] group-hover:translate-y-3
          ${isEven
            ? "-right-40 group-hover:-translate-x-3 group-hover:-rotate-2"
            : "-left-40 group-hover:translate-x-3 group-hover:rotate-2"}`}
        />
      </section>
    </motion.div>
    {/* Lightbox Modal */}
          <AnimatePresence>
            {open && gallery && (
              <motion.div
                className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* background click closes */}
                <div className="absolute inset-0" onClick={() => setOpen(false)} />

                <motion.div
                  className="relative flex flex-col items-center justify-center"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Close button */}
                  <button
                    onClick={() => setOpen(false)}
                    className="absolute -top-10 right-0 text-white bg-black/60 rounded-full px-3 py-1"
                  >
                    ✕
                  </button>

                  {/* Single Image */}
                  <div className="relative w-[90vw] max-w-[900px] h-[70vh]">
                    <Image
                      src={gallery[currentIndex]}
                      alt={`${title} screenshot ${currentIndex + 1}`}
                      fill
                      className="rounded-lg shadow-2xl object-contain"
                    />
                  </div>

                  {/* Controls */}
                  <div className="flex justify-between w-full mt-4">
                    <button
                      onClick={handlePrev}
                      className="px-4 py-2 bg-white/80 dark:bg-neutral-800 rounded-lg shadow"
                    >
                      ◀ Prev
                    </button>
                    <button
                      onClick={handleNext}
                      className="px-4 py-2 bg-white/80 dark:bg-neutral-800 rounded-lg shadow"
                    >
                      Next ▶
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
    </>
  );
}
