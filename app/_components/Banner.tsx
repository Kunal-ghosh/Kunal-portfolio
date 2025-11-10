'use client';
import ArrowAnimation from '@/components/ArrowAnimation';
import Button from '@/components/Button';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';
import Script from 'next/script';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Banner = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);

    // move the content a little up on scroll
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 70%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.fromTo(
                '.slide-up-and-fade',
                { y: 0 },
                { y: -150, opacity: 0, stagger: 0.02 },
            );
        },
        { scope: containerRef },
    );

    return (
        <section className="relative overflow-hidden" id="banner">
            <ArrowAnimation />
            {/* Particle canvas mount point */}
            <div
                id="container"
                className="absolute top-0 left-0 w-full h-full"
                style={{
                    // filter: 'blur(2.5px)',
                    // WebkitFilter: 'blur(3.0px)  saturate(1.1)' ,
                    pointerEvents: 'none', 
                    filter: 'blur(4.5px) saturate(1.25) brightness(1.18) contrast(2.12) hue-rotate(-18deg)',
                    WebkitFilter: 'blur(3.0px) saturate(1.1) brightness(1.1) hue-rotate(-18deg)', 
                    // Ensures background remains non-interactive
                }}
            ></div>
            <div
                className="container h-[100svh] min-h-[530px] max-md:pb-10 flex justify-between items-center max-md:flex-col"
                ref={containerRef}
            >
                <div className="max-md:grow max-md:flex flex-col justify-center items-start max-w-[544px]">
                    <h1 className="banner-title slide-up-and-fade leading-[.95] text-6xl sm:text-[80px] font-anton">
                        <span className="text-primary">FULLSTACK</span>
                        <br /> <span className="ml-4">DEVELOPER & ENGINEER</span>
                    </h1>
                    <p className="banner-description slide-up-and-fade mt-6 text-lg text-muted-foreground">
                        Hi! I&apos;m{' '}
                        <span className="font-medium text-foreground">
                            Kunal
                        </span>
                        . A creative Fullstack Developer & Engineer with 1.5+ years of
                        experience in building high-performance, scalable, and
                        responsive web solutions.
                    </p>
                    <Button
                        as="link"
                        target="_blank"
                        rel="noopener noreferrer"
                        href='https://docs.google.com/document/d/1rvFpgnIakjrBACGsVyyvElvmEFAd953Wh6yVFvEQyVk/export?format=pdf'
                        variant="primary"
                        className="mt-9 banner-button slide-up-and-fade rounded-[14px]"
                    >
                        Download resume
                    </Button>
                </div>

                <div className="md:absolute bottom-[10%] right-[4%] flex md:flex-col gap-4 md:gap-8 text-center md:text-right">
                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            1.5+
                        </h5>
                        <p className="text-muted-foreground">
                            Years of Experience
                        </p>
                    </div>
                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            7+
                        </h5>
                        <p className="text-muted-foreground">
                            Completed Projects
                        </p>
                    </div>
                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            Many
                        </h5>
                        <p className="text-muted-foreground">Hours Worked</p>
                    </div>
                </div>
            </div>
            {/* Load particle effect script client-side */}
            <Script src="/particle.js" type="module" strategy="afterInteractive" />
        </section>
    );
};

export default Banner;
