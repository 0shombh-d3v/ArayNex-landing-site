import * as React from "react"
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs))
}

export const H1 = ({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h1 className={cn("text-4xl md:text-5xl lg:text-6xl font-manrope font-bold text-on-surface tracking-tight", className)} {...props}>
    {children}
  </h1>
)

export const H2 = ({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h2 className={cn("text-3xl md:text-4xl font-manrope font-semibold text-on-surface tracking-tight transition-colors", className)} {...props}>
    {children}
  </h2>
)

export const H3 = ({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3 className={cn("text-2xl font-manrope font-semibold text-on-surface tracking-tight", className)} {...props}>
    {children}
  </h3>
)

export const P = ({ className, children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className={cn("text-base md:text-lg leading-7 text-on-surface-variant", className)} {...props}>
    {children}
  </p>
)

export const Lead = ({ className, children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className={cn("text-xl md:text-2xl text-on-surface-variant font-medium", className)} {...props}>
    {children}
  </p>
)
