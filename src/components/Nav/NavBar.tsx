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
        <header className="bg-dark/40 backdrop-blur-md text-cyan-light font-family-heading border-b ">
            <nav className="px-4 flex justify-between mx-auto max-w-screen h-18 items-center ">
                <a href="#about">JEA LEE</a>

                <ul className="hidden md:flex gap-6 items-center">
                    <li><a href="#about">About</a></li>
                    <li><a href="projects">Projects</a></li>
                    <li><a href="skills">Skills</a></li>
                    <li><a href="resume">Resume</a></li>
                </ul>

                <div>
                    icons
                    icons
                    icons
                </div>
            </nav>
        </header>
    );
}