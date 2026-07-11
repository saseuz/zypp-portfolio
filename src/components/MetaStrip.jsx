export const MetaStrip = () => (
    <div className="border-t border-b border-hairline transition-colors duration-300">
        <div className="max-w-[1120px] mx-auto px-6 md:px-8 py-5 flex flex-wrap items-center justify-between gap-y-3 font-mono text-[13px] tracking-[0.02em] text-faint">
            <div className="flex flex-wrap gap-x-10 gap-y-2">
                <span>Laravel</span>
                <span>Django</span>
                <span>React</span>
                <span>Vue</span>
            </div>
            <span className="text-muted md:ml-auto">Based in Bangkok, Thailand</span>
        </div>
    </div>
);
