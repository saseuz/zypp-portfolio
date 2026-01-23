import { Icon } from "@iconify/react";
import { useTheme } from "../context/ThemeContext";

export const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white/30 dark:bg-stone-800/30 backdrop-blur-sm text-gray-800 dark:text-yellow-400 hover:shadow-md transition-all duration-300 cursor-pointer"
            aria-label="Toggle Theme"
        >
            {theme === "light" ? (
                <Icon icon="ph:moon-bold" width={20} />
            ) : (
                <Icon icon="ph:sun-bold" width={20} />
            )}
        </button>
    );
};
