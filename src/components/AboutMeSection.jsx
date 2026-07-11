export const AboutMeSection = () => {
    return (
        <section className="max-w-[1120px] mx-auto px-6 md:px-8 pt-24 md:pt-[96px] pb-20 grid grid-cols-1 lg:grid-cols-[1.55fr_1fr] gap-12 lg:gap-16 items-center">
            <div>
                {/* Availability status */}
                <div className="flex items-center gap-3.5 mb-7">
                    <span className="inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.04em] uppercase text-muted">
                        <span className="w-[7px] h-[7px] rounded-full bg-[#4ADE80] shadow-[0_0_0_3px_rgba(74,222,128,0.18)] animate-pulse"></span>
                        Available for work
                    </span>
                </div>

                {/* Subtitle */}
                <div className="font-mono text-[13px] tracking-[0.06em] uppercase text-accent mb-5.5">
                    Senior Full-Stack Developer — 8+ Years
                </div>

                {/* Main Heading */}
                <h1 className="font-display font-bold text-[clamp(40px,5.4vw,68px)] leading-[1.02] tracking-[-0.03em] text-text-primary mb-6.5">
                    Production systems that hold up in the real world.
                </h1>

                {/* Paragraph */}
                <p className="text-[18px] leading-[1.62] text-text-secondary max-w-[540px] mb-9.5">
                    I build production-ready platforms for government, logistics, and commercial products —{" "}
                    <span className="text-text-body font-medium">Laravel &amp; Django</span> backends with{" "}
                    <span className="text-text-body font-medium">React &amp; Vue</span> frontends. Clean architecture, real security, and scale that performs.
                </p>

                {/* Call to Action Buttons */}
                <div className="flex gap-3.5 flex-wrap">
                    <a
                        href="#work"
                        className="inline-flex items-center gap-2.5 px-6.5 py-3.5 bg-accent text-[#0A0A0B] font-semibold text-[15px] rounded-[10px] transition-all duration-180 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(74,222,128,0.35)]"
                    >
                        View selected work
                        <span className="font-mono">→</span>
                    </a>
                    <a
                        href="/Zay_Yar_Phone_Pai_CV.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 px-6.5 py-3.5 border border-glass-border bg-glass-bg backdrop-blur-[14px] [-webkit-backdrop-filter:blur(14px)] text-text-body font-medium text-[15px] rounded-[10px] transition-all duration-180 hover:border-line-strong-2"
                    >
                        Download CV
                    </a>
                </div>
            </div>

            {/* Circular Headshot / Illustration */}
            <div className="flex justify-center">
                <div className="relative w-[280px] h-[280px]">
                    {/* Ring gradient */}
                    <div 
                        className="absolute inset-[-1px] rounded-full p-[1px]" 
                        style={{
                            background: "linear-gradient(150deg, color-mix(in srgb, var(--accent) 60%, transparent), var(--hairline) 55%)"
                        }}
                    ></div>
                    <div className="absolute inset-0 rounded-full overflow-hidden bg-surface-2">
                        <img
                            src="/images/zypp-illustration.png"
                            alt="Zay Yar Phone Pai"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};