import { useState, useEffect } from 'react';
import { MdMenu, MdEmail, MdClose } from "react-icons/md";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { motion, AnimatePresence } from 'motion/react';


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
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (href: string) => {
        setOpen(false);
        const element = document.querySelector(href);
        element?.scrollIntoView( { behavior: 'smooth' });
    };

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [open]);

    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 
                ${hasScrolled ? 'bg-[var(--color-dark)]/60 backdrop-blur-md' : 'bg-[var(--color-dark)]/40 backdrop-blur-sm'} 
                border-b border-[var(--color-cyan-light)]/20`}>
                <nav className="container-90 h-20 flex justify-between items-center"> 
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

            <AnimatePresence>
                {open && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1}}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 md:hidden"
                    >
                        <div className="absolute inset-0 bg-dark/95 backdrop-blur-md "
                        onClick={() => setOpen(false)}
                        />

                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                            w-[90%] max-w-sm
                            [background:var(--panel-gradient)]
                            [box-shadow:var(--panel-shadow)]
                            border-2 border-[var(--color-cyan-light)]/50 p-8"
                        >

                            <button
                                onClick={() => setOpen(false)}
                                className="absolute top-4 right-4 text-cyan-light/50 hover:[text-shadow:0_0_10px_var(--color-cyan-light)] hover:text-cyan-light transition-all duration-200 hover:scale-110"
                                aria-label="Close Menu"
                            >
                                <MdClose size={24} />
                            </button>

                            <nav className="flex flex-col items-center gap-6 mt-8">
                                {NAV.map((item) => (
                                    <button 
                                        key={item.label}
                                        onClick={() => scrollToSection(item.href)}
                                        className="text-2xl font-family-heading text-cyan-light hover:[text-shadow:0_0_10px_var(--color-cyan-light)] transition-all tracking-wider hover:scale-110">
                                            {item.label}
                                        </button>
                                ))}

                            <div className="flex items-center gap-6 mt-6 pt-6 border-t border-[var(--color-cyan-light)]/30">
                                {SOCIAL.map(({href, label, Icon }) => (
                                    <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-cyan-light/70 hover:text-cyan-light hover:[text-shadow:0_0_10px_var(--color-cyan-light)] transition-all hover:scale-110"
                                    >
                                    <Icon size={28} />
                                    </a>
                                ))}
                            </div>
                            </nav>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}