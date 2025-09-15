import {useState} from 'react';
import { MdMenu, MdEmail } from "react-icons/md";
import { SiLinkedin, SiGithub } from "react-icons/si";


const NAV = [
    { href: "#about", label: "About"},
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills"},
    { href: "#resume", label: "Resume"},
] as const;


const SOCIAL = [
    {href: "https://github.com/jealee44", label: "GitHub", Icon: SiGithub },
    {href: "https://linkedin.com/in/jealee44", label: "LinkedIn", Icon: SiLinkedin },
    {href: "mailto:jealee44@gmail.com", label: "Email", Icon: MdEmail },
] as const;

export default function NavBar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-40 bg-dark/40 backdrop-blur-md border-b border-cyan-light/50">
            <nav className="container-90 h-18 flex justify-between items-center">
                <a  
                    href="#about" 
                    className="font-family-heading text-cyan-light hover:[text-shadow:0_0_14px_var(--color-cyan-light)] text-base md:text-xl tracking-wide">
                    JEA LEE
                </a>

            <div className="hidden md:flex items-center gap-6">
                <ul className="flex items-center gap-6 font-family-heading text-cyan-light/85 text-base md:text-xl">     
                    {NAV.map((n) => (
                        <li key={n.href}>
                            <a
                                href={n.href}
                                className="relative inline-block underline-offset-8 hover:underline hover:text-cyan-light hover:[text-shadow:0_0_14px_var(--color-cyan-light)]">
                                {n.label}
                            </a>
                        </li>
                    ))}
                </ul>

            <div className="ml-2 flex items-center gap-3">
                {SOCIAL.map(({ href, label, Icon }) => (
                    <a
                        key={label}
                        href={href}
                        aria-label={label}
                        className="p-1 text-cyan-light/70 hover:text-cyan-light hover:[text-shadow:0_0_10px_var(--color-cyan-light)] focus:outline-none focus:ring-2 focus:ring-[color-var(--color-cyan-light)]/60 rounded "
                    >
                        <Icon size={22} />
                    </a>
                ))}
            </div>
            </div>

            <button
                type="button"
                aria-label="Open Menu"
                onClick={() => setOpen(true)}
                className="md:hidden p-2 text-cyan-light/85 hover:text-cyan-light"
            >
                <MdMenu size={28} />
            </button>
            </nav>
        </header>
    );
}