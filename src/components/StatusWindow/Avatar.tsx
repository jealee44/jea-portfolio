import type { CSSProperties } from "react";

type AvatarProps = { className?: string };
type CSSVars = CSSProperties & { ['--aura']?: string};

export default function Avatar({className = ''}: AvatarProps) {
    const style: CSSVars = { '--aura': 'aura 3.5s ease-in-out infinite' };

    return (
        <div className={`relative ${className}`} style={style}>
            <div 
                aria-hidden="true"
                className="absolute inset-0 -z-10 blur-2xl opacity-70"
                style={{
                    background: `
                    radial-gradient(60% 60% at 50% 65%, var(--color-cyan-light), transparent 70%),
                    radial-gradient(45% 45% at 25% 20%, color-mix(in oklab, var(--color-purple) 70%, transparent), transparent 80%),
                    radial-gradient(40% 40% at 80% 20%, color-mix(in oklab, var(--color-blue) 70%, transparent), transparent 85%)
                    `,
                }}
            />

            <img   
                src="/images/avatar.png"
                alt="Avatar of Jea Lee"
                width={560}
                height={980}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                draggable={false}
                className="
                w-full h-auto object-contain select-none pointer-events-none
                [filter:drop-shadow(0_0_10px_var(--color-cyan))_drop-shadow(0_0_20px_var(--color-purple))]
                will-change-[filter,transform]
                motion-safe:animate-(--aura)"
            />
        </div>
    )
}