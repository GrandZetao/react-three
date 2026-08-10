import {useRef} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";
import {performanceImages, performanceImgPositions} from "../constants/index.js";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Performance() {
    const sectionRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(".content p", {
            autoAlpha: 0,
            y: 40,
        }, {
            autoAlpha: 1,
            y: 0,
            ease: "power1.out",
            scrollTrigger: {
                trigger: ".content p",
                start:"top bottom",
                end: "top center",
                scrub: true,
                invalidateOnRefresh: true,
            },
        });

        const media = gsap.matchMedia();

        media.add("(min-width: 1025px)", () => {
            const timeline = gsap.timeline({
                defaults: {ease: "none"},
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "center center",
                    scrub: 1,
                    invalidateOnRefresh: true,
                },
            });

            //* Desktop images share one scroll playhead; p5 remains fixed in the center.
            performanceImgPositions.filter(({id}) => id !== "p5").forEach(({
                id,
                left,
                right,
                bottom,
                transform,
            }) => {
                timeline.to(`.${id}`, {
                    ...(left !== undefined && {left: `${left}%`}),
                    ...(right !== undefined && {right: `${right}%`}),
                    bottom: `${bottom}%`,
                    ...(transform !== undefined && {transform}),
                }, 0);
            });
        });

        return () => media.revert();
    }, {scope: sectionRef});

    return (
        <section id="performance" ref={sectionRef}>
            <h2>Next-level graphics performance. Game on.</h2>

            <div className="wrapper">
                {performanceImages.map((image, index) => (
                    <img key={image.id}
                         src={image.src}
                         className={image.id}
                         alt={image.alt || `Performance Image #${index + 1}`}
                    />
                ))}
            </div>

            <div className="content">
                <p>
                    Run graphics-intensive workflows with a responsiveness that keeps up
                    with your imagination. The M4 family of chips features a GPU with a
                    second-generation hardware-accelerated ray tracing engine that renders
                    images faster, so{" "}
                    <span className="text-white">
            gaming feels more immersive and realistic than ever.
          </span>{" "}
                    And Dynamic Caching optimizes fast on-chip memory to dramatically
                    increase average GPU utilization — driving a huge performance boost
                    for the most demanding pro apps and games.
                </p>
            </div>
        </section>
    );
}

export default Performance;
