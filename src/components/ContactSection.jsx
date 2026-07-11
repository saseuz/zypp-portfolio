export const ContactSection = () => {
    return (
        <section id="contact" className="max-w-[1120px] mx-auto px-6 md:px-8 py-16 md:py-[110px]">
            <div
                className="rounded-[22px] px-6 sm:px-14 py-12 sm:py-16 backdrop-blur-[20px] [-webkit-backdrop-filter:blur(20px)] shadow-[0_12px_40px_rgba(0,0,0,0.22)] text-center border border-glass-border"
                style={{
                    background: "radial-gradient(120% 140% at 100% 0%, color-mix(in srgb, var(--accent) 16%, transparent), transparent 55%), var(--glass-bg)",
                }}
            >
                {/* Heading */}
                <h2 className="font-display font-bold tracking-[-0.03em] mb-5 text-text-primary text-[clamp(32px,4.4vw,52px)]">
                    Let's build something solid.
                </h2>

                {/* Body */}
                <p className="text-[18px] leading-[1.6] max-w-[560px] mx-auto mb-10 text-text-2">
                    Have a system or platform to build? I work with teams and individuals on scalable, production-ready applications.
                </p>

                {/* Email */}
                <a
                    href="mailto:zayyarphonepai95@gmail.com"
                    className="inline-flex items-center gap-3 font-mono px-6 sm:px-[30px] py-4 rounded-[12px] mb-9 border border-line-strong text-text-primary text-[clamp(15px,2.2vw,20px)] transition-all duration-180 hover:border-line-strong-2 hover:bg-hover-bg"
                >
                    zayyarphonepai95@gmail.com
                </a>

                {/* Social links */}
                <div className="flex justify-center gap-3.5 flex-wrap">
                    {[
                        { href: "https://www.linkedin.com/in/zyphpi/", label: "LinkedIn" },
                        { href: "https://github.com/saseuz",            label: "GitHub"   },
                    ].map(({ href, label }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-[11px] rounded-full text-[14px] border border-line-strong text-text-body transition-all duration-180 hover:border-line-strong-2 hover:bg-hover-bg"
                        >
                            {label}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};
