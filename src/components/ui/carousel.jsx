import { HiArrowNarrowRight } from "react-icons/hi";
import { useState, useRef, useId, useEffect } from "react";

const Slide = ({
    slide,
    index,
    current,
    handleSlideClick
}) => {
    const slideRef = useRef(null);

    const xRef = useRef(0);
    const yRef = useRef(0);
    const frameRef = useRef();

    useEffect(() => {
        const animate = () => {
            if (!slideRef.current) return;

            const x = xRef.current;
            const y = yRef.current;

            slideRef.current.style.setProperty("--x", `${x}px`);
            slideRef.current.style.setProperty("--y", `${y}px`);

            frameRef.current = requestAnimationFrame(animate);
        };

        frameRef.current = requestAnimationFrame(animate);

        return () => {
            if (frameRef.current) {
                cancelAnimationFrame(frameRef.current);
            }
        };
    }, []);

    const handleMouseMove = (event) => {
        const el = slideRef.current;
        if (!el) return;

        const r = el.getBoundingClientRect();
        xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
        yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
    };

    const handleMouseLeave = () => {
        xRef.current = 0;
        yRef.current = 0;
    };

    const imageLoaded = (event) => {
        event.currentTarget.style.opacity = "1";
    };

    const { src, location, title, price } = slide;

    return (
        <div className="[perspective:1200px] [transform-style:preserve-3d]">
            <li
                ref={slideRef}
                className="flex flex-1 flex-col justify-end relative w-[70vmin] h-[70vmin] mx-[4vmin] z-10 cursor-pointer transition-all duration-300 ease-in-out"
                onClick={() => handleSlideClick(index)}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    transform:
                        current !== index
                            ? "scale(0.98) rotateX(8deg)"
                            : "scale(1) rotateX(0deg)",
                    transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                    transformOrigin: "bottom",
                }}
            >
                {/* Image */}
                <div
                    className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-lg shadow-lg transition-all duration-150 ease-out"
                    
                >
                    <img
                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-600 ease-in-out"
                        style={{ opacity: current === index ? 1 : 0.7 }}
                        alt={title}
                        src={src}
                        onLoad={imageLoaded}
                        loading="eager"
                        decoding="sync"
                    />
                    {current === index && (
                        <div className="absolute inset-0 bg-black/20 transition-all duration-1000" />
                    )}
                </div>

                {/* Overlay info */}
                <div
                    className={`relative w-full bg-white bg-opacity-90 backdrop-blur-md p-2 rounded-b-lg transition-opacity duration-500 ${current === index ? "opacity-100 visible" : "opacity-0 invisible"
                        }`}
                >
                    <h2 className="text-lg font-semibold hidden md:block text-gray-900">{title}</h2>
                    <p className="text-sm text-gray-700 mt-1">{location}</p>
                    <p className="text-sm text-gray-700 mt-1">{price}</p>




                </div>
            </li>
        </div>

    );
};

const CarouselControl = ({
    type,
    title,
    handleClick
}) => {
    return (
        <button
            className={`w-10 h-10 flex items-center mx-2 justify-center bg-neutral-200 dark:bg-neutral-800 border-3 border-transparent rounded-full focus:border-[#6D64F7] focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 ${type === "previous" ? "rotate-180" : ""
                }`}
            title={title}
            onClick={handleClick}>
            <HiArrowNarrowRight className="text-neutral-600 dark:text-neutral-200" />
        </button>
    );
};

export function Carousel({
    slides
}) {
    const [current, setCurrent] = useState(0);

    const handlePreviousClick = () => {
        const previous = current - 1;
        setCurrent(previous < 0 ? slides.length - 1 : previous);
    };

    const handleNextClick = () => {
        const next = current + 1;
        setCurrent(next === slides.length ? 0 : next);
    };

    const handleSlideClick = (index) => {
        if (current !== index) {
            setCurrent(index);
        }
    };

    const id = useId();

    return (
        <div
            className="relative w-[70vmin] h-[70vmin] mx-auto mb-10"
            aria-labelledby={`carousel-heading-${id}`}>
            <ul
                className="absolute flex mx-[-4vmin] transition-transform duration-1000 ease-in-out"
                style={{
                    transform: `translateX(-${current * (100 / slides.length)}%)`,
                }}>
                {slides.map((slide, index) => (
                    <Slide
                        key={index}
                        slide={slide}
                        index={index}
                        current={current}
                        handleSlideClick={handleSlideClick} />
                ))}
            </ul>
            <div className="absolute flex   justify-center w-full top-[calc(100%+1rem)]">
                <CarouselControl
                    type="previous"
                    title="Go to previous slide"
                    handleClick={handlePreviousClick} />

                <CarouselControl type="next" title="Go to next slide" handleClick={handleNextClick} />
            </div>
        </div>
    );
}
