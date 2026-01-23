import { Footer } from "../components/Footer"
import { Header } from "../components/Header"

export const MainLayout = ({ children }) => {
    return (
        <div className="mx-auto my-6 max-w-xl md:max-w-3xl lg:max-w-6xl min-h-screen">
            <Header />

            <main className="mt-24">
                {children}
            </main>

            <Footer />
        </div>
    )
}