export const WhatIdoSection = () => {
    const items = [
        {
            num: "01",
            title: "Backend Architecture",
            description: "Laravel & Django systems built for scale — designed to stay maintainable as they grow."
        },
        {
            num: "02",
            title: "API & Integration",
            description: "REST APIs, mobile backends, and third-party integrations that just work."
        },
        {
            num: "03",
            title: "Admin & Dashboards",
            description: "Secure RBAC, analytics, and management tools teams actually rely on daily."
        },
        {
            num: "04",
            title: "Performance & Security",
            description: "Query optimization, authentication, and best practices baked in from the start."
        }
    ];

    return (
        <section className="max-w-[1120px] mx-auto px-6 md:px-8 py-24">
            {/* Tag */}
            <div className="font-mono text-[13px] tracking-[0.06em] uppercase text-accent mb-4">
                What I Do
            </div>

            {/* Heading */}
            <h2 className="font-display font-semibold text-[clamp(28px,3.4vw,40px)] tracking-[-0.02em] text-text-primary mb-14 max-w-[640px]">
                Full-stack engineering, end to end.
            </h2>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {items.map(({ num, title, description }) => (
                    <div
                        key={num}
                        className="bg-glass-bg backdrop-blur-[16px] [-webkit-backdrop-filter:blur(16px)] border border-glass-border rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.16)] p-9 md:px-10 md:py-9 transition-transform duration-200 hover:-translate-y-0.5"
                    >
                        <div className="font-mono text-[13px] text-faint-2 mb-4.5">
                            {num}
                        </div>
                        <h3 className="font-display font-semibold text-[21px] text-text-primary mb-2.5">
                            {title}
                        </h3>
                        <p className="text-[15px] line-height-[1.6] text-muted">
                            {description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};