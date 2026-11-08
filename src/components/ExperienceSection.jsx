export const ExperienceSection = () => {
    const roles = [
        {
            years: "2024 — Present (Independent)",
            company: "Full-Stack Web Developer",
            details: "Built production-grade platforms including PuTu (mobile backend & admin CMS), Social Aether (React 19 + Laravel 13 social network with real-time notifications), and Lito Dictionary (Next.js + Manifest V3 extension)."
        },
        // {
        //     years: "Aug 2022 – Mar 2024",
        //     company: "Career Break",
        //     details: "Took a planned break to care for a family member, while continuing to build technical skills through Harvard's CS50x (completed December 2024) and self-directed learning"
        // },
        {
            years: "2020 — 2022",
            company: "Freelance Full-Stack Developer",
            details: "Migrated product media infrastructure, reducing page load times and boosting stability."
        },
        {
            years: "2019 — 2020",
            company: "Za Information Technology",
            details: "Mid-Level Full-Stack Developer."
        },
        {
            years: "2016 — 2019",
            company: "Mega Myanmar Links",
            details: "Full-Stack Developer."
        }
    ];

    return (
        <section id="experience" className="border-t border-hairline bg-tint">
            <div className="max-w-[1120px] mx-auto px-6 md:px-8 py-24">
                {/* Tag */}
                <div className="font-mono text-[13px] tracking-[0.06em] uppercase text-accent mb-4">
                    Experience
                </div>

                {/* Heading */}
                <h2 className="font-display font-semibold text-[clamp(28px,3.4vw,40px)] tracking-[-0.02em] text-text-primary mb-14">
                    A decade of shipping.
                </h2>

                {/* List */}
                <div className="border-b border-hairline-2">
                    {roles.map(({ years, company, details }) => (
                        <div
                            key={company}
                            className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2 md:gap-6 py-7 border-t border-hairline-2 align-baseline"
                        >
                            <div className="font-mono text-[14px] text-muted">
                                {years}
                            </div>
                            <div>
                                <h3 className="font-display font-semibold text-[20px] text-text-primary mb-1.5">
                                    {company}
                                </h3>
                                <p className="text-[15px] text-muted">
                                    {details}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};