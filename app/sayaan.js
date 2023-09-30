"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap/dist/gsap";
import { faChevronDown, faCircle } from "@fortawesome/free-solid-svg-icons";
import {
    faFacebookF,
    faInstagram,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sayaan = () => {
    const obj = [
        {
            Title: "RAZER MAMBA PRO",
            para: "World first automated full control mice developed in 2016, Special for gaming.",
            image: "Carousel/Mouse",
        },
        {
            Title: "SteelSeries Apex Pro Keyboard",
            para: "Cutting-edge customizable gaming keyboard released in 2019, tailored for competitive gamers.",
            image: "Carousel/Keyboard",
        },
        {
            Title: "Xbox Elite Series 2 Controller",
            para: " Next-generation gaming controller, released in 2019, designed to elevate your gaming experience with customizable features and superior build quality. Perfect for competitive gaming and enthusiasts.",
            image: "Carousel/Controller",
        },
    ];
    const [title, setTitle] = useState("RAZER MAMBA PRO");
    const [des, setDes] = useState(
        "World first automated full control mice developed in 2016, Special for gaming."
    );
    const [img, setImg] = useState("mouse_razer");
    const [activeCircle, setActiveCircle] = useState(0);
    const root = useRef();

    useEffect(() => {
        let i = 0;

        const tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });

        tl.fromTo(
            ".box",
            { delay: "0.1", duration: "1", opacity: 0, x: 300 },
            { delay: "0.1", duration: "1", opacity: 1, x: 0 }
        );
        tl.fromTo(
            ".box",
            { delay: "10", duration: "1", opacity: 1, x: 0 },
            {
                delay: "10",
                duration: "1",
                opacity: 0,
                x: -300,
                onComplete: async () => {
                    i = i + 1;
                    if (i > 2) i = 0;
                    await setTitle(obj[i].Title);
                    await setDes(obj[i].para);
                    await setImg(obj[i].image);

                    setActiveCircle(i);
                },
            }
        );

        // To prevent memory leaks, clean up the animation when the component unmounts
        return () => tl.kill();
    }, []);

    return (
        <div className="bg-hero-pattern h-[100vh] w-full flex flex-col justify-center items-center overflow-hidden">
            <section
                id="hero"
                className="bg-transparent bg-cover bg-no-repeat lg:pt-20 lg:pb-10 h-fit py-10 w-full flex justify-center items-center"
                ref={root}
            >
                <div className=" box grid max-w-screen-xl px-4 py-8 md:py-16 mx-auto lg:gap-8 xl:gap-0 lg:py-10 lg:grid-cols-12">
                    <div className="col-span-full mr-auto place-self-center h-[220px] py-0 lg:col-span-7">
                        <h1 className="max-w-[450px] mb-4 text-4xl font-semi bold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
                            {title}
                        </h1>
                        <p className="max-w-[450px] mb-6 font-light text-grey lg:mb-6 md:text-lg lg:text-lg">
                            {des}
                        </p>
                        <a
                            href="#"
                            className="items-center justify-center px-6 py-2 mb-6 text-base font-semibold text-center relative rounded-sm text-white bg-green focus:ring-4 focus:ring-gray-100 cursor-pointer"
                        >
                            View More
                        </a>
                    </div>
                    <div className="col-span-full max-w-[450px] lg:mt-0 lg:col-span-5 lg:flex filter drop-shadow-3xl">
                        <img src={`./${img}.png`} alt="mockup" />
                    </div>
                </div>
            </section>
            <div className="flex flex-row justify-between items-center h-10 px-10 lg:px-32 lg:pt-10 pb-10 max-w-screen-xl w-full">
                <div id="circles" className="flex flex-row justify-center items-center gap-1 text-grey">
                    {[0, 1, 2].map((index) => (
                        <FontAwesomeIcon
                            key={index}
                            icon={faCircle}
                            size="xs"
                            className={activeCircle === index ? "text-green" : "text-grey"}
                        />
                    ))}
                </div>
                <div className="flex justify-center items-center border border-grey/20 w-[28px] aspect-square text-grey">
                    <FontAwesomeIcon icon={faChevronDown} />
                </div>
                <div className="flex flex-row justify-center items-center gap-2 text-grey">
                    <FontAwesomeIcon icon={faFacebookF} />
                    <FontAwesomeIcon icon={faInstagram} />
                    <FontAwesomeIcon icon={faTwitter} />
                </div>
            </div>
        </div>
    );
};

export default Sayaan;
