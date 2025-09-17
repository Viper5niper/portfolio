"use client"

import {
    motion,
    MotionValue,
    useScroll,
    useSpring,
    useTransform,
} from "framer-motion"
import { useRef } from "react"
import { landscapesData } from "@/lib/data";

function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance])
}
type ProjectProps = (typeof landscapesData)[number];

function Image({
  title,
  url,
}: ProjectProps) {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref })
    const y = useParallax(scrollYProgress, 300)

    return (
        <section className="img-container">
            <div ref={ref}>
                <img
                    src={url.src}
                    alt={title}
                />
            </div>
            <motion.h2
                // Hide until scroll progress is measured
                initial={{ visibility: "hidden" }}
                animate={{ visibility: "visible" }}
                style={{ y }}
            >{title}</motion.h2>
        </section>
    )
}

export default function Parallax() {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })

    return (
        <motion.div
        id="parallax"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        >
             <p className="mb-3">
                Since you're intersted in the views, here's some landscapes I visit often!
            </p>
            {landscapesData.map(landscape => (
                <Image key={landscape.title} title={landscape.title} url={landscape.url} />
            ))}
            {/* <motion.div className="progress" style={{ scaleX }} /> */}
            <StyleSheet />
        </motion.div>
    )
}

/**
 * ==============   Styles   ================
 */

function StyleSheet() {
    return (
        <style>{`

        .img-container {
            height: auto;
            min-height: 400px;
            margin: 2rem 0;
            scroll-snap-align: start;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
        }

        .img-container > div {
            width: auto;
            min-height: 400px;
            margin: 0;
            background: #f5f5f5;
            overflow: hidden;
        }

        .img-container img {
            width: 900px;
            height: 400px;
            object-fit: cover;
        }

        @media (max-width: 500px) {
            .img-container > div {
                width: 150px;
                height: 200px;
            }

            .img-container img {
                width: 150px;
                height: 200px;
            }
        }

        .img-container h2 {
            color: #ffffffff;
            margin: 0;
            font-family: "Azeret Mono", monospace;
            font-size: 50px;
            font-weight: 700;
            letter-spacing: -3px;
            line-height: 1.2;
            position: absolute;
            display: inline-block;
            top: calc(10% - 25px);
            left: calc(10% + 120px);
        }
    `}</style>
    )
}