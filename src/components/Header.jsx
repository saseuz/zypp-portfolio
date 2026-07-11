import { useState } from "react"
import { useTheme } from "../context/ThemeContext"

export const Header = () => {
    const { theme, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <header className="sticky top-0 z-50 backdrop-blur-[16px] [-webkit-backdrop-filter:blur(16px)] bg-nav-bg border-b border-glass-border w-full">
            <div className="max-w-[1120px] mx-auto px-6 md:px-8 py-4 flex items-center justify-between">
                {/* Branding / Logo */}
                <a href="#top" onClick={closeMenu} className="font-display font-bold text-[16px] tracking-[-0.01em] flex items-center gap-2.5 text-text-primary">
                    <span className="inline-flex items-center justify-center w-7 h-7 border border-accent rounded-[7px] text-accent text-[13px] font-bold">
                        ZP
                    </span>
                    <span className="hidden sm:inline">Zay Yar Phone Pai</span>
                    <span className="inline sm:hidden">Zay Yar</span>
                </a>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex items-center gap-5.5 text-[14px] text-muted">
                    <a href="#work" className="transition-colors duration-180 hover:text-text-primary">Work</a>
                    <a href="#stack" className="transition-colors duration-180 hover:text-text-primary">Stack</a>
                    <a href="#experience" className="transition-colors duration-180 hover:text-text-primary">Experience</a>
                    <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 border border-line-strong rounded-full text-text-body transition-all duration-180 hover:border-line-strong-2 hover:bg-hover-bg">
                        Contact
                    </a>
                    <a href="/Zay_Yar_Phone_Pai_Resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-[18px] py-2 rounded-full bg-accent text-[#0A0A0B] font-semibold transition-all duration-180 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(74,222,128,0.3)]">
                        Resume
                    </a>
                    <button
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                        className="inline-flex items-center justify-center w-9 h-9 border border-line-strong rounded-full bg-transparent text-text-body cursor-pointer transition-all duration-180 hover:border-line-strong-2 hover:bg-hover-bg"
                    >
                        {theme === "dark" ? (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                                <circle cx="12" cy="12" r="4"></circle>
                                <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"></path>
                            </svg>
                        ) : (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"></path>
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Navigation controls */}
                <div className="flex md:hidden items-center gap-3">
                    <button
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                        className="inline-flex items-center justify-center w-9 h-9 border border-line-strong rounded-full bg-transparent text-text-body cursor-pointer transition-all duration-180 hover:border-line-strong-2 hover:bg-hover-bg"
                    >
                        {theme === "dark" ? (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                                <circle cx="12" cy="12" r="4"></circle>
                                <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"></path>
                            </svg>
                        ) : (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"></path>
                            </svg>
                        )}
                    </button>

                    <button
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                        className="inline-flex items-center justify-center w-9 h-9 border border-line-strong rounded-full bg-transparent text-text-body cursor-pointer transition-all duration-180 hover:border-line-strong-2 hover:bg-hover-bg"
                    >
                        {isOpen ? (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        ) : (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Expandable Overlay Drawer */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 border-b border-glass-border bg-bg flex flex-col px-6 py-6 gap-4 shadow-lg">
                    <a href="#work" onClick={closeMenu} className="text-[15px] font-medium text-text-secondary py-2.5 border-b border-hairline hover:text-text-primary transition-colors">Work</a>
                    <a href="#stack" onClick={closeMenu} className="text-[15px] font-medium text-text-secondary py-2.5 border-b border-hairline hover:text-text-primary transition-colors">Stack</a>
                    <a href="#experience" onClick={closeMenu} className="text-[15px] font-medium text-text-secondary py-2.5 border-b border-hairline hover:text-text-primary transition-colors">Experience</a>
                    <a href="#contact" onClick={closeMenu} className="inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-line-strong rounded-full text-text-body font-medium transition-all duration-180 hover:border-line-strong-2 hover:bg-hover-bg mt-2">
                        Contact
                    </a>
                    <a href="/Zay_Yar_Phone_Pai_Resume.pdf" target="_blank" rel="noopener noreferrer" onClick={closeMenu} className="inline-flex items-center justify-center gap-2 px-[18px] py-2.5 rounded-full bg-accent text-[#0A0A0B] font-semibold transition-all duration-180 hover:shadow-[0_8px_20px_rgba(74,222,128,0.3)]">
                        Resume
                    </a>
                </div>
            )}
        </header>
    )
}