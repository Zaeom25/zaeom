import React from "react"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface CTAButtonProps {
    children: React.ReactNode
    href?: string
    onClick?: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void
    className?: string
    icon?: LucideIcon
    showGlow?: boolean
    showLine?: boolean
    variant?: "primary" | "nav" | "footer"
    target?: string
    rel?: string
}

export const CTAButton = ({
    children,
    href,
    onClick,
    className,
    icon: Icon,
    showGlow = true,
    showLine = true,
    variant = "primary",
    target,
    rel
}: CTAButtonProps) => {
    const Component = href ? "a" : "button"
    const isExternal = href?.startsWith("http") || href?.startsWith("https") || href?.startsWith("wa.me")

    const finalTarget = target || (isExternal ? "_blank" : undefined)
    const finalRel = rel || (isExternal ? "noopener noreferrer" : undefined)

    // Base styles from the Hero button
    const baseStyles = "group inline-flex cursor-pointer transition-all duration-500 hover:-translate-y-1.5 hover:scale-[1.02] border border-white/10 text-white bg-white/5 backdrop-blur-3xl rounded-2xl relative items-center justify-center overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.6)]"

    // Variant specific adjustments
    const variants = {
        primary: "w-full md:min-w-[300px] text-[10px] xs:text-xs md:text-sm font-bold tracking-[0.1em] py-5 md:py-7 px-6 md:px-10 gap-3 md:gap-5",
        nav: "min-w-[160px] sm:min-w-[200px] text-[9px] sm:text-[11px] font-black tracking-[0.15em] py-3.5 sm:py-4 px-6 sm:px-8 gap-2 sm:gap-3",
        footer: "w-full sm:min-w-[300px] text-[10px] xs:text-xs md:text-sm font-bold tracking-[0.1em] py-5 md:py-7 px-6 md:px-10 gap-3 md:gap-5"
    }

    return (
        <div className={cn("inline-block group relative", variant === "nav" ? "" : "w-full md:w-auto", className)}>
            <Component
                href={href}
                onClick={onClick}
                target={finalTarget}
                rel={finalRel}
                className={cn(baseStyles, variants[variant])}
            >
                <span className="relative z-10 uppercase font-black tracking-[0.1em] sm:tracking-[0.2em]">{children}</span>
                {Icon && (
                    <Icon className={cn(
                        "text-[#39F265] fill-current drop-shadow-[0_0_8px_rgba(57,242,101,0.5)]",
                        variant === "nav" ? "w-4 h-4" : "w-5 h-5 md:w-6 md:h-6",
                        Icon.name === "MousePointer2" ? "rotate-90" : ""
                    )} />
                )}

                {/* Internal Highlight Animation */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#39F265]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {showLine && (
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#39F265]/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                )}
            </Component>

            {showGlow && (
                <span
                    className={cn(
                        "pointer-events-none absolute left-1/2 z-0 rounded-full opacity-0 transition-all duration-700 ease-out group-hover:opacity-100",
                        variant === "nav" ? "-bottom-4 h-10 w-32 -translate-x-1/2 blur-[15px]" : "-bottom-10 h-20 w-72 -translate-x-1/2 blur-[30px]"
                    )}
                    style={{ background: variant === "nav" ? 'radial-gradient(50% 50% at 50% 50%, rgba(57, 242, 101, 0.15), transparent 85%)' : 'radial-gradient(50% 50% at 50% 50%, rgba(57, 242, 101, 0.25), transparent 85%)' }}
                    aria-hidden="true"
                />
            )}
        </div>
    )
}
