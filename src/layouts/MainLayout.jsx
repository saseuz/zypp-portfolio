import { Footer } from "../components/Footer"
import { Header } from "../components/Header"

export const MainLayout = ({ children }) => {
    return (
        <div className="relative min-h-screen bg-bg text-text-body transition-colors duration-300">
            {/* Ambient Glow Background */}
            <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(50%_40%_at_12%_4%,color-mix(in_srgb,var(--accent)_16%,transparent),transparent_60%),radial-gradient(46%_42%_at_96%_26%,color-mix(in_srgb,var(--accent)_9%,transparent),transparent_62%)]"></div>

            <div className="relative z-10 flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow">
                    {children}
                </main>
                <Footer />
            </div>
        </div>
    )
}