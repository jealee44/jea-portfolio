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
                <a href="#about" className="font-family-heading text-cyan-light">JEA LEE</a>

                <ul className="hidden md:flex gap-6 items-center font-family-heading text-cyan-light/80">
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#resume">Resume</a></li>
                    icons
                    icons
                    icons
                </ul>
            </nav>
        </header>
    );
}