import { useEffect, useState } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`
            fixed top-2 left-4 right-4 z-50
            flex items-center justify-between
            px-10 py-6
            transition-all duration-300
            ${
            scrolled
                ? "bg-white/5 backdrop-blur-sm shadow-lg border border-white/10 rounded-2xl mx-4"
                : "bg-transparent rounded-none mx-0"
                }
            `}
        >
            <a href="/">
                <img
                    src="/images/logo-b9.png"
                    alt="Logo"
                    className="h-11 w-auto"
                />
            </a>

            <a href="/dashboard">
                <img
                    src="/images/menu.png"
                    alt="Menu"
                    className="h-8 w-auto cursor-pointer"
                />
            </a>
        </header>
    );
}
