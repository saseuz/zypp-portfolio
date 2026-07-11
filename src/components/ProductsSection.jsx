import { Icon } from "@iconify/react";

export const ProductsSection = () => {
    const projects = [
        {
            title: "TasteBoat",
            type: "Recipe platform",
            tech: "Laravel · Vue · React · Vite · Tailwind",
            description: "Cook and save favourites, rate dishes, and track your own meals — recipes curated by real cooks, not the algorithm.",
            link: "https://tasteboat.vercel.app/",
            image: "/images/tasteboat.png"
        },
        {
            title: "Pacific-AA Online Shop",
            type: "E-commerce",
            tech: "Laravel · Vue",
            description: "A secure e-commerce platform with product categories, promotions, and a checkout tuned for performance under load.",
            link: "https://onlineshop.aa.com.mm/",
            image: "/images/aa-shop.png"
        },
        {
            title: "Melo Music",
            type: "Streaming",
            tech: "Laravel · Vue",
            description: "A music streaming platform with subscriptions, payments, and a mobile API powering playback across devices.",
            link: "https://melomm.com/",
            image: "/images/melo-music.png"
        },
        {
            title: "Myanmar Post & Logistics",
            type: "Logistics",
            tech: "Laravel · Vue",
            description: "Real-time shipment tracking with role-based access for admins and clients.",
            link: "https://myanmarpost.com.mm/",
            image: "/images/mmpost.png",
            stat: {
                value: "500+",
                label: "shipments tracked daily"
            }
        }
    ];

    return (
        <section id="work" className="max-w-[1120px] mx-auto px-6 md:px-8 py-24">
            {/* Header info */}
            <div className="flex items-end justify-between gap-6 mb-14 flex-wrap">
                <div>
                    <div className="font-mono text-[13px] tracking-[0.06em] uppercase text-accent mb-4">
                        Selected Projects
                    </div>
                    <h2 className="font-display font-semibold text-[clamp(28px,3.4vw,40px)] tracking-[-0.02em] text-text-primary">
                        Real systems. Real users. Real impact.
                    </h2>
                </div>
                <div className="font-mono text-[13px] text-faint">
                    04 projects
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map(({ title, type, tech, description, link, image, stat }) => (
                    <div
                        key={title}
                        className="group border border-glass-border rounded-2xl overflow-hidden bg-glass-bg backdrop-blur-[16px] [-webkit-backdrop-filter:blur(16px)] shadow-[0_10px_34px_rgba(0,0,0,0.20)] transition-all duration-200 hover:border-[color-mix(in_srgb,var(--accent)_45%,transparent)] hover:-translate-y-[3px]"
                    >
                        {/* Aspect Ratio Image Container */}
                        <div className="relative aspect-[16/10] bg-surface border-b border-hairline-2 overflow-hidden">
                            <img
                                src={image}
                                alt={title}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                            />
                        </div>
                        {/* Content */}
                        <div className="p-7 sm:p-7.5 md:p-[30px] flex flex-col justify-between flex-grow">
                            <div>
                                <div className="flex items-baseline justify-between gap-3 mb-2">
                                    <h3 className="font-display font-semibold text-[23px] text-text-primary">
                                        {title}
                                    </h3>
                                    <span className="font-mono text-[12px] text-faint">
                                        {type}
                                    </span>
                                </div>
                                <div className="font-mono text-[12px] text-accent mb-4">
                                    {tech}
                                </div>
                                <p className="text-[15px] leading-[1.62] text-muted mb-5.5">
                                    {description}
                                </p>
                            </div>

                            <div>
                                {stat && (
                                    <div className="inline-flex items-baseline gap-2 mb-5.5">
                                        <span className="font-display font-bold text-[28px] text-text-primary leading-none">
                                            {stat.value}
                                        </span>
                                        <span className="text-[13px] text-faint">
                                            {stat.label}
                                        </span>
                                    </div>
                                )}
                                <div>
                                    <a
                                        href={link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-[14px] font-medium text-text-body transition-all duration-180 group-hover:gap-3.5 group-hover:text-accent"
                                    >
                                        View case study
                                        <span className="font-mono">→</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};