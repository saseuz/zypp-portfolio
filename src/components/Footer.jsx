export const Footer = () => {
    return (
        <footer className="border-t border-hairline mt-auto">
            <div className="max-w-[1120px] mx-auto px-6 md:px-8 py-9 flex items-center justify-between flex-wrap gap-4 text-[13px] text-faint">
                <span className="font-mono">
                    © 2026 Zay Yar Phone Pai
                </span>
                <a
                    href="#top"
                    className="font-mono transition-colors duration-180 hover:text-accent"
                >
                    Back to top ↑
                </a>
            </div>
        </footer>
    );
};