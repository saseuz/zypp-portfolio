export const EduSection = () => {
    const certs = [
        {
            title: "B.Sc. in Computer Science",
            issuer: " University of the People · (In Progress)"
        },
        {
            title: "IBM Full Stack Software Developer Professional Certificate",
            issuer: "IBM / Coursera (Nov 2026)"
        },
        {
            title: "CS50's Web Programming with Python & JavaScript",
            issuer: "Harvard University · Jul 2025"
        },
        {
            title: "CS50x — Intro to Computer Science",
            issuer: "Harvard University · Dec 2024"
        },
        // {
        //     title: "Web Professional Advanced",
        //     issuer: "Myanmar Links, Yangon · May 2015"
        // },
        // {
        //     title: "Web Professional Foundation",
        //     issuer: "Myanmar Links, Yangon · Sep 2014"
        // }
    ];

    return (
        <section className="border-t border-hairline bg-tint">
            <div className="max-w-[1120px] mx-auto px-6 md:px-8 py-20">
                {/* Tag */}
                <div className="font-mono text-[13px] tracking-[0.06em] uppercase text-faint mb-9">
                    Certifications
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {certs.map(({ title, issuer }) => (
                        <div
                            key={title}
                            className="bg-glass-bg backdrop-blur-[14px] [-webkit-backdrop-filter:blur(14px)] border border-glass-border rounded-[14px] shadow-[0_6px_22px_rgba(0,0,0,0.14)] p-6.5 sm:px-7.5 sm:py-6.5"
                        >
                            <h3 className="text-[16px] font-semibold text-text-body mb-1.5 leading-snug">
                                {title}
                            </h3>
                            <p className="font-mono text-[13px] text-faint">
                                {issuer}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};