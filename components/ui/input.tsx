import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full rounded-[4px] border border-[#222222] bg-[#161616] px-4 py-2 text-sm text-white placeholder:text-[#555555] transition-colors focus:outline-none focus:border-[#e3000f] focus:shadow-[0_0_0_1px_rgba(227,0,15,0.3)] disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
