'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutMe = () => {
    const container = React.useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-in',
                    trigger: container.current,
                    start: 'top 70%',
                    end: 'bottom bottom',
                    scrub: 0.5,
                },
            });

            tl.from('.slide-up-and-fade', {
                y: 150,
                opacity: 0,
                stagger: 0.05,
            });
        },
        { scope: container },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-out',
                    trigger: container.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 0.5,
                },
            });

            tl.to('.slide-up-and-fade', {
                y: -150,
                opacity: 0,
                stagger: 0.02,
            });
        },
        { scope: container },
    );

    return (
        <section className="pb-section" id="about-me">
            <div
                className="container"
                ref={container}
                style={{ position: 'relative', zIndex: 1000 }}
            >
                <h2 className="text-4xl md:text-6xl font-thin mb-20 slide-up-and-fade">
                    I believe in a user centered design approach, ensuring that
                    every project I work on is tailored to meet the specific
                    needs of its users.
                </h2>

                <p className="pb-3 border-b text-muted-foreground slide-up-and-fade">
                    This is me.
                </p>

                <div className="grid md:grid-cols-12 mt-9">
                    <div className="md:col-span-5">
                        <p className="text-5xl slide-up-and-fade">
                            Hi, I&apos;m Kunal.
                        </p>
                    </div>
                    <div className="md:col-span-12 flex flex-col">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 slide-up-and-fade">
                            <img
                                src="/logo/me1.png"
                                alt="Kunal"
                                width={300}
                                height={300}
                                className="w-[200px] md:w-[300px] h-auto rounded-xl object-contain slide-up-and-fade"
                            />
                            <div className="text-lg text-muted-foreground max-w-[550px]">
                                <p className="slide-up-and-fade">
                                    I&apos;m a full-stack developer with a strong focus on scalable frontend experiences. I transform ideas into intuitive, high-performance interfaces backed by reliable architectures. With hands-on experience in React, Node.js, AWS, Kafka, and event-driven systems, I build seamless, responsive products that balance user experience with technical depth.
                                </p>
                                <p className="mt-3 slide-up-and-fade">
                                    My approach is centered on building robust, scalable systems that solve real business problems while ensuring seamless user experiences. I focus on designing efficient architectures, optimizing performance, and delivering reliable services using modern technologies. With hands-on experience in distributed, event-driven systems and cloud-native development, I strive to create solutions that are maintainable, secure, and built for long-term growth—ultimately driving measurable impact for users and organizations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
