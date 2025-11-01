import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-xl text-base font-bold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl hover:shadow-2xl hover:scale-105 border-2 border-primary-dark",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-xl hover:shadow-2xl hover:scale-105 border-2 border-destructive/80",
        outline: "border-3 border-primary bg-background hover:bg-primary hover:text-primary-foreground shadow-lg hover:shadow-xl hover:scale-105",
        secondary: "bg-accent text-accent-foreground hover:bg-accent/90 shadow-xl hover:shadow-2xl hover:scale-105 border-2 border-accent/80",
        ghost: "hover:bg-primary/10 hover:text-primary font-bold",
        link: "text-primary underline-offset-4 hover:underline font-bold",
        premium: "bg-gradient-to-r from-primary via-primary-light to-primary text-primary-foreground shadow-2xl hover:shadow-primary hover:scale-110 font-extrabold border-2 border-primary-dark",
        glass: "backdrop-blur-xl bg-primary/10 border-3 border-primary/40 hover:bg-primary/20 hover:border-primary shadow-xl text-foreground font-bold",
      },
      size: {
        default: "h-14 px-8 py-4 text-base",
        sm: "h-11 rounded-xl px-6 py-3 text-sm",
        lg: "h-16 rounded-xl px-12 py-5 text-lg",
        icon: "h-14 w-14",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
