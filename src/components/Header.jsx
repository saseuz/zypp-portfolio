import { Icon } from "@iconify/react"

export const Header = () => {
    return (
        <header className="my-6 fixed top-0 left-0 right-0 z-50">
            <div className="flex justify-center items-center">
                <nav className="bg-stone-900/30 backdrop-blur-sm border border-gray-600 rounded-full px-4 py-2 shadow-md hover:shadow-lg shadow-gray-700 duration-300">
                    <ul className="flex gap-4 font-bold">
                        <li>
                            <a href="#home" className="flex items-center gap-1 hover:text-orange-400 duration-300 hover:-translate-y-0.5">
                                <Icon icon="mdi:person" width={24} className="text-orange-400" />
                                <span>About Me</span>
                            </a>
                        </li>
                        <li>
                            <a href="#projects" className="flex items-center gap-1 hover:text-blue-500 duration-300 hover:-translate-y-0.5">
                                <Icon icon="mdi:folder-open" width={24} className="text-blue-500" />
                                <span>Projects</span>
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="flex items-center gap-1 hover:text-green-500 duration-300 hover:-translate-y-0.5">
                                <Icon icon="mdi:phone" width={24} className="text-green-500" />
                                <span>Contact</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}