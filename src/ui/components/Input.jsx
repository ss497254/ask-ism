import React, { forwardRef } from "react";

export const Input = forwardRef(
    ({ className, textarea, error, transparent, ...props }, ref) => {
        const bg = transparent
            ? `bg-transparent`
            : `bg-gray-100 dark:bg-dark-700`;
        const ring = error ? `ring-1 ring-secondary` : "";
        const cn = `w-full py-2 rounded-8 text-gray-900 dark:text-gray-100 placeholder-gray-700 dark:placeholder-gray-300 focus:outline-none ${bg} ${ring} ${className} `;

        return textarea ? (
            <textarea
                ref={ref}
                className={cn}
                data-testid="textarea"
                {...props}
            />
        ) : (
            <input ref={ref} className={cn} data-testid="input" {...props} />
        );
    }
);

Input.displayName = "Input";
