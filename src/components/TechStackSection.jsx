const stackRows = [
    { label: "Backend",  items: "Laravel\u00a0·\u00a0 Django\u00a0·\u00a0 PHP\u00a0·\u00a0 Python" },
    { label: "Frontend", items: "React\u00a0·\u00a0 Vue\u00a0·\u00a0 Next.js\u00a0·\u00a0 TypeScript\u00a0·\u00a0 Vite" },
    { label: "Database", items: "MySQL\u00a0·\u00a0 PostgreSQL\u00a0·\u00a0 Redis\u00a0·\u00a0 MongoDB" },
    { label: "Tools",    items: "Git\u00a0·\u00a0 GitHub\u00a0·\u00a0 REST APIs\u00a0·\u00a0 Postman" },
];

export const TechStackSection = () => {
    return (
        <section
            id="stack"
            className="border-t border-hairline bg-tint"
        >
            <div className="max-w-[1120px] mx-auto px-6 md:px-8 py-16 md:py-24">
                {/* Label */}
                <div className="font-mono text-[13px] tracking-[0.06em] uppercase mb-4 text-accent">
                    Tech Stack
                </div>

                {/* Heading */}
                <h2 className="font-display font-semibold tracking-[-0.02em] mb-11 text-text-primary text-[clamp(28px,3.4vw,40px)]">
                    The toolkit.
                </h2>

                {/* Glass table */}
                <div className="backdrop-blur-[16px] [-webkit-backdrop-filter:blur(16px)] rounded-[18px] shadow-[0_10px_34px_rgba(0,0,0,0.18)] px-6 md:px-[34px] py-3 bg-glass-bg border border-glass-border">
                    {stackRows.map(({ label, items }, i) => (
                        <div
                            key={label}
                            className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2 md:gap-6 py-6 border-b border-hairline-2 last:border-b-0"
                        >
                            <div className="font-mono text-[13px] uppercase tracking-[0.04em] md:pt-[3px] text-faint">
                                {label}
                            </div>
                            <div className="font-display text-[17px] sm:text-[19px] leading-[1.9] text-text-body">
                                {items}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
